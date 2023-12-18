const SPELL_TYPES = {
	// Damage types
	Fire: "Fire",
	Cold: "Cold",
	Lightning: "Lightning",
	Acid: "Acid",
	Sonic: "Sonic",
	Psionic: "Psionic",
	Radiant: "Radiant",
	Force: "Force",
	Positive: "Positive Energy",
	Negative: "Negative Energy",

	Sustained: "Sustained",
}

const DAMAGE = {
	Acid: "1d8 acid damage",
	Cold: "1d8 cold damage",
	Fire: "2d6 fire damage",
	Force: "1d6 force damage",
	Lightning: "1d10 lightning damage",
	Negative: "1d10 negative energy damage",
	Positive: "1d10 positive energy damage",
	Psionic: "1d10 psionic damage",
	Radiant: "1d8 radiant damage",
	Sonic: "1d8 sonic damage",
}

const SOURCES = {
	Arcane: "Arcane",
	Divine: "Divine",
	Primal: "Primal",
}

const SCHOOLS = {
	Abjuration: "Abjuration",
	Conjuration: "Conjuration",
	Divination: "Divination",
	Enchantment: "Enchantment",
	Evocation: "Evocation",
	Illusion: "Illusion",
	Necromancy: "Necromancy",
	Transmutation: "Transmutation",
	Universal: "Universal",
}

const SAVES = {
	Strength: "Strength",
	Dexterity: "Dexterity",
	Constitution: "Constitution",
	Wisdom: "Wisdom",
	Intelligence: "Intelligence",
	Charisma: "Charisma",
	None: "None",
	Special: "Special - see text",
}

const RANGE = {
	Self: "Self",
	Touch: "Touch",
	Short: "25 feet",
	Medium: "50 feet",
	Long: "100 feet",
	Far: "250 feet",
	Distant: "10 miles",
	Plane: "on the same plane",
}

const DURATIONS = {
	Round: "1 round",
	Minute: "1 minute",
	Hour: "1 hour",
	Dawn: "Until the next dawn",
	Day: "1 day",
	Month: "1 month",
}

const UPKEEP = {
	Half: "Half of the initial mana cost",
	One: "One mana",
	Zero: "Concentration only",
}

let spells = [
{
	type: [SOURCES.Arcane, SOURCES.Divine],
	descriptors: [],
	name: "Counterspell",
	requirements: [],
	effect: "Target creature casting a spell must make an Intelligence save or have that spell's effective mana cost reduced by the amount of mana spent on this spell.  If the resultant effective mana cost is less than the minimum for the spell, the spell has no effect.  This spell may be cast as a reaction to seeing a creature cast a spell.",
	manaEffect: `Additional mana spent on the spell increases the reduction of the effective mana cost of the spell being cast by the target creature.`,
	spellData: {
		range: RANGE.Long,
		minMana: 1,
		school: SCHOOLS.Universal,
		save: SAVES.None,
	},
},
{
	type: [SOURCES.Arcane, SOURCES.Divine],
	descriptors: [SPELL_TYPES.Sustained],
	name: "Dispel Magic",
	requirements: [],
	effect: "Suppress the magical properties of an item or creature for up to 1 minute. If the target is a creature or an item held by a creature, you must succeed on a melee touch attack against that creature. If the target is under the effect of one or more spells, you may instead attempt to end one of them of your choice. Effects caused by a spell that are not coterminus with the spell cannot be ended this way. To succeed you must succeed on an Intelligence check with DC equal to 10 plus 3 times the mana used on the targetted spell.",
	manaEffect: "Each additional mana extends the duration of the suppression by 1 minute or gives a +2 bonus to the Intelligence check.",
	spellData: {
		range: RANGE.Touch,
		minMana: 2,
		school: SCHOOLS.Universal,
		save: SAVES.None,
		duration: DURATIONS.Minute,
		upkeep: UPKEEP.Zero,
	}
},
];

setTimeout(() => {
	Object.keys(SCHOOLS).map(key => {
		console.log(`${key}: ${spells.filter(s => s.spellData.school == key).length}`);
	});
});
