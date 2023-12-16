spells = [
...spells,
{
	type: [SOURCES.Arcane],
	descriptors: [],
	name: "Resistance",
	requirements: [],
	effect: "You touch a creature and grant it a measure of protection. It gains +1 to all of its saving throws.",
	manaEffect: "Each additional mana improves the bonus by +1.",
	spellData: {
		range: RANGE.Touch,
		minMana: 1,
		school: SCHOOLS.Abjuration,
		save: SAVES.None,
		duration: DURATIONS.Minute,
	},
},
{
	type: [SOURCES.Arcane],
	descriptors: [],
	name: "Resiliance",
	requirements: [],
	effect: "You touch a creature and grant it a measure of protection. After taking a Wound it regains 3 hit points (this can occur multiple times in a single attack).",
	manaEffect: "Each additional mana used increases the hit points gained by 1.",
	spellData: {
		range: RANGE.Touch,
		minMana: 2,
		school: SCHOOLS.Abjuration,
		save: SAVES.None,
		duration: DURATIONS.Minute,
	},
},
{
	type: [SOURCES.Arcane],
	descriptors: [],
	name: "Elemental Adaptation",
	requirements: [],
	effect: "Choose an element. The creature you touch gains resistance 1 against that element (including against the effect of high temperature if the element chosen is Fire, low temperature if the element chosen is Cold, or other analogous effects for other elements).",
	manaEffect: "For each additional mana, the resistance is increased by 1 and the duration is doubled.",
	spellData: {
		range: RANGE.Touch,
		minMana: 2,
		school: SCHOOLS.Abjuration,
		save: SAVES.None,
		duration: DURATIONS.Hour,
	},
},
{
	type: [SOURCES.Arcane],
	descriptors: [],
	name: "Hold Portal",
	requirements: [],
	effect: "Target gate, door, window, or other entryway is held shut by a great force. The DC required to open it increases by 5 (to a minimum of 15). A portal or empty doorframe is held shut by an invisible force (DC 10 to cross).",
	manaEffect: "Each additional mana used increases the DC by 2.",
	spellData: {
		range: RANGE.Short,
		minMana: 2,
		school: SCHOOLS.Abjuration,
		save: SAVES.None,
		duration: DURATIONS.Day,
	},
},
{
	type: [SOURCES.Arcane],
	descriptors: [],
	name: "Protection From Chaos/Evil/Good/Law",
	requirements: [],
	effect: "When you cast this spell, choose an alignment. The warded creature gains Advantage against effects created by creatures of the chosen alignment, and creatures of the chosen alignment have Disadvantage on attacks against the warded creature. Spells and abilities of creatures of the chosen alignment which possess or otherwise control the warded creature are suppressed for the duration.",
	manaEffect: "For each two additional mana used, you may target one additional creature and the duration increases by 1 minute.",
	spellData: {
		range: RANGE.Short,
		minMana: 3,
		school: SCHOOLS.Abjuration,
		save: SAVES.None,
		duration: DURATIONS.Minute,
	},
},
{
	type: [SOURCES.Arcane],
	descriptors: [],
	name: "Circle Against Chaos/Evil/Good/Law",
	requirements: ["Protection From Chaos/Evil/Good/Law"],
	effect: "When you cast this spell, choose an alignment. You create a 10 foot radius circle which creatures of the chosen alignment cannot cross. The spell immediately ends if the circle of salt used to create the spell is disturbed. Creatures of the chosen alignment cannot disturb the circle, even indirectly, but other creatures can. Attacks and spells which pass into or out of the circle grant the effects of Protection From Evil to their targets (modified to the appropriate alignment). Creatures of the chosen alignment are unable to plane shift, teleport, or otherwise escape the circle without the caster of such a spell succeeding on a Charisma save.",
	manaEffect: "For every 3 additional mana used, you may choose an additional alignment it protects against.",
	spellData: {
		range: RANGE.Touch,
		minMana: 5,
		school: SCHOOLS.Abjuration,
		save: SAVES.None,
		duration: DURATIONS.Dawn,
		castTime: DURATIONS.Minute,
	},
},
{
	type: [SOURCES.Arcane],
	descriptors: [],
	name: "Shield",
	requirements: [],
	effect: "You conjure an invisible magical shield interposed between yourself and an incoming attack. It grants you +2 AC against that attack and any other attack before the beginning of your next turn. You may cast this spell as a reaction to being hit by an attack, before you know how much damage you take.  This spell blocks any Magic Missile cast targetting you.",
	manaEffect: "For each additional mana used, increase the bonus AC by 2.",
	spellData: {
		range: RANGE.Self,
		minMana: 1,
		school: SCHOOLS.Abjuration,
		save: SAVES.None,
	},
},
{
	type: [SOURCES.Arcane],
	descriptors: [],
	name: "Sphere of Denial",
	requirements: ["Shield"],
	effect: "You conjure an arcane sphere around yourself with a radius of 5 feet.  Any attack or damaging spell targetted at you, another creature within the sphere, or a point within the sphere by a creature outside of the sphere instead hits the sphere.  Once the sphere has taken 50 damage, it collapses (but the attack which breaks it does not deal damage to creatures inside).",
	manaEffect: "For each additional mana used, increase the hit points of the sphere by 50.",
	spellData: {
		range: RANGE.Self,
		minMana: 4,
		school: SCHOOLS.Abjuration,
		save: SAVES.None,
		upkeep: UPKEEP.One,
	},
},
{
	type: [SOURCES.Arcane],
	descriptors: [],
	name: "Invulnerability",
	requirements: ["Shield"],
	effect: "You become immune to all damage for the duration of this spell.",
	manaEffect: "For each additional mana used, increase the duration by 1 minute.",
	spellData: {
		range: RANGE.Self,
		minMana: 14,
		school: SCHOOLS.Abjuration,
		save: SAVES.None,
		duration: DURATIONS.Minute,
	},
},
{
	type: [SOURCES.Arcane],
	descriptors: [],
	name: "Alarm",
	requirements: [],
	effect: "You ward a 30 foot square area against entry. Each time a Tiny or larger creature enters the warded area, you hear a chime that instantly wakes you from sleep. You may specify a password that, if spoken by any creature near the alarmed area, disables the Alarm for one round.",
	manaEffect: "",
	spellData: {
		range: RANGE.Medium,
		minMana: 1,
		school: SCHOOLS.Abjuration,
		save: SAVES.None,
		duration: DURATIONS.Dawn,
		castTime: DURATIONS.Minute,
	},
},
{
	type: [SOURCES.Arcane],
	descriptors: [],
	name: "Trap",
	requirements: ["Alarm"],
	effect: "You ward a 30 foot square area against entry. The next time a Tiny or larger creature enters the warded area, you hear a chime that instantly wakes you from sleep. You may specify a password that, if spoken by any creature near the trapped area, disables the Trap for one round.",
	manaEffect: "As a part of casting this spell, you must cast a second spell which can target a single creature, for which you must pay double the mana cost (add the total to this spell's cost). That spell is cast upon the creature who triggers the trap.",
	spellData: {
		range: RANGE.Short,
		minMana: 0,
		school: SCHOOLS.Abjuration,
		save: SAVES.None,
		duration: DURATIONS.Dawn,
		castTime: DURATIONS.Minute,
	},
},
{
	type: [SOURCES.Arcane],
	descriptors: [SPELL_TYPES.Force],
	name: "Deny",
	requirements: [],
	effect: `You apply pure force to your enemy, preventing them from hitting you with an attack.  If it is a melee attack, your attacker takes ${DAMAGE.Force}.  You may only cast this spell as a reaction to being attacked, before you know whether the attack would hit.`,
	manaEffect: `For each additional mana used, this deals an additional ${DAMAGE.Force}. For each two additional mana you spend, you may block another attack with Deny as a free action before the beginning of your next turn.`,
	spellData: {
		range: RANGE.Touch,
		minMana: 2,
		school: SCHOOLS.Evocation,
		save: SAVES.None,
	},
},
{
	type: [SOURCES.Arcane],
	descriptors: [],
	name: "Obscure",
	requirements: [],
	effect: "You touch a creature or object and make it impossible to find by magical means.  Any divination spell cast on it fails and any divination spell which would include it incidentally ignores the presence of the creature or object obscured unless the caster succeeds on the save.",
	manaEffect: "Each additional mana doubles the duration.",
	spellData: {
		range: RANGE.Touch,
		minMana: 3,
		school: SCHOOLS.Abjuration,
		save: SAVES.Intelligence,
		duration: DURATIONS.Dawn,
	},
},
{
	type: [SOURCES.Arcane],
	descriptors: [],
	name: "Dimensional Anchor",
	requirements: [],
	effect: "You point at a creature and lock down space around it.  For the duration, creatures within 10 feet of the targetted creature may not use any form of extradimensional movement.",
	manaEffect: "Each additional mana doubles the duration and increases the radius by 10 feet.",
	spellData: {
		range: RANGE.Short,
		minMana: 4,
		school: SCHOOLS.Abjuration,
		save: SAVES.Wisdom,
		duration: DURATIONS.Hour,
	},
},
{
	type: [SOURCES.Arcane],
	descriptors: [],
	name: "Stoneskin",
	requirements: [],
	effect: "You touch a creature and its skin becomes impenetrable.  For the duration, all damage it recieves is reduced by your Intelligence modifier.  Psionic damage and damage from adamantium weapons bypasses this resistance.",
	manaEffect: "Each additional mana reduces the damage the creature takes from attacks by 1.",
	spellData: {
		range: RANGE.Touch,
		minMana: 4,
		school: SCHOOLS.Abjuration,
		save: SAVES.None,
		duration: DURATIONS.Hour,
	},
},
{
	type: [SOURCES.Arcane, SOURCES.Divine],
	descriptors: [SPELL_TYPES.Sustained],
	name: "Antimagic Field",
	requirements: [],
	effect: `You take absolute control of the weave around you.  Magical effects within 30 feet of you immediately cease and creatures other than you may not channel.  When the field disappears, magical effects reinstate themselves if their durations permit.  Magical effects like Fireball do not reach into the antimagic zone if the centre is outside of the zone, and do not occur at all if the centre is within the zone.
	<br>Summoned creatures are treated as magical effects, but golems and other magical constructs simply cease functioning and are not damaged.  Incorporeal creatures cannot reach the material plane from within the zone.
	<br>Antimagic Field cannot be dispelled.`,
	manaEffect: "Each additional mana doubles the duration or increases the radius by 10 feet.",
	spellData: {
		range: RANGE.Self,
		minMana: 6,
		school: SCHOOLS.Abjuration,
		save: SAVES.None,
		duration: DURATIONS.Minute,
		upkeep: UPKEEP.Zero,
	},
},
];