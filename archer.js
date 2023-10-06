classes.archer = {
	"Stats": {
		"str": true,
		"dex": true,
		"con": true,
		"cha": false,
		"int": false,
		"wis": true,
	},
	"All": [
		"Light armour proficiency",
		"Reaching level 5, 10, 15, and 20 in this class allows you to attack one additional time when you use your standard action to attack.",
		"Reaching level 1, 5, 9, 13, and 17 in this class grants or improves the Ranged Weapons skill.",
	],
	"Level 1": [
		"Archery Style - An archer knows one or more archery styles, and may use any one on a given turn.  Not all ranged weapons are suitable for all styles, and you must select an appropriate weapon for the style you use.",
	],
	"Archery Styles": [
		"Target - (Any) By taking the time required to line up a shot, you gain Advantage on one attack.  If you could otherwise make more than one attack, instead roll your damage dice one additional time for each attack you do not make.  For instance, a level 10 Archer could normally make 3 attacks for 1d8+3 damage would do 3d8+3 damage on a hit.",
		"Volley - (Not crossbows or thrown knives) When making your attacks this turn, choose a 60 foot line starting from you.  Your attacks hit a random creature in that line and cannot score critical hits, but they have Advantage.  To determine which creature is hit, roll 1d6.  The number rolled is the creature hit, counting creatures in the line starting from you.  A roll of 6 is always a miss.  You cannot hit a target further away than you could normally hit with your chosen weapon.",
		"Indirect Volley - (Requires Volley) When making a volley, you may choose to target a 15 foot square at least half of your weapon's range away and within your weapon's range (instead of a line).  You may ignore obstructions in the way, provided that there is a clear arc with height equal to half the distance to the target.",
		"Mounted - (Any) You are capable of making accurate shots even when mounted.  You do not suffer disadvantage on ranged attacks when your mount moves.",
	],
	"Archer": [
		"Weak Spot - When you score a critical hit with a ranged weapon, you can choose to double the damage you deal instead of scoring a wound (if the attack would normally deal 2d6+2, you may deal 4d6+4 on a critical hit).",
		"Bull's Eye - Your critical threat range is increased by 1 plus your net Advantage (if you have net Disadvantage, this has no effect).",
		"Multishot - You can fire or throw two pieces of ammunition at once.  You may decrease your maximum range to 30 feet and suffer Disadvantage on your attacks, but roll two attacks each time you attack.  You may only use this to attack with weapons for which two could plausibly fit in your hand.",
	],
	"General": [
		"Stand Your Ground - You gain Advantage on readied attacks against creatures within 30 feet if the target is moving closer to you.",
		"Hair Trigger - When you Ready an attack and do not move on your turn, you may make the Readied attack one additional time.  Each attacks must be against a different target, each must independantly qualify, and you must be able to attack with your standard action at least as many times as you use the Readied attack.  You may choose this feature any number of times.",
		"Injure: Slow - When you make an attack, you can choose to suffer Disadvantage.  If you do and you hit with the attack, the target must make a Dexterity save with DC equal to the damage you dealt plus 10 or be slowed for 2 rounds.",
		"Injure: Bleed - When you make an attack, you can choose to suffer Disadvantage.  If you do and you hit with the attack, the target must make a Constitution save with DC equal to the damage you dealt plus 10 or take 2 damage for every 5 feet that it moves on its next turn.  This damage can cause Wounds (add it up and apply it at the end of the creature's turn).",
		"Injure: Distract - When you make an attack, you can choose to suffer Disadvantage.  If you do and you hit with the attack, the target is Distracted until the end of your next turn.",
	],
};
