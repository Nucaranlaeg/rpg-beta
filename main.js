let mainNavSelection = "classes";
let subNavSelection = "barbarian";

const navOptions = {
	"classes": [
		"barbarian",
		"bard",
		"cleric",
		"fighter",
		"monk",
		"paladin",
		"rogue",
		"sorcerer",
		"wizard",
	],
}

const classes = {};

function mainNavClick(event){
	if (event.target.classList.contains("nav-button") && event.target.classList.contains("selected")){
		event.target.closest(".nav").querySelector(".selected")?.classList.remove("selected");
		event.target.classList.add("selected");
		mainNavSelection = event.target.id.replace("nav-", "");
		document.querySelector(`#nav-${navOptions[mainNavSelection][0]}`).click();
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
	if (mainNavSelection == "classes"){
		let featureCount = 0;
		const loadTarget = classes[subNavSelection];
		Object.entries(loadTarget).forEach(category => {
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
				featureDiv.innerHTML = feature;
				if (category[0] !== "All" && category[0] !== "Level 1") featureCount++;
			})
		});
		console.log(`${subNavSelection} has ${featureCount} features.`);
	}
}

setTimeout(loadView, 0);
