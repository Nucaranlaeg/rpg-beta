spells = [
...spells,
{
	type: [SOURCES.Arcane],
	descriptors: [],
	name: "Silence",
	requirements: [],
	effect: `A 20 foot radius bubble of silence emanates from a point, creature, or object in range. If targetting a creature or an object in a creature's possession, a successful Wisdom save negates the effect, but the effect otherwise follows the creature. No sound can be generated or heard in the area, and Sonic spells have no effect in the area.`,
	manaEffect: `For each additional mana spent, the radius increases by 10 feet.`,
	spellData: {
		range: RANGE.Medium,
		minMana: 3,
		school: SCHOOLS.Illusion,
		save: SAVES.Wisdom,
		duration: DURATIONS.Minute,
	},
},
{
	type: [SOURCES.Arcane],
	descriptors: [],
	name: "Invisibility",
	requirements: [],
	effect: `A creature you touch turns invisible (including to infravision). It is still detectable by other means. When it attacks or casts a spell which has the potential to cause a harmful effect to a hostile creature, the spell ends early.`,
	manaEffect: `For each additiona mana spent, the spell can target one additional creature.`,
	spellData: {
		range: RANGE.Touch,
		minMana: 5,
		school: SCHOOLS.Illusion,
		save: SAVES.Wisdom,
		duration: DURATIONS.Hour,
	},
},
];