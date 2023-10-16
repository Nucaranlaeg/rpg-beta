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
		minMana: 3,
		school: SCHOOLS.Transmutation,
		save: SAVES.Constitution,
		duration: DURATIONS.Minute,
	},
},
];