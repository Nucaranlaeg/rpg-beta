const creatures = [
	{
		name: "Human Guard",
		stats: {
			STR: 14,
			DEX: 11,
			CON: 13,
			CHA: 10,
			INT: 8,
			WIS: 12,
			HitDice: "4d10",
			HitPoints: 22,
			AC: 17,
			TouchAC: 12,
			FlatfootedAC: 17,
			Morale: 6,
			Speed: 30,
			Size: "M",
		},
		features: {
			"Shield Wall": "When adjacent to an ally with this feature, you can use a reaction to impose Disadvantage when a creature attacks that ally.",
			"Spear Thicket": "When an adjacent ally with this feature attacks a creature, you can use a reaction to attack as well, adding your damage together in one attack.",
		},
		attacks: {
			"Spear": "1d6+2, 2/20",
		}
	},
	{
		name: "Swamp Gator",
		stats: {
			STR: 19,
			DEX: 12,
			CON: 17,
			CHA: 2,
			INT: 1,
			WIS: 12,
			HitDice: "3d8",
			HitPoints: 13,
			AC: 15,
			TouchAC: 11,
			FlatfootedAC: 14,
			Morale: 4,
			Speed: 30,
			Size: "M",
		},
		features: {
			"Powerful Jaw": "When you bite a creature, you hold on to it.  The creature must make a DC 14 Strength save or be immobilized until the end of your next turn.  As a move action, you may drag a immobilized creature up to 10 feet.",
		},
		attacks: {
			"Bite": "1d8+4",
			"Tail Slap": "1d12+6",
		}
	},
	{
		hidden: true,
		name: "Deep One",
		stats: {
			STR: 11,
			DEX: 15,
			CON: 10,
			CHA: 8,
			INT: 11,
			WIS: 10,
			HitDice: "3d8",
			HitPoints: 13,
			AC: 14,
			TouchAC: 12,
			FlatfootedAC: 12,
			Morale: 2,
			Speed: 25,
			Size: "M",
		},
		features: {
			"Waterbreathing": "A deep one can live underwater indefinitely.  If a deep one is not submerged in water for at least one minute per hour, it gains one stack of exhaustion.",
			"Blood in the Water": "When a deep one hits with a trident attack, the jagged edges cause the target to bleed for one minute.  Deep one's trident attacks deal one additional damage for each time the target is bleeding.",
		},
		attacks: {
			"Trident": "1d8",
		}
	},
	{
		hidden: true,
		name: "Deep One Champion",
		stats: {
			STR: 12,
			DEX: 16,
			CON: 10,
			CHA: 8,
			INT: 11,
			WIS: 10,
			HitDice: "6d8",
			HitPoints: 27,
			AC: 16,
			TouchAC: 13,
			FlatfootedAC: 13,
			Morale: 8,
			Speed: 25,
			Size: "M",
		},
		features: {
			"Waterbreathing": "A deep one can live underwater indefinitely.  If a deep one is not submerged in water for at least one minute per hour, it gains one stack of exhaustion.",
			"Blood in the Water": "When a deep one hits with a trident attack, the jagged edges cause the target to bleed for one minute.  Deep one champion's trident attacks deal two additional damage for each time the target is bleeding.",
		},
		attacks: {
			"Trident (x2)": "1d8+1",
		}
	},
	{
		hidden: true,
		name: "Sailor",
		stats: {
			STR: 13,
			DEX: 13,
			CON: 12,
			CHA: 8,
			INT: 11,
			WIS: 9,
			HitDice: "3d8",
			HitPoints: 13,
			AC: 11,
			TouchAC: 11,
			FlatfootedAC: 10,
			Morale: 4,
			Speed: 30,
			Size: "M",
		},
		features: {},
		attacks: {
			"Club": "1d6",
		}
	},
	{
		hidden: true,
		name: "Island Boar",
		stats: {
			STR: 20,
			DEX: 6,
			CON: 18,
			CHA: 4,
			INT: 1,
			WIS: 10,
			HitDice: "6d12",
			HitPoints: 39,
			AC: 16,
			TouchAC: 8,
			FlatfootedAC: 16,
			Morale: 10,
			Speed: 30,
			Size: "M",
		},
		features: {
			"Charge": "An island boar can move up to double its speed, then make two tusk attacks against the same target.  If it does, it grants Advantage to all attackers during the change and on its next turn.",
			"Gore": "When an island boar hits with both of its tusk attacks, it deals one additional Wound.",
		},
		attacks: {
			"Tusk (x2)": "1d8+5, 2/20",
		}
	},
	{
		hidden: true,
		name: "Island Boar Piglet",
		stats: {
			STR: 14,
			DEX: 6,
			CON: 12,
			CHA: 4,
			INT: 1,
			WIS: 10,
			HitDice: "2d12",
			HitPoints: 13,
			AC: 13,
			TouchAC: 8,
			FlatfootedAC: 13,
			Morale: 2,
			Speed: 20,
			Size: "S",
		},
		features: {
			"Charge": "An island boar piglet can move up to double its speed, then make two tusk attacks against the same target.  If it does, it grants Advantage to all attackers during the change and on its next turn.",
		},
		attacks: {
			"Tusk (x2)": "1d4+2, 2/20",
		}
	},
	{
		hidden: true,
		name: "Ettin",
		stats: {
			STR: 23,
			DEX: 8,
			CON: 15,
			CHA: 11,
			INT: 6,
			WIS: 10,
			HitDice: "10d8",
			HitPoints: 55,
			AC: 18,
			TouchAC: 8,
			FlatfootedAC: 18,
			Morale: 8,
			Speed: 30,
			Size: "L",
		},
		features: {
			"Two-Headed": "An ettin gets two turns in the initiative order, separated by at least one other creature (if possible).  On each turn it may take a standard action and a swift action.",
			"Double Bash": "An ettin may use a swift action to make one attack against a creature that it has hit since the beginning of its last turn.",
		},
		attacks: {
			"Morningstar": "1d8+6",
			"Javelin (2 ammo)": "1d6+6",
		}
	},
];

setTimeout(() => {
	const creatureDiv = document.querySelector(".creature");
	creatureDiv.parentNode.removeChild(creatureDiv);

	function getMod(value) {
		value = Math.floor((value - 10) / 2);
		return value > 0 ? `+${value}` : value;
	}

	creatures.forEach(creature => {
		if (creature.hidden) return;
		const node = creatureDiv.cloneNode(true);
		node.querySelector(".creature-name").innerHTML = creature.name;
		node.querySelector(".creature-ac").innerHTML = creature.stats.AC;
		node.querySelector(".creature-touch-ac").innerHTML = creature.stats.TouchAC;
		node.querySelector(".creature-flatfooted-ac").innerHTML = creature.stats.FlatfootedAC;
		node.querySelector(".creature-morale").innerHTML = creature.stats.Morale;
		node.querySelector(".creature-speed").innerHTML = creature.stats.Speed;
		node.querySelector(".creature-size").innerHTML = creature.stats.Size;
		node.querySelector(".creature-hit-points").innerHTML = creature.stats.HitPoints;
		node.querySelector(".creature-hit-dice").innerHTML = creature.stats.HitDice;
		node.querySelector(".creature-str").innerHTML = creature.stats.STR;
		node.querySelector(".creature-str-mod").innerHTML = getMod(creature.stats.STR);
		node.querySelector(".creature-dex").innerHTML = creature.stats.DEX;
		node.querySelector(".creature-dex-mod").innerHTML = getMod(creature.stats.DEX);
		node.querySelector(".creature-con").innerHTML = creature.stats.CON;
		node.querySelector(".creature-con-mod").innerHTML = getMod(creature.stats.CON);
		node.querySelector(".creature-cha").innerHTML = creature.stats.CHA;
		node.querySelector(".creature-cha-mod").innerHTML = getMod(creature.stats.CHA);
		node.querySelector(".creature-int").innerHTML = creature.stats.INT;
		node.querySelector(".creature-int-mod").innerHTML = getMod(creature.stats.INT);
		node.querySelector(".creature-wis").innerHTML = creature.stats.WIS;
		node.querySelector(".creature-wis-mod").innerHTML = getMod(creature.stats.WIS);
		node.querySelector(".creature-features").innerHTML = Object.entries(creature.features).map(([name, feature]) => 
			`<div class="creature-feature"><b>${name}</b><span>${feature}</span></div>`
		).join("");
		node.querySelector(".creature-attacks").innerHTML = Object.entries(creature.attacks).map(([name, attack]) => 
			`<div class="creature-attack"><b>${name}</b><span>${attack}</span></div>`
		).join("");

		document.querySelector("#creature-display").appendChild(node);
	});
});
