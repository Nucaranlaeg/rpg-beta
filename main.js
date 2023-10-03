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
}

const classes = {};
const races = {};

const ruleSections = {};

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
