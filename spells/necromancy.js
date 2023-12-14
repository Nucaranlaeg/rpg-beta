spells = [
...spells,
{
	type: [SOURCES.Divine],
	descriptors: [SPELL_TYPES.Negative],
	name: "Animate Dead",
	requirements: ["Inflict Wounds"],
	effect: "You touch a corpse, and it comes to life under your control.  It follows your commands, but it cannot carry out complex actions.  Each dawn, you must expend one of your channels or allow the creature to collapse.  It is capable of using the weapons it carried in life as well as its natural weapons.",
	manaEffect: `Additional mana allows you to give more complex commands.  The DM will adjudicate whether the command is possible.  Some representative commands:
<br>+0: Follow me; kill them
<br>+1: Collect the weapons in that room
<br>+2: Guard a door, killing anyone who doesn't present a particular symbol
<br>+3: Search a building, killing any inhabitants
<br>+4: Retrieve a book in a library with a particular name`,
	spellData: {
		range: RANGE.Touch,
		minMana: 6,
		school: SCHOOLS.Necromancy,
		save: SAVES.None,
	},
},
];