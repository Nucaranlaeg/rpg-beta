const RULE_BLOCK = {
	TITLE: 0,
	SUBTITLE: 1,
	SUBSUBTITLE: 2,
	BODY: 3,
	EXAMPLE: 4,
}

let mainNavSelection = "classes";
let subNavSelection = "archer";

const navOptions = {
	"classes": [
		"archer",
		"barbarian",
		"bard",
		"cleric",
		"druid",
		"fighter",
		"monk",
		"paladin",
		"psion",
		"rogue",
		"sorcerer",
		"wizard",
	],
	"races": [
		"human",
		"elf",
		"dwarf",
		"gnome",
		"halfling",
	],
	"character": [
		"creation",
		"levelling",
		"stats",
		"skills",
	],
	"social": [
		"alignment",
	],
	"magic": [
		"spells",
	],
}

const classes = {};
const races = {};

const ruleSections = {};

const spellFilters = {};

function mainNavClick(event){
	if (event.target.classList.contains("nav-button")){
		event.target.closest(".nav").querySelector(".selected")?.classList.remove("selected");
		event.target.classList.add("selected");
		mainNavSelection = event.target.id.replace("nav-", "");
		document.querySelectorAll(".nav:not(:first-of-type)").forEach(node => node.style.display = "none");
		document.querySelector(`#nav-${navOptions[mainNavSelection][0]}`).click();
		document.querySelector(`#sub-header-nav-${mainNavSelection}`).style.display = "block";
	}
}

function subNavClick(event){
	if (event.target.classList.contains("nav-button")){
		event.target.closest(".nav").querySelector(".selected")?.classList.remove("selected");
		event.target.classList.add("selected");
		subNavSelection = event.target.id.replace("nav-", "");
		loadView();
	}
}

function loadView(){
	const contentDiv = document.querySelector("#main-content");
	contentDiv.innerHTML = "";
	if (mainNavSelection === "classes"){
		let featureCount = 0;
		const loadTarget = classes[subNavSelection];
		Object.entries(loadTarget).forEach(category => {
			if (category[0] === "Stats"){
				const statsHTML = `<div class='stats'><div class='${category[1].str ? "associated" : ""}'>STR</div><div class='${category[1].dex ? "associated" : ""}'>DEX</div><div class='${category[1].con ? "associated" : ""}'>CON</div><div class='${category[1].cha ? "associated" : ""}'>CHA</div><div class='${category[1].int ? "associated" : ""}'>INT</div><div class='${category[1].wis ? "associated" : ""}'>WIS</div></div>`;
				contentDiv.innerHTML = statsHTML + contentDiv.innerHTML;
				return;
			}
			const categoryDiv = document.createElement("div");
			contentDiv.appendChild(categoryDiv);
			categoryDiv.classList.add(category[0].replaceAll(" ", "-").toLowerCase());
			categoryDiv.classList.add("category");
			const headerDiv = document.createElement("h4");
			categoryDiv.appendChild(headerDiv);
			headerDiv.innerHTML = category[0];
			category[1].forEach(feature => {
				const featureDiv = document.createElement("div");
				categoryDiv.appendChild(featureDiv);
				featureDiv.classList.add("feature");
				featureDiv.innerHTML = feature.replaceAll("\n", "<br>");
				if (category[0] !== "All" && category[0] !== "Level 1" && category[0] !== "Divine Favour") featureCount++;
			});
			if (category[0] === "Divine Favour") featureCount++;
		});
		console.log(`${subNavSelection} has ${featureCount} features.`);
	} else if (mainNavSelection === "races"){
		const loadTarget = races[subNavSelection];
		Object.entries(loadTarget).forEach(category => {
			if (category[0] === "Stats"){
				const statsHTML = `<div class='stats'><div class='${category[1].str ? "associated" : ""}'>STR</div><div class='${category[1].dex ? "associated" : ""}'>DEX</div><div class='${category[1].con ? "associated" : ""}'>CON</div><div class='${category[1].cha ? "associated" : ""}'>CHA</div><div class='${category[1].int ? "associated" : ""}'>INT</div><div class='${category[1].wis ? "associated" : ""}'>WIS</div></div>`;
				contentDiv.innerHTML = statsHTML + contentDiv.innerHTML;
				return;
			}
			const categoryDiv = document.createElement("div");
			contentDiv.appendChild(categoryDiv);
			categoryDiv.classList.add(category[0].replaceAll(" ", "-").toLowerCase());
			categoryDiv.classList.add("category");
			const headerDiv = document.createElement("h4");
			categoryDiv.appendChild(headerDiv);
			headerDiv.innerHTML = category[0];
			category[1].forEach(feature => {
				const featureDiv = document.createElement("div");
				categoryDiv.appendChild(featureDiv);
				featureDiv.classList.add("feature");
				featureDiv.innerHTML = feature.replaceAll("\n", "<br>");
			});
		});
	} else if (mainNavSelection === "magic" && subNavSelection === "spells"){
		const schoolFilterRow = document.createElement("div");
		schoolFilterRow.classList.add("filter-row");
		Object.values(SCHOOLS).forEach(school => {
			const schoolButton = document.createElement("div");
			schoolButton.classList.add("filter");
			schoolButton.innerHTML = school;
			if (spellFilters[school]){
				schoolButton.classList.add("filtering");
			}
			schoolButton.onclick = ((event) => {
				spellFilters[event.target.innerHTML] = !spellFilters[event.target.innerHTML];
				loadView();
			});
			schoolFilterRow.append(schoolButton);
		});
		contentDiv.appendChild(schoolFilterRow);

		const sourcesFilterRow = document.createElement("div");
		sourcesFilterRow.classList.add("filter-row");
		Object.values(SOURCES).forEach(source => {
			const sourceButton = document.createElement("div");
			sourceButton.classList.add("filter");
			sourceButton.innerHTML = source;
			if (spellFilters[source]){
				sourceButton.classList.add("filtering");
			}
			sourceButton.onclick = ((event) => {
				spellFilters[event.target.innerHTML] = !spellFilters[event.target.innerHTML];
				loadView();
			});
			sourcesFilterRow.append(sourceButton);
		});
		contentDiv.appendChild(sourcesFilterRow);
		contentDiv.appendChild(document.createElement("br"));

		const schoolFilter = Object.values(SCHOOLS).map(school => spellFilters[school] ? school : null).filter(s=>s);
		const sourceFilter = Object.values(SOURCES).map(source => spellFilters[source] ? source : null).filter(s=>s);

		spells.forEach(spell => {
			if (schoolFilter.length && !schoolFilter.includes(spell.spellData.school)) return;
			if (sourceFilter.length && !sourceFilter.some(source => spell.type.some(type => type === source))) return;
			const spellDiv = document.createElement("div");
			spellDiv.classList.add("category");
			spellDiv.innerHTML = `<h4>${spell.name}</h4>` +
				`<div class="spelldata">` +
					`<div class="datum">Range: ${spell.spellData.range}</div>` +
					`<div class="datum">Minimum Mana: ${spell.spellData.minMana}</div>` +
					(spell.requirements?.length ? `<div class="datum">Requires: ${spell.requirements}</div>` : "") + "<br />" +
					`<div class="datum">School: ${spell.spellData.school}</div>` +
					`<div class="datum">Save: ${spell.spellData.save}</div>` +
					(spell.spellData.duration || spell.spellData.upkeep ? "<br />" : "") +
					(spell.spellData.duration ? `<div class="datum">Duration: ${spell.spellData.duration}</div>` : "") +
					(spell.spellData.upkeep ? `<div class="datum">Upkeep: ${spell.spellData.upkeep}</div>` : "") +
				`</div>` +
				`<div class="effect">${spell.effect}</div>` +
				`<div class="effect">${spell.manaEffect}</div>` +
				"";
			contentDiv.appendChild(spellDiv);
		});
	} else {
		const loadTarget = ruleSections[subNavSelection];
		let block = null;
		loadTarget.forEach(entry => {
			let node;
			switch (entry.type){
				case RULE_BLOCK.TITLE:
					node = document.createElement("h2");
					break;
				case RULE_BLOCK.SUBTITLE:
					node = document.createElement("h3");
					break;
				case RULE_BLOCK.SUBSUBTITLE:
					block = document.createElement("div");
					block.classList.add("category");
					node = document.createElement("h4");
					block.appendChild(node);
					break;
				case RULE_BLOCK.BODY:
					node = document.createElement("div");
					node.classList.add("paragraph");
					break;
				case RULE_BLOCK.EXAMPLE:
					node = document.createElement("div");
					node.classList.add("example");
					break;
				default:
					throw "No type on block";
			}
			node.innerHTML = entry.body.replaceAll("\n", "<br><br>");
			if (block){
				if (entry.type === RULE_BLOCK.SUBSUBTITLE) return;
				block.appendChild(node);
				node = block;
				block = null;
			}
			contentDiv.appendChild(node);
		});
	}
}

setTimeout(loadView, 0);
