spells = [
...spells,
{
	type: [SOURCES.Divine, SOURCES.Arcane],
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
{
	type: [SOURCES.Arcane],
	descriptors: [SPELL_TYPES.Negative],
	name: "Cause Fear",
	requirements: [],
	effect: "You project fear into a creature's mind, frightening it.",
	manaEffect: `For each additional mana spent, the fear lasts one additional round.`,
	spellData: {
		range: RANGE.Short,
		minMana: 2,
		school: SCHOOLS.Necromancy,
		save: SAVES.Wisdom,
		duration: DURATIONS.Round,
	},
},
{
	type: [SOURCES.Arcane, SOURCES.Divine],
	descriptors: [SPELL_TYPES.Negative],
	name: "Chill Touch",
	requirements: [],
	effect: `You touch a creature, stealing its strength.  You must succeed on a touch attack as part of this spell.  It takes ${DAMAGE.Negative}.  If it fails its save, it loses one point of Strength until the next dawn.`,
	manaEffect: `For each additional 2 mana spent, this deals an additional ${DAMAGE.Negative} and increases the Strength loss by 1.`,
	spellData: {
		range: RANGE.Short,
		minMana: 2,
		school: SCHOOLS.Necromancy,
		save: SAVES.Constitution,
	},
},
{
	type: [SOURCES.Arcane],
	descriptors: [SPELL_TYPES.Negative],
	name: "Ray of Enfeeblement",
	requirements: [],
	effect: `A ray of unholy light shoots from your finger toward your target.  You must succeed on a ranged touch attack as a part of this spell.  Your target gains one stack of exhaustion.`,
	manaEffect: `For each additional 2 mana spent, the target gains an additional stack of exhaustion.`,
	spellData: {
		range: RANGE.Short,
		minMana: 3,
		school: SCHOOLS.Necromancy,
		save: SAVES.None,
	},
},
{
	type: [SOURCES.Arcane],
	descriptors: [],
	name: "Transference",
	requirements: [],
	effect: `You touch a creature, drawing vitality from it to supplement your own.  The target gains a stack of exhaustion, and you lose a stack of exhaustion.  If the target already has 10 or more stacks of exhaustion, the spell fails.`,
	manaEffect: `If you spend an additional mana, an ally you touch loses a stack of exhaustion instead.`,
	spellData: {
		range: RANGE.Touch,
		minMana: 3,
		school: SCHOOLS.Necromancy,
		save: SAVES.Wisdom,
	},
},
{
	type: [SOURCES.Arcane],
	descriptors: [SPELL_TYPES.Negative],
	name: "Blindness/Deafness",
	requirements: [],
	effect: `You call upon the powers of unlife to make your target blind or deaf, as you choose.`,
	manaEffect: `If you spend an additional 2 mana, you may make your target blind and deaf.`,
	spellData: {
		range: RANGE.Medium,
		minMana: 3,
		school: SCHOOLS.Necromancy,
		save: SAVES.Constitution,
		duration: DURATIONS.Dawn,
	},
},
{
	type: [SOURCES.Arcane, SOURCES.Divine],
	descriptors: [],
	name: "Reap",
	requirements: [],
	effect: `You draw the final breath from nearby creatures, strengthening your own life force. Every creature in a 30 foot radius around a point you specify must make a death saving throw. You heal 1 Wound for every creature that fails its save.`,
	manaEffect: `For each additional mana you spend, increase the radius by 10 feet.`,
	spellData: {
		range: RANGE.Medium,
		minMana: 4,
		school: SCHOOLS.Necromancy,
		save: SAVES.None,
		duration: DURATIONS.Dawn,
	}
},
{
	type: [SOURCES.Divine],
	descriptors: [],
	name: "Death Ward",
	requirements: [],
	effect: `You touch a creature, and that creature is protected against death.  If the creature would fail a death saving throw or be subjected to an effect that would kill it, instead end this effect.`,
	manaEffect: "If you spend 2 additional mana, this spell lasts until the next dawn.",
	spellData: {
		range: RANGE.Touch,
		minMana: 3,
		school: SCHOOLS.Necromancy,
		save: SAVES.None,
		duration: DURATIONS.Hour,
	},
},
];