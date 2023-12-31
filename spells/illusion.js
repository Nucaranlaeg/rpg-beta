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
{
	type: [SOURCES.Arcane],
	descriptors: [],
	name: "Silent Image",
	requirements: [],
	effect: `You create a visual illusion of an object or creature, as visualized by you.  By spending your action focussing on it, you may have it move realistically.  A creature that attempts to physically interact with the illusion automatically disbelieves it and can see through it.`,
	manaEffect: `For each additional mana spent, the illusion lasts one additional minute.`,
	spellData: {
		range: RANGE.Medium,
		minMana: 2,
		school: SCHOOLS.Illusion,
		save: SAVES.None,
		duration: DURATIONS.Minute,
	},
},
{
	type: [SOURCES.Arcane],
	descriptors: [],
	name: "Minor Image",
	requirements: ["Silent Image"],
	effect: `You create an illusion of an object or creature, as visualized by you.  The illusion can include sound.  By spending your action focussing on it, you may have it move realistically.  A creature that attempts to physically interact with the illusion automatically disbelieves it and can see through it.`,
	manaEffect: `For each additional mana spent, the illusion lasts one additional minute.`,
	spellData: {
		range: RANGE.Medium,
		minMana: 3,
		school: SCHOOLS.Illusion,
		save: SAVES.None,
		duration: DURATIONS.Minute,
	},
},
{
	type: [SOURCES.Arcane],
	descriptors: [],
	name: "Major Image",
	requirements: ["Minor Image"],
	effect: `You create an illusion of an object or creature, as visualized by you.  The illusion can include sound, scent, and thermal effects.  By spending your action focussing on it, you may have it move realistically.  A creature that attempts to physically interact with the illusion automatically disbelieves it and can see through it.`,
	manaEffect: `For each additional mana spent, the illusion lasts one additional minute.`,
	spellData: {
		range: RANGE.Medium,
		minMana: 4,
		school: SCHOOLS.Illusion,
		save: SAVES.None,
		duration: DURATIONS.Minute,
	},
},
{
	type: [SOURCES.Arcane],
	descriptors: [],
	name: "Persistant Image",
	requirements: ["Major Image"],
	effect: `You create an illusion of an object or creature, as visualized by you.  The illusion can include sound, scent, and thermal effects.  You may have the illusion follow a script you give it, including interacting verbally with a creature.  A creature that attempts to interact with the illusion automatically disbelieves it and can see through it.`,
	manaEffect: `For each additional mana spent, the illusion lasts one additional hour.`,
	spellData: {
		range: RANGE.Medium,
		minMana: 5,
		school: SCHOOLS.Illusion,
		save: SAVES.None,
		duration: DURATIONS.Hour,
	},
},
{
	type: [SOURCES.Arcane],
	descriptors: [],
	name: "Disguise Self",
	requirements: [],
	effect: `You change your appearance, including any equipment you are carrying.  You can seem taller or shorter by up to 1 foot and cannot change your body type, but otherwise the extent of the change is up to you.  A creature that interacts with you may make a save to recognize your appearance as an illusion.`,
	manaEffect: `For each additional mana spent, the illusion lasts one additional hour.`,
	spellData: {
		range: RANGE.Medium,
		minMana: 2,
		school: SCHOOLS.Illusion,
		save: SAVES.Wisdom,
		duration: DURATIONS.Hour,
	},
},
{
	type: [SOURCES.Arcane],
	descriptors: [],
	name: "Colour Spray",
	requirements: [],
	effect: `A riot of colours sprays from your hands, stunning creatures in a 90 degree cone for 1 round.`,
	manaEffect: `For each additional mana spent, the spell's DC increases by 1.`,
	spellData: {
		range: RANGE.Short,
		minMana: 2,
		school: SCHOOLS.Illusion,
		save: SAVES.None,
		duration: DURATIONS.Minute,
	},
},
{
	type: [SOURCES.Arcane],
	descriptors: [],
	name: "Blur",
	requirements: [],
	effect: `Your outline blurs, making you hard to distinguish.  Attacks against you have Disadvantage.`,
	manaEffect: `For each additional mana spent, the spell's duration increases by 1 minute.`,
	spellData: {
		range: RANGE.Self,
		minMana: 3,
		school: SCHOOLS.Illusion,
		save: SAVES.None,
		duration: DURATIONS.Minute,
	},
},
{
	type: [SOURCES.Arcane],
	descriptors: [],
	name: "Phantom Trap",
	requirements: [],
	effect: `This spell makes a small mechanism such as a lock appear trapped to anyone examining it.  It is not able to be disarmed and, of course, does nothing when sprung.`,
	manaEffect: `For each additional mana spent, the spell's duration increases by 1 day.`,
	spellData: {
		range: RANGE.Short,
		minMana: 3,
		school: SCHOOLS.Illusion,
		save: SAVES.None,
		duration: DURATIONS.Dawn,
	},
},
{
	type: [SOURCES.Arcane],
	descriptors: [],
	name: "Illusory Script",
	requirements: [],
	effect: `You write on a scroll or other suitable material.  To all, the writing appears to be some form of foreign writing.  You may choose one creature at the time of casting to be excempt from this effect.  A creature who sees the illusory script may make a save to recognize it as an illusion, but cannot see through the illusion even if it succeeds.`,
	manaEffect: `For each additional mana spent, the spell's duration doubles.`,
	spellData: {
		range: RANGE.Short,
		minMana: 4,
		school: SCHOOLS.Illusion,
		save: SAVES.Wisdom,
		duration: DURATIONS.Day,
	},
},
{
	type: [SOURCES.Arcane],
	descriptors: [],
	name: "Hallucinatory Terrain",
	requirements: [],
	effect: `By means of this spell, you reshape the landscape around you. Natural terrain within 50 feet of the origin point looks, sounds, and smells like some other kind of natural terrain.`,
	manaEffect: `For each additional mana spent, the spell's DC increases by 1.`,
	spellData: {
		range: RANGE.Medium,
		minMana: 5,
		school: SCHOOLS.Illusion,
		save: SAVES.Wisdom,
		duration: DURATIONS.Minute,
	},
},
{
	type: [SOURCES.Arcane],
	descriptors: [],
	name: "Illusory Wall",
	requirements: [],
	effect: `You create the illusion of a 10 foot by 10 foot wall, floor, ceiling, or similar surface.  Objects and creatures can pass freely through it.`,
	manaEffect: `For each additional mana spent, you may make the illusion 10 feet longer in one dimension.`,
	spellData: {
		range: RANGE.Medium,
		minMana: 5,
		school: SCHOOLS.Illusion,
		save: SAVES.None,
		duration: DURATIONS.Minute,
	},
},
{
	type: [SOURCES.Arcane],
	descriptors: [SPELL_TYPES.MindAffecting],
	name: "Phantasmal Killer",
	requirements: [],
	effect: `You create a phantasmal image of the more fearsome creature imaginable to your target by drawing on its fears.  Other creatures only see a vague shape.  The target first gets a Wisdom save to recognize the image as unreal.  If it fails, the phantasm touches the target, dealing 10 Wounds from the sheer terror unless the target succeeds on a Constitution save.`,
	manaEffect: `For each additional 2 mana spent, the spell's DC increases by 1.`,
	spellData: {
		range: RANGE.Medium,
		minMana: 6,
		school: SCHOOLS.Illusion,
		save: SAVES.Special,
		duration: DURATIONS.Minute,
	},
},
{
	type: [SOURCES.Arcane],
	descriptors: [SPELL_TYPES.MindAffecting],
	name: "False Vision",
	requirements: [],
	effect: `Any divination spell that reveals anything within 100 feet of the point you touch instead recieves an image that you choose at the time of casting.  You may spend an action any time within the duration to change the image.`,
	manaEffect: `For each additional mana spent, you may double the radius affected.`,
	spellData: {
		range: RANGE.Touch,
		minMana: 6,
		school: SCHOOLS.Illusion,
		save: SAVES.None,
		duration: DURATIONS.Dawn,
	},
},
{
	type: [SOURCES.Arcane],
	descriptors: [SPELL_TYPES.MindAffecting],
	name: "Dream",
	requirements: [],
	effect: `You send a message in a dream to a creature that you name or otherwise specifically designate. You enter their dream and give them the message you wish them to recieve.  The communication is strictly one-way: you cannot learn anything from observing their dream, and they cannot ask you any questions.  If the creature is not sleeping when you cast this spell, the spell fails.  Creatures who do not sleep are unaffected by this spell.  While you are delivering the message, you are completely defenseless.`,
	manaEffect: ``,
	spellData: {
		range: RANGE.Plane,
		minMana: 6,
		school: SCHOOLS.Illusion,
		save: SAVES.Wisdom,
		duration: DURATIONS.Minute,
	},
},
{
	type: [SOURCES.Arcane],
	descriptors: [SPELL_TYPES.MindAffecting],
	name: "Nightmare",
	requirements: [],
	effect: `You send an unsettling dream to a creature that you name or otherwise specifically designate.  That creature does not gain any benefits from its rest, and instead gains one level of exhaustion.  If the creature is not sleeping when you cast this spell, the spell fails.  Creatures who do not sleep are unaffected by this spell.`,
	manaEffect: `For each additional mana spent, the spell's DC increases by 1.`,
	spellData: {
		range: RANGE.Plane,
		minMana: 6,
		school: SCHOOLS.Illusion,
		save: SAVES.Wisdom,
	},
},
];