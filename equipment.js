ruleSections.melee = [
	{
		type: RULE_BLOCK.BODY,
		body: `Any creature may use a simple weapon, but only those proficient with martial weapons may use them.  If you attempt to use a weapon you are not proficient with, you suffer Disadvantage on all of your attacks.`,
	},
	{
		type: RULE_BLOCK.SUBSUBTITLE,
		body: "Simple Melee Weapons",
	},
	{
		type: RULE_BLOCK.TABLEWITHHEAD,
		body: [
			["Weapon", "Cost", "Damage", "Type", "Range", "Critical", "Weight", "Properties"],
			["Club", "1 sp", "1d4", "B", "—", "—", "2 lb.", "—"],
			["Dagger", "2 gp", "1d4", "P", "20 ft", "—", "1 lb.", "Finesse"],
			["Greatclub", "2 sp", "1d8", "B", "—", "—", "10 lb.", "Two-handed"],
			["Handaxe", "5 gp", "1d6", "S", "20 ft", "—", "2 lb.", "—"],
			["Light Hammer", "2 gp", "1d4", "B", "20 ft", "—", "2 lb.", "—"],
			["Mace", "5 gp", "1d6", "B", "—", "—", "4 lb.", "—"],
			["Quarterstaff", "2 sp", "1d6", "B", "—", "—", "4 lb.", "Versatile (1d8)"],
			["Sickle", "1 gp", "1d4", "S", "—", "—", "2 lb.", "—"],
			["Spear", "1 gp", "1d6", "P", "20 ft", "+2 wounds", "3 lb.", "Versatile (1d8)"],
			["Improvised", "—", "1d6", "?", "—", "—", "?", "Disadvantage"],
		],
	},
	{
		type: RULE_BLOCK.SUBSUBTITLE,
		body: "Martial Melee Weapons",
	},
	{
		type: RULE_BLOCK.TABLEWITHHEAD,
		body: [
			["Weapon", "Cost", "Damage", "Type", "Range", "Critical", "Weight", "Properties"],
			["Battleaxe", "10 gp", "1d8", "S", "—", "+2 wounds", "4 lb.", "Versatile (1d10)"],
			["Flail", "10 gp", "1d8", "B", "—", "—", "2 lb.", "—"],
			["Glaive", "20 gp", "1d10", "S", "—", "+2 wounds", "6 lb.", "Reach, two-handed"],
			["Greataxe", "30 gp", "1d12", "S", "—", "+2 wounds", "7 lb.", "Two-handed"],
			["Greatsword", "50 gp", "2d6", "S", "—", "Threat on 19-20", "6 lb.", "Two-handed"],
			["Halberd", "20 gp", "1d10", "S", "—", "+2 wounds", "6 lb.", "Reach, two-handed"],
			["Lance", "10 gp", "1d12", "P", "—", "+2 wounds", "6 lb.", "Reach, special"],
			["Longsword", "15 gp", "1d8", "S", "—", "Threat on 19-20", "3 lb.", "Versatile (1d10)"],
			["Maul", "10 gp", "2d6", "B", "—", "—", "10 lb.", "Two-handed"],
			["Morningstar", "15 gp", "1d8", "P", "—", "—", "4 lb.", "—"],
			["Pike", "5 gp", "1d6", "P", "—", "—", "18 lb.", "Reach, two-handed"],
			["Rapier", "25 gp", "1d6", "P", "—", "Threat on 18-20", "2 lb.", "Finesse"],
			["Scimitar", "25 gp", "1d6", "S", "—", "Threat on 18-20", "3 lb.", "Finesse"],
			["Shortsword", "10 gp", "1d4", "P", "—", "Threat on 19-20", "2 lb.", "Finesse"],
			["Trident", "5 gp", "1d8", "P", "20 ft", "—", "4 lb.", "versatile (1d8)"],
			["War pick", "5 gp", "1d6", "P", "—", "+3 wounds", "2 lb.", "—"],
			["Warhammer", "15 gp", "1d8", "B", "—", "+2 wounds", "2 lb.", "Versatile (1d10)"],
			["Whip", "2 gp", "1d4", "S", "—", "—", "3 lb.", "Finesse, special"],
		],
	},
	{
		type: RULE_BLOCK.SUBTITLE,
		body: "Special Features",
	},
	{
		type: RULE_BLOCK.BODY,
		body: `Critical: Weapons without an entry under "Critical" deal one additional wound on a critical hit.
		Finesse: Creatures wielding finesse weapons may add their Dexterity bonus to hit rather than Strength (but damage is still based on Strength).
		Lance: A lance must be used two-handed unless mounted.
		Range: Melee weapons with a range listed may be used as a throwing weapon.  Beyond the listed range, thrown attacks are made at Disadvantage.  Thrown attacks are impossible beyond 3x the listed range.
		Reach: Reach weapons can be used to attack creatures 10 feet away from the wielder but not adjacent enemies.
		Versatile: A versatile weapon can be wielded in two hands and deals additional damage when wielded this way.
		Whip: A whip can be used to attack any creature within 15 feet, but a creature wielding a whip threatens no spaces.`,
	},
];

ruleSections.ranged = [
	{
		type: RULE_BLOCK.BODY,
		body: `Any creature may use a simple weapon, but only those proficient with martial weapons may use them.  If you attempt to use a weapon you are not proficient with, you suffer Disadvantage on all of your attacks.`,
	},
	{
		type: RULE_BLOCK.SUBSUBTITLE,
		body: "Simple Ranged Weapons",
	},
	{
		type: RULE_BLOCK.TABLEWITHHEAD,
		body: [
			["Weapon", "Cost", "Damage", "Type", "Range", "Critical", "Weight", "Properties"],
			["Dart", "5 sp", "1d4", "P", "20 ft", "—", "0.5 lb.", "—"],
			["Javelin", "5 sp", "1d6", "P", "30 ft", "—", "2 lb.", "—"],
			["Crossbow", "50 gp", "1d12", "P", "100 ft", "+2 wounds", "18 lb.", "Special"],
			["Stone", "—", "1d6", "B", "15 ft", "—", "3 lb.", "Special"],
			["Improvised", "—", "1d6", "?", "10 ft", "—", "?", "Disadvantage"],
		],
	},
	{
		type: RULE_BLOCK.SUBSUBTITLE,
		body: "Martial Ranged Weapons",
	},
	{
		type: RULE_BLOCK.TABLEWITHHEAD,
		body: [
			["Weapon", "Cost", "Damage", "Type", "Range", "Critical", "Weight", "Properties"],
			["Blowgun", "10 gp", "1", "P", "25 ft", "None", "1 lb.", "Special"],
			["Sling", "5 sp", "1d10", "B", "80 ft", "+2 wounds", "2 lb.", "—"],
			["Shortbow", "10 gp", "1d6", "P", "70 ft", "Threat on 19-20", "2 lb.", "Two-handed"],
			["Longbow", "50 gp", "1d8", "P", "100 ft", "Threat on 19-20", "2 lb.", "Two-handed"],
			["Composite bow", "+50 gp", "+1", "P", "+10 ft", "—", "—", "Special"],
		],
	},
	{
		type: RULE_BLOCK.SUBTITLE,
		body: "Special Features",
	},
	{
		type: RULE_BLOCK.BODY,
		body: `A character applies their Strength bonus to damage rolls when using a thrown weapon, but not when using a projectile weapon.
		Blowgun: A hidden creature who attacks with a blowgun automatically stays hidden as long as it does not attack more than once per turn.
		Composite: Composite bows are made with a particular strength rating.  Attacks with them deal additional damage equal to that rating and travel 10 feet further per point in that rating, but impose a malus on attacks equal to how much your Strength modifier is less than the rating.
		Critical: Weapons without an entry under "Critical" deal one additional wound on a critical hit.
		Crossbow: Crossbows require a DC 15 Strength check made as a full-round action to reload (a creature may instead spend one minute reloading).
		Range: Beyond the listed range, attacks are made at Disadvantage.  Thrown attacks are impossible beyond 3x the listed range, and fired attacks are impossible beyond 4x the listed range.
		Stone: Thrown stones deal 1d6 damage per 4 lb (rounded down, min 1d6 as long as it weighs at least 1 lb). You may not throw a stone weighing more than your Strength modifier plus 4 lbs.`
	},
];

ruleSections.armour = [
	{
		type: RULE_BLOCK.BODY,
		body: `Any creature may wear light armour without penalty, but to wear medium or heavy armour requires proficiency.  Wearing armour you are not proficient with reduces the AC bonus by 1, gives you -5 on all Strength and Dexterity checks, and prevents you from casting spells.
		If you wear armour which has a strength score listed greater than your strength score, your speed is reduced by 10 feet.
		Your AC is usually your armour's AC bonus plus your Dexterity bonus plus 10.  If you wear heavy armour, you do not add your Dexterity modifier to your AC.`,
	},
	{
		type: RULE_BLOCK.SUBSUBTITLE,
		body: "Light Armour",
	},
	{
		type: RULE_BLOCK.TABLEWITHHEAD,
		body: [
			["Armour", "Cost", "AC Bonus", "Min STR", "Weight"],
			["Padded", "5 gp", "1", "—", "8 lb"],
			["Leather", "10 gp", "2", "—", "10 lb"],
			["Studded Leather", "25 gp", "3", "—", "13 lb"],
			["Chain Shirt", "100 gp", "4", "—", "20 lb"],
		],
	},
	{
		type: RULE_BLOCK.SUBSUBTITLE,
		body: "Medium Armour",
	},
	{
		type: RULE_BLOCK.TABLEWITHHEAD,
		body: [
			["Armour", "Cost", "AC Bonus", "Min STR", "Weight"],
			["Hide", "15 gp", "3", "—", "25 lb"],
			["Scale mail", "50 gp", "4", "—", "30 lb"],
			["Chainmail", "150 gp", "5", "13", "30 lb"],
			["Breastplate", "400 gp", "6", "13", "35 lb"],
		],
	},
	{
		type: RULE_BLOCK.SUBSUBTITLE,
		body: "Heavy Armour",
	},
	{
		type: RULE_BLOCK.TABLEWITHHEAD,
		body: [
			["Armour", "Cost", "AC Bonus", "Min STR", "Weight"],
			["Splint mail", "150 gp", "5", "13", "40 lb"],
			["Banded mail", "250 gp", "6", "13", "30 lb"],
			["Half plate", "600 gp", "7", "15", "45 lb"],
			["Full plate", "1500 gp", "8", "17", "50 lb"],
		],
	},
];

ruleSections.shields = [
	{
		type: RULE_BLOCK.BODY,
		body: `You must be proficient with medium armour or martial weapons to use a shield effectively.  If you wear a shield without being proficient you only recieve half of the listed bonus (rounded down) and you suffer a -2 malus on your attacks.
		All shields can be made from wood.`,
	},
	{
		type: RULE_BLOCK.SUBSUBTITLE,
		body: "Shields",
	},
	{
		type: RULE_BLOCK.TABLEWITHHEAD,
		body: [
			["Shield", "Cost", "AC Bonus", "Min STR", "Weight"],
			["Buckler", "5 gp", "1", "13", "—", "3 lb"],
			["Targe", "10 gp", "2", "13", "—", "8 lb"],
			["Kite Shield", "20 gp", "3", "13", "—", "15 lb"],
			["Tower Shield", "35 gp", "4", "13", "—", "30 lb"],
		],
	},
	{
		type: RULE_BLOCK.BODY,
		body: `Shields behave differently:
		Bucklers are strapped to your arm but do not prevent the use of your arm or hand for something else.  If you use the hand with a buckler for any other purpose than defense or a small object interaction, you lose the AC bonus.
		Targes are round shields held in the hand.  The hand is unavailable for use as long as you hold the shield.
		Kite shields are strapped to your arm and prevent its use.  A kite shield requires a move action to doff and a full round action to don.
		Tower shields are like kite shields, but are so unwieldy they impose a -2 malus on your attacks.
		In any case, you may never benefit from more than one shield at once.`,
	},
];

ruleSections.considerations = [
	{
		type: RULE_BLOCK.SUBSUBTITLE,
		body: "Starting Equipment",
	},
	{
		type: RULE_BLOCK.BODY,
		body: `All characters begin with a certain amount of starting equipment.  At level 1, you recieve armour, a weapon, and a shield of your choice totalling no more than 160 gp - but only equipment that you can use.  Instead of a shield, you may choose a second weapon.
		You may then purchase additional mundane equipment until the total value of your equipment is 100 gold. This means that if you choose armour and weapons valued at 100 gold or more you are unable to purchase any additional equipment.
		(For the moment, you may find equipment prices in the <a href="https://5e.d20srd.org/srd/equipment/equipment.htm">5e player's handbook</a>)`,
	},
	{
		type: RULE_BLOCK.SUBSUBTITLE,
		body: "Carrying Capacity",
	},
	{
		type: RULE_BLOCK.BODY,
		body: `You may carry up to 6 times your strength score as a light load, or up to 12 times your strength score as a heavy load.  Carrying a light load does not affect you, but carrying a heavy load reduces your speed by 25% (your speed in combat is rounded down to the nearest 5 feet).  This is in addition to the penalty imposed by wearing armour that is too heavy for you.`,
	},
	{
		type: RULE_BLOCK.SUBSUBTITLE,
		body: "Speed Reduction",
	},
	{
		type: RULE_BLOCK.TABLE,
		body: [
			["Speed with a Light Load", "20ft", "25ft", "30ft", "40ft", "50ft", "60ft", "70ft", "80ft"],
			["Speed with a Heavy Load", "15ft", "15ft", "20ft", "30ft", "35ft", "45ft", "50ft", "60ft"],
		],
	},
];
