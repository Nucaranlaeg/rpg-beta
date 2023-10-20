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

const EFFECT = {
	Acid: "Creatures adjacent to creatures damaged by acid take 1d4 acid damage.",
	Cold: "Creatures who fail their save are Slowed for 1 round.",
	Fire: "",
	Force: "Force spells do not permit saves.",
	Lightning: "Saves made by creatures wearing metal armour have Disadvantage.",
	Negative: "Undead creatures are healed by negative energy.",
	Positive: "Living creatures are healed by positive energy.",
	Psionic: "Wounds dealt by psionic damage do not reduce the amount of damage dealt to hit points.",
	Radiant: "Creatures who fail their save are Blinded for 1 round.",
	Sonic: "Creatures who fail their save are Deafened for 1 round.",
}

const STATUSES = {
	Blind: "A Blind creature is unable to see using its eyes.  If it has no other way of detecting creatures, it get -A against creatures within its reach and -2A against creatures whose locations are known but are outside of its reach.",
	Deaf: "A Deaf creature is unable to hear.  Unless it is trained in sign language, it cannot communicate during combat unless a creature spends an action to communicate something simple.  Additionally, creatures flanking it get their flanking bonus increased to +2A.",
	Slowed: "A Slowed creature spends 1 additional foot of movement for every foot it travels.",
}

const SOURCES = {
	Arcane: "Arcane",
	Divine: "Divine",
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
}

const RANGE = {
	Self: "Self",
	Touch: "Touch",
	Short: "25 feet",
	Medium: "50 feet",
	Long: "100 feet",
	Far: "250 feet",
	Distant: "10 miles",
}

const DURATIONS = {
	Round: "1 round",
	Minute: "1 minute",
	Hour: "1 hour",
	Dawn: "Until the next dawn",
	Day: "1 day",
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
	effect: "Suppress the magical properties of an item or creature for up to 1 minute. If the target is a creature or an item held by a creature, you must succeed on a touch attack against that creature. If the target is under the effect of one or more spells, you may instead attempt to end one of them of your choice. Effects caused by a spell that are not coterminus with the spell cannot be ended this way. To succeed you must succeed on an Intelligence check with DC equal to 10 plus 3 times the mana used on the targetted spell.",
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