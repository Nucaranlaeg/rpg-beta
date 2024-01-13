const creatures = [
	{
		hidden: true,
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
		hidden: true,
		name: "Sewer Gator",
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
		},
		features: {
			"Powerful Jaw": "When you bite a creature, you hold on to it.  The creature must make a DC 14 Strength save or be immobilized until the end of your next turn.  As a move action, you may drag a immobilized creature up to 10 feet.",
		},
		attacks: {
			"Bite": "1d8+4",
			"Tail Slap": "1d12+6",
		}
	},
]