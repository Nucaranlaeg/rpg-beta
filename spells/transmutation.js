spells = [
...spells,
{
	type: [SOURCES.Divine],
	descriptors: [SPELL_TYPES.Radiant],
	name: "Blinding Transfiguration",
	requirements: ["Flare"],
	effect: `Your armour or clothes begin to shine, emitting bright light in a 10 foot radius. Whenever you are hit by an attack, your armour flashes a brilliant white. Creatures within 5 feet of you must save or take ${DAMAGE.Radiant} and be blinded for 1 round. Blind creatures are unaffected.`,
	manaEffect: `For each additional mana used, deal an additional ${DAMAGE.Radiant}.`,
	spellData: {
		range: RANGE.Self,
		minMana: 4,
		school: SCHOOLS.Transmutation,
		save: SAVES.Constitution,
		duration: DURATIONS.Minute,
	},
},
{
	type: [SOURCES.Arcane, SOURCES.Divine],
	descriptors: [],
	name: "Bull's Strength",
	requirements: [],
	effect: "Grant a target creature +2 to Strength for one minute.",
	manaEffect: "Each additional mana spent increases the bonus by 1.",
	spellData: {
		range: RANGE.Short,
		minMana: 2,
		school: SCHOOLS.Transmutation,
		save: SAVES.None,
		duration: DURATIONS.Minute,
	}
},
{
	type: [SOURCES.Arcane, SOURCES.Divine],
	descriptors: [],
	name: "Cat's Grace",
	requirements: [],
	effect: "Grant a target creature +2 to Dexterity for one minute.",
	manaEffect: "Each additional mana spent increases the bonus by 1.",
	spellData: {
		range: RANGE.Short,
		minMana: 2,
		school: SCHOOLS.Transmutation,
		save: SAVES.None,
		duration: DURATIONS.Minute,
	}
},
{
	type: [SOURCES.Arcane, SOURCES.Divine],
	descriptors: [],
	name: "Bear's Endurance",
	requirements: [],
	effect: "Grant a target creature +2 to Constitution for one minute.",
	manaEffect: "Each additional mana spent increases the bonus by 1.",
	spellData: {
		range: RANGE.Short,
		minMana: 2,
		school: SCHOOLS.Transmutation,
		save: SAVES.None,
		duration: DURATIONS.Minute,
	}
},
{
	type: [SOURCES.Arcane, SOURCES.Divine],
	descriptors: [],
	name: "Owl's Wisdom",
	requirements: [],
	effect: "Grant a target creature +2 to Wisdom for one minute.",
	manaEffect: "Each additional mana spent increases the bonus by 1.",
	spellData: {
		range: RANGE.Short,
		minMana: 2,
		school: SCHOOLS.Transmutation,
		save: SAVES.None,
		duration: DURATIONS.Minute,
	}
},
{
	type: [SOURCES.Arcane, SOURCES.Divine],
	descriptors: [],
	name: "Fox's Cunning",
	requirements: [],
	effect: "Grant a target creature +2 to Intelligence for one minute.",
	manaEffect: "Each additional mana spent increases the bonus by 1.",
	spellData: {
		range: RANGE.Short,
		minMana: 2,
		school: SCHOOLS.Transmutation,
		save: SAVES.None,
		duration: DURATIONS.Minute,
	}
},
{
	type: [SOURCES.Arcane, SOURCES.Divine],
	descriptors: [],
	name: "Eagle's Splendour",
	requirements: [],
	effect: "Grant a target creature +2 to Charisma for one minute.",
	manaEffect: "Each additional mana spent increases the bonus by 1.",
	spellData: {
		range: RANGE.Short,
		minMana: 2,
		school: SCHOOLS.Transmutation,
		save: SAVES.None,
		duration: DURATIONS.Minute,
	}
},
];