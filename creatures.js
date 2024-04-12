ruleSections.types = [
	{
		type: RULE_BLOCK.SUBTITLE,
		body: `Creature Types`,
	},
	{
		type: RULE_BLOCK.SUBSUBTITLE,
		body: `Undead`,
	},
	{
		type: RULE_BLOCK.BODY,
		body: `Undead creatures are immune to poison, and psionic damage if they merely follow their creator's bidding.  They do not breathe, drink or eat.
		They do not make death saving throws, but instead are destroyed when their total number of Wounds equals their Constitution modifier plus the number of hit dice they have.
		They are healed by negative energy and are harmed by positive energy.`,
	},
	{
		type: RULE_BLOCK.SUBSUBTITLE,
		body: `Contructs`,
	},
	{
		type: RULE_BLOCK.BODY,
		body: `Constructs are immune to poison damage, and psionic damage if they merely follow their creator's bidding.  They do not breathe, drink or eat.
		They cannot suffer Wounds and do not make death saving throws, but instead are destroyed when their hit points reach 0.  Constructs are typically hardy, and so they add their Constitution modifier to their maximum hit points for each hit die they possess.`,
	},
];

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
		attacks: [
			["Spear", "+4", "1d6+2", "2/20"],
		],
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
		attacks: [
			["Bite", "+6", "1d8+4", "1/20"],
			["Tail Slap", "+6", "1d12+6", "1/20"],
		],
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
			"Waterbreathing": "A deep one can breath air and water.  If a deep one is not submerged in water for at least one minute per hour, it gains one stack of exhaustion.",
			"Blood in the Water": "When a deep one hits with a trident attack, the jagged edges cause the target to bleed for one minute.  Deep one's trident attacks deal one additional damage for each time the target is bleeding.",
		},
		attacks: [
			["Trident", "+2", "1d6", "1/20"],
		],
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
			"Waterbreathing": "A deep one can breath air and water.  If a deep one is not submerged in water for at least one minute per hour, it gains one stack of exhaustion.",
			"Blood in the Water": "When a deep one hits with a trident attack, the jagged edges cause the target to bleed for one minute.  Deep one champion's trident attacks deal two additional damage for each time the target is bleeding.",
		},
		attacks: [
			["Trident (x2)", "+5", "1d6+1", "1/20"],
		],
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
		attacks: [
			["Club", "+1", "1d6+1", "1/20"],
		],
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
			"Charge": "An island boar can move up to double its speed, then make two tusk attacks against the same target with Advantage.  If it does, it grants Advantage to all attackers during the change and on its next turn.  It must move at least its full movement speed toward its target during the charge.",
			"Gore": "When an island boar hits with both of its tusk attacks, it deals one additional Wound.",
		},
		attacks: [
			["Tusk (x2)", "+7", "1d8+5", "3/20"],
		],
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
			"Charge": "An island boar piglet can move up to double its speed, then make two tusk attacks against the same target with Advantage.  If it does, it grants Advantage to all attackers during the change and on its next turn.  It must move at least its full movement speed toward its target during the charge.",
		},
		attacks: [
			["Tusk (x2)", "+2", "1d4+2", "3/20"],
		],
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
			AC: 17,
			TouchAC: 8,
			FlatfootedAC: 17,
			Morale: 8,
			Speed: 30,
			Size: "L",
		},
		features: {
			"Two-Headed": "An ettin gets two turns in the initiative order, separated by at least one other creature (if possible).  On each turn it may take a standard action and a swift action.",
			"Double Bash": "An ettin may use a swift action to make one attack against a creature that it has hit since the beginning of its last turn.",
		},
		attacks: [
			["Morningstar", "+8", "1d8+6", "1/20"],
			["Javelin (2 ammo)", "+6", "1d6+6", "1/20"],
		],
	},
	{
		name: "Goblin",
		stats: {
			STR: 11,
			DEX: 13,
			CON: 9,
			CHA: 6,
			INT: 10,
			WIS: 9,
			HitDice: "1d8",
			HitPoints: 5,
			AC: 13,
			TouchAC: 12,
			FlatfootedAC: 12,
			Morale: 3,
			Speed: 30,
			Size: "S",
		},
		features: {
			"Coward": "When a goblin takes a Wound, it may move 5 feet as a free action without provoking attacks of opportunity.",
		},
		attacks: [
			["Mace", "+2", "1d6", "1/20"],
			["Shortbow", "+3", "1d6", "1/19"],
		],
	},
	{
		name: "Hobgoblin",
		stats: {
			STR: 13,
			DEX: 14,
			CON: 11,
			CHA: 8,
			INT: 10,
			WIS: 9,
			HitDice: "3d8",
			HitPoints: 14,
			AC: 15,
			TouchAC: 12,
			FlatfootedAC: 13,
			Morale: 5,
			Speed: 30,
			Size: "M",
		},
		features: {
			"Leader of Goblins": "A hobgoblin increases the effective morale of up to 6 nearby goblins by 2.",
			"Superior Flank": "When a hobgoblin is flanking a creature with an allied goblinoid, the hobgoblin gains Advantage on attacks against the flanked creature and deals an additional 1d6 damage.",
		},
		attacks: [
			["Mace", "+3", "1d6+1", "1/20"],
			["Shortbow", "+4", "1d6", "1/19"],
		],
	},
	{
		name: "Bugbear",
		stats: {
			STR: 16,
			DEX: 15,
			CON: 14,
			CHA: 10,
			INT: 10,
			WIS: 9,
			HitDice: "6d8",
			HitPoints: 27,
			AC: 17,
			TouchAC: 12,
			FlatfootedAC: 15,
			Morale: 5,
			Speed: 30,
			Size: "M",
		},
		features: {
			"Leader of Goblins": "A bugbear increases the effective morale of up to 6 nearby goblins by 3.",
			"Superior Flank": "When a bugbear is flanking a creature with an allied goblinoid, the bugbear gains Advantage on attacks against the flanked creature and deals an additional 2d6 damage.",
			"Tough Skin": "While at 0 hit points, a bugbear takes 4 less damage from attacks.",
		},
		attacks: [
			["Maul", "+7", "2d6+4", "1/20"],
		],
	},
	{
		name: "Goblin Shaman",
		stats: {
			STR: 9,
			DEX: 13,
			CON: 9,
			CHA: 12,
			INT: 10,
			WIS: 9,
			HitDice: "4d8",
			HitPoints: 18,
			AC: 15,
			TouchAC: 12,
			FlatfootedAC: 13,
			Morale: 5,
			Speed: 30,
			Size: "S",
		},
		features: {
			"Divine Magic": "Channels for 3 mana 4/day, max mana per spell 2",
		},
		attacks: [
			["Shortbow", "+1", "1d6", "1/19"],
		],
		spells: [
			["Aura of Death", "1 mana (upkeep half), 2d6 negative damage in 15 feet, +1d6/mana"],
			["Bane", "1 mana, -2 to first attack per turn, 20 foot radius within 50 feet, malus +1/mana"],
		],
	},
	{
		hidden: true,
		name: "Dire Bat",
		stats: {
			STR: 17,
			DEX: 22,
			CON: 17,
			CHA: 6,
			INT: 2,
			WIS: 14,
			HitDice: "4d8",
			HitPoints: 18,
			AC: 19,
			TouchAC: 15,
			FlatfootedAC: 13,
			Morale: 5,
			Speed: 40,
			Size: "L",
		},
		features: {
			"Blindsight": "A dire bat uses echolocation to see with perfect clarity within 40 feet.",
		},
		attacks: [
			["Bite", "+5", "1d8+3", "1/20"],
		],
	},
	{
		name: "Juvenile Land Shark",
		stats: {
			STR: 20,
			DEX: 13,
			CON: 16,
			CHA: 4,
			INT: 2,
			WIS: 13,
			HitDice: "4d10",
			HitPoints: 22,
			AC: 17,
			TouchAC: 11,
			FlatfootedAC: 16,
			Morale: 6,
			Speed: 40,
			Size: "M",
		},
		features: {
			"Burrow": "A land shark can move at a speed of 20 feet when tunneling through solid rock.  It leaves dirt in its tunnel behind it.",
		},
		attacks: [
			["Bite", "+7", "1d10+5", "2/20"],
			["Claw", "+7", "1d6+5", "1/20"],
		],
	},
	{
		name: "Kobold",
		stats: {
			STR: 8,
			DEX: 15,
			CON: 8,
			CHA: 6,
			INT: 12,
			WIS: 9,
			HitDice: "1d8",
			HitPoints: 5,
			AC: 14,
			TouchAC: 12,
			FlatfootedAC: 13,
			Morale: 3,
			Speed: 25,
			Size: "S",
		},
		features: {
			"Cunning": "A kobold deals additional damage equal to twice the total Advantage it has on its attack.",
			"Opportunist": "A kobold gets Advantage on any attack it already has Advantage on.",
			"Infravision": "Infravision 60 feet",
		},
		attacks: [
			["Spear", "+1", "1d6-1", "2/20"],
			["Spear (thrown)", "+1", "1d6-1", "2/20"],
		],
	},
	{
		hidden: true,
		name: "Kobold Shaman",
		stats: {
			STR: 8,
			DEX: 15,
			CON: 8,
			CHA: 10,
			INT: 12,
			WIS: 9,
			HitDice: "4d8",
			HitPoints: 18,
			AC: 14,
			TouchAC: 12,
			FlatfootedAC: 13,
			Morale: 3,
			Speed: 25,
			Size: "S",
		},
		features: {
			"Divine Magic": "Channels for 3 mana 5/day, max mana per spell 2",
			"Infravision": "Infravision 60 feet",
		},
		attacks: [
			["Spear", "-1", "1d6-1", "2/20"],
			["Spear (thrown)", "-1", "1d6-1", "2/20"],
		],
		spells: [
			["Fireball", "2 mana, 2d6 fire damage in 5 foot radius within 50 feet"],
			["Grease", "1 mana, 10 foot square within 50 feet. +1 mana for 15 foot square."],
		],
	},
	{
		name: "Juvenile Fire Drake",
		stats: {
			STR: 17,
			DEX: 10,
			CON: 17,
			CHA: 10,
			INT: 11,
			WIS: 10,
			HitDice: "10d12",
			HitPoints: 66,
			AC: 19,
			TouchAC: 10,
			FlatfootedAC: 19,
			Morale: 7,
			Speed: 30,
			Size: "M",
		},
		features: {
			"Flight": "Fly speed 30",
			"Infravision": "Infravision 60 feet",
			"Fire breath": "Standard action: 15 foot 45 degree cone, Dexterity DC 10, 4d6 damage, recharge on a 6",
			"Pyrophoric blood": "A fire drake's blood is highly flammable and ignites in a burst of flame upon contact with the air. A creature that makes a successful attack with a slashing or piercing weapon (including natural weapons) against a fire drake must succeed on a Reflex save or take 1d4-2 points of fire damage from the splashing blood.",
			"Tail sweep": "A fire drake may make a tail sweep as a standard action, hitting all creatures in a 180 degree arc within 5 feet.",
		},
		attacks: [
			["Bite", "+5", "1d8+3", "2/20"],
			["Claw", "+5", "1d6+3", "2/20"],
			["Tail Sweep", "+5", "2d6+4", "2/20"],
		],
	},
	{
		hidden: true,
		name: "Five-Headed Hydra",
		stats: {
			STR: 17,
			DEX: 12,
			CON: 20,
			CHA: 9,
			INT: 2,
			WIS: 11,
			HitDice: "8d12",
			HitPoints: 52,
			AC: 15,
			TouchAC: 9,
			FlatfootedAC: 14,
			Morale: 9,
			Speed: 30,
			Size: "L",
		},
		features: {
			"Regeneration": "A hydra recovers 2 hit points per hit die (16) each turn.  If this healing restores it to its maximum hit points, it heals one Wound.  Fire or acid damage temporarily lower a hydra's maximum hit points by the damage dealt; its normal maximum hitpoints are restored with the next dawn.",
			"Extra Heads": "A hydra which takes a Wound from a slashing attack loses a head.  Two heads regrow from the stump in 1d4 rounds.  The hydra may have up to double its original number of heads, and dies if it has no heads remaining.  Extra heads wither and die within a day.",
			"Boss Monster": "A hydra never dies except as the result of a failed death saving throw.",
		},
		attacks: [
			["5 Bites", "+6", "1d10+3", "1/20"],
		],
	},
	{
		hidden: true,
		name: "Assassin",
		stats: {
			STR: 14,
			DEX: 17,
			CON: 12,
			CHA: 7,
			INT: 13,
			WIS: 12,
			HitDice: "4d6",
			HitPoints: 14,
			AC: 15,
			TouchAC: 13,
			FlatfootedAC: 12,
			Morale: 4,
			Speed: 30,
			Size: "M",
		},
		features: {
			"Precision": "When an assassin has Advantage on an attack and the lower die would hit, the attack deals one extra wound. Creatures immune to critical hits are also immune to these wounds.",
			"Lethal Strike": "Whenever an assassin deals a wound to a creature with Precision, that creature must make a death saving throw or fall unconscious as if it had taken two or more wounds. The creature has a malus on this save equal to the assassin's total Advantage on the attack.",
			"Feint": "As a swift action, an assassin gains Advantage on its next attack before the beginning of its next turn.",
			"Expertise (Hide)": "An assassin has +1 on Hide skill checks (total: +6).",
		},
		attacks: [
			["Rapier", "+4", "1d6+2", "1/18"],
		],
	},
	{
		hidden: true,
		name: "Assassin (Master)",
		stats: {
			STR: 16,
			DEX: 18,
			CON: 13,
			CHA: 7,
			INT: 13,
			WIS: 14,
			HitDice: "8d6",
			HitPoints: 28,
			AC: 19,
			TouchAC: 14,
			FlatfootedAC: 15,
			Morale: 4,
			Speed: 30,
			Size: "M",
		},
		features: {
			"Precision": "When a master assassin has Advantage on an attack and the lower die would hit, the attack deals one extra wound. Creatures immune to critical hits are also immune to these wounds.",
			"Lethal Strike": "Whenever a master assassin deals a wound to a creature with Precision, that creature must make a death saving throw or fall unconscious as if it had taken two or more wounds. The creature has a malus on this save equal to the master assassin's total Advantage on the attack.",
			"Feint": "As a swift action, a master assassin gains Advantage on its next attack before the beginning of its next turn.",
			"Expertise (Hide)": "A master assassin has +2 on Hide skill checks (total: +10).",
			"Hidden Blade": "When a master assassin misses an attack against a creature who does not know its location, it may immediately attempt a skill check to hide as a free action.",
			"Stand Your Ground": "Master assassins gain Advantage on Readied attacks against creatures within 30 feet if the target is moving closer to them.",
			"Patience": "If a master assassin stays hidden for one minute with its target in view, it gains Advantage on all its attacks on the first turn it reveals its presence.",
			"Good Aim": "When a master assassin has Advantage on an attack, add 5 to the lower die before determining which die to take. This cannot result in a roll greater than 20 and does not cause critical threats if the original value would not be a critical threat.,"
		},
		attacks: [
			["+1 Rapier (x2)", "+8", "1d6+4", "1/18"],
			["+1 Crossbow", "+9", "1d12+1", "2/20"],
		],
	},
];

setTimeout(() => {
	const creatureDiv = document.querySelector(".creature");
	creatureDiv.parentNode.removeChild(creatureDiv);

	function getMod(value) {
		value = Math.floor((value - 10) / 2);
		return value > 0 ? `+${value}` : value;
	}

	creatures.sort((a, b) => a.name > b.name);

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
		node.querySelector(".creature-attacks").innerHTML = creature.attacks.map(([name, tohit, damage, crit]) => 
			`<div class="creature-attack"><b>${name}</b><span>${tohit}</span><span>${damage}</span><span>${crit}</span></div>`
		).join("");
		if (creature.spells){
			node.querySelector(".creature-spells").innerHTML = creature.spells.map(([name, effect]) => 
				`<div class="creature-spell"><b>${name}</b><span>${effect}</span></div>`
			).join("");
		}

		document.querySelector("#creature-display").appendChild(node);
	});
});