class Build {
	stats = {
		STR: {base: null, increase: 0, levels: 0},
		DEX: {base: null, increase: 0, levels: 0},
		CON: {base: null, increase: 0, levels: 0},
		CHA: {base: null, increase: 0, levels: 0},
		INT: {base: null, increase: 0, levels: 0},
		WIS: {base: null, increase: 0, levels: 0},
	}
	points = 54;
	race = null;
	levels = [];
	baseClass = null;
	hasDivineFavour = false;

	updateStats(){
		Object.entries(this.stats).forEach(([name, value]) => {
			const total = value.base + value.increase + value.levels;
			document.querySelector(`#build-${name.toLowerCase()} .stat-value`).innerHTML = value.base === null ? "" : total;
			if (value.base === null){
				document.querySelector(`#build-${name.toLowerCase()} .stat-value`).classList.add("unassigned");
			} else {
				document.querySelector(`#build-${name.toLowerCase()} .stat-value`).classList.remove("unassigned");
			}
			const modifier = Math.floor((total - 10) / 2);
			document.querySelector(`#build-${name.toLowerCase()} .stat-modifier`).innerHTML = value.base === null ? "" : modifier > 0 ? "+" + modifier : modifier;
			document.querySelector(`#build-${name.toLowerCase()} .next-cost-value`).innerHTML = Math.ceil((value.increase + 1) / 2);
		});
		document.querySelector(`#to-spend .stat-value`).innerHTML = this.points;

		// Check stats are valid for race
	}
}

const build = new Build();

let levelNode = null;

let currentAssignStat = null;

function startAssignStat(event, stat){
	currentAssignStat = stat;
	event.preventDefault();
	const menu = document.querySelector("#stat-context-menu");
    menu.style.left = `${event.pageX - 10}px`;
    menu.style.top = `${event.pageY - 10}px`;
	menu.style.display = "block";
	menu.querySelectorAll("div").forEach(node => node.style.display = "block");
	let firstSeven = true;
	Object.values(build.stats).forEach(value => {
		if (value.base){
			index = firstSeven ? {3:1,5:2,7:3,9:5,11:6}[value.base] : {3:1,5:2,7:4,9:5,11:6}[value.base];
			menu.querySelector(`div:nth-of-type(${index})`).style.display = "none";
			if (value.base === 7) firstSeven = false;
		}
	});
	setTimeout(() => document.addEventListener("click", hideContextMenu, {once: true}));
	return false;
}

function finishAssignStat(event){
	let value = +event.target.innerHTML;
	if (isNaN(value)) value = null;
	build.stats[currentAssignStat].base = value;
	while (build.stats[currentAssignStat].base + build.stats[currentAssignStat].increase > 18) decrementStat(currentAssignStat);
	build.updateStats();
	checkRaceStatConflict();
}

function hideContextMenu(){
	document.querySelector("#stat-context-menu").style.display = "none";
}

function incrementStat(stat){
	let cost = Math.ceil((build.stats[stat].increase + 1) / 2);
	if (cost <= build.points && build.stats[stat].base + build.stats[stat].increase < 18){
		build.stats[stat].increase++;
		build.points -= cost;
		build.updateStats();
	}
}

function decrementStat(stat){
	let cost = Math.ceil(build.stats[stat].increase / 2);
	if (build.stats[stat].increase > 0){
		build.stats[stat].increase--;
		build.points += cost;
		build.updateStats();
	}
}

function checkRaceStatConflict(){
	const raceStats = races[build.race]?.["Level 1"].find(feature => feature.slice(0, 4) === "High");
	document.querySelectorAll(".stat.invalid").forEach(node => node.classList.remove("invalid"));
	if (!raceStats){
		return;
	}
	const high = raceStats.replace("High ", "").toUpperCase().slice(0, 3);
	const low = raceStats.replace(/.*Low /, "").toUpperCase().slice(0, 3);
	if (build.stats[high].base && build.stats[high].base < 7){
		document.querySelector(`#build-${high.toLowerCase()}`).classList.add("invalid");
	}
	if (build.stats[low].base && build.stats[low].base > 7){
		document.querySelector(`#build-${low.toLowerCase()}`).classList.add("invalid");
	}
}

function setRace(select){
	build.race = select.value;
	checkRaceStatConflict();
}

function setClass(select){
	const selectedClass = select.value;
	const level = select.closest(".level").dataset.level;
	if (level == 1){
		build.baseClass = selectedClass;
		// Validate or remove later selections
	}
	if (!build.levels[level - 1]){
		build.levels.push({class: selectedClass});
	} else {
		if (build.levels[level - 1].class === selectedClass) return;
		build.levels[level - 1] = {class: selectedClass};
	}
	if (levelNode.dataset.level == build.levels.length){
		levelNode.dataset.level = build.levels.length + 1;
		document.querySelector("#levels").appendChild(levelNode);
		levelNode = levelNode.cloneNode(true);
	}
	displayLevelSelections(level);
}

function displayLevelSelections(level){
	const levelData = build.levels[level - 1];
	if (!levelData) return;
	const levelNode = document.querySelector(`.level:nth-of-type(${level})`);
	if (!levelData.class){
		levelNode.childNodes.slice(1).forEach(node => node.style.display = "none");
		return;
	}
	const featureNode = levelNode.querySelector(".feature");
	const featureSelect = featureNode.querySelector("select");
	while (featureSelect.lastChild.value !== ""){
		featureSelect.removeChild(featureSelect.lastChild);
	}
	if (level != 1){
		featureNode.style.display = "inline-block";
		Object.entries(classes[levelData.class]).forEach(([featureGroup, values]) => {
			if (["Stats", "All"].includes(featureGroup)) return;
			if (featureGroup === "General" || (featureGroup !== "Level 1" && levelData.class === build.baseClass)){
				if (featureGroup === "Divine Favour" && build.hasDivineFavour){
					return;
				}
				values.forEach(feature => {
					const featureName = feature.split(" - ")[0];
					if (build.levels.some((l, i) => l.featureName === featureName && i !== level - 1)) return;
					featureSelect.innerHTML += `<option value="${featureName}">${feature}</option>`;
				});
			}
		});
	} else {
		if (["archer", "bard", "fighter", "sorcerer"].includes(levelData.class)){
			featureNode.style.display = "inline-block";
			Object.entries(classes[levelData.class]).forEach(([featureGroup, values]) => {
				if (!["Archery Styles", "Songs", "Stances", "Metamagic"].includes(featureGroup)) return;
				values.forEach(feature => {
					const featureName = feature.split(" - ")[0];
					if (build.levels.some((l, i) => l.featureName === featureName && i !== level - 1)) return;
					featureSelect.innerHTML += `<option value="${featureName}">${feature}</option>`;
				});
			});
		} else {
			featureNode.style.display = "none";
		}
	}
	const statNode = levelNode.querySelector(".stat");
	statNode.style.display = "inline-block";
	const statSelect = statNode.querySelector("select");
	while (statSelect.lastChild.value !== ""){
		statSelect.removeChild(statSelect.lastChild);
	}
	["STR", "DEX", "CON", "CHA", "INT", "WIS"].forEach(stat => {
		if (!classes[levelData.class].Stats[stat.toLowerCase()]) return;
		statSelect.innerHTML += `<option class="stat-${stat.toLowerCase()}" value="${stat}">${stat}</option>`;
	});
	levelNode.querySelector(".skill").style.display = "inline-block";

	const spellNode = levelNode.querySelector(".spell-1");
	const specializeNode = levelNode.querySelector(".specialize");
	const spellFeatures = ["New Spell", "Specialize"];
	if ((level == 1 && classes[levelData.class]["All"].some(feature => feature.match(/you gain the \w+ magic source/))) || (levelData.feature && spellFeatures.includes(levelData.featureName))){
		spellNode.style.display = "inline-block";
		// Fill spell dropdown
		if (levelData.featureName === "Specialize"){
			specializeNode.style.display = "inline-block";
			// Fill specialize dropdown
		}
		// Check for second spell
	} else {
		spellNode.style.display = "none";
		specializeNode.style.display = "none";
	}
}

function setFeature(select){
	const selectedFeature = select.value;
	const level = +select.closest(".level").dataset.level;
	const featureName = selectedFeature.split(" - ")[0];
	if (build.levels.some((l, i) => l.featureName === featureName && i !== level - 1)){
		const prevValue = build.levels[level - 1].featureName || "";
		select.value = prevValue;
		return;
	}
	build.levels[level - 1].feature = selectedFeature;
	build.levels[level - 1].featureName = featureName;
}

function setStat(select){
	const selectedStat = select.value;
	const level = +select.closest(".level").dataset.level;
	const prevValue = build.levels[level - 1].stat || "";
	if (selectedStat !== "" && build.levels.some((l, i) => l.stat === selectedStat && i >= level - 3 && i <= level + 1)){
		select.value = prevValue;
		return;
	}
	if (build.stats[prevValue]) build.stats[prevValue].levels--;
	if (build.stats[selectedStat]) build.stats[selectedStat].levels++;
	build.levels[level - 1].stat = selectedStat;
	build.updateStats();
}

function setSpell(select){
	const selectedSpell = select.value;
	const level = select.closest(".level").dataset.level;
	throw "Not Implemented"
}

setTimeout(() => {
	build.updateStats();

	// Fill selects
	const raceSelect = document.querySelector("#info-race");
	Object.keys(races).forEach((race) => {
		raceSelect.innerHTML += `<option value="${race}">${race[0].toUpperCase()}${race.slice(1)}</option>`;
	});
	const classSelect = document.querySelector(".level .class select");
	Object.keys(classes).forEach((className) => {
		classSelect.innerHTML += `<option value="${className}">${className[0].toUpperCase()}${className.slice(1)}</option>`;
	});

	levelNode = document.querySelector(".level").cloneNode(true);
});
