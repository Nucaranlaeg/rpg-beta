ruleSections.casting = [
	{
		type: RULE_BLOCK.SUBTITLE,
		body: `Casting Spells`,
	},
	{
		type: RULE_BLOCK.BODY,
		body: `Use a standard action to cast a spell, unless the spell or a feature you own says otherwise.  Select the amount of mana you desire to use to cast the spell (which much be at least the minimum required for that spell).  Then select the target(s).  Most spells which require creatures as targets may also be cast at objects.
		Your spells may only use mana up to 1 plus half of your spellcaster level, rounded up.  Your spellcaster level is the sum of your levels in classes which grant magic sources.`,
	},
	{
		type: RULE_BLOCK.BODY,
		body: `Some spells require upkeep.  This may be mana that you have to spend each turn (or have the spell end) or merely concentration.  You may not concentrate on more than one spell at a time, and if you cast a second spell which requires concentration the first immediately ends.
		Whenever you are concentrating on a spell and suffer a Wound, you must succeed on a Concentration check or lose the spell.  The DC is equal to 5 plus the number of Wounds you have, plus 5 per Wound you just suffered (so, if you just suffered your first Wound, the DC is 11).  The key ability for Concentration checks is Intelligence.`,
	},
	{
		type: RULE_BLOCK.BODY,
		body: `Most spells require verbal and somatic (gesture) components.  If you wish to cast a spell, you must be able to speak and you must have one hand free.`,
	},
	{
		type: RULE_BLOCK.SUBTITLE,
		body: `Channelling`,
	},
	{
		type: RULE_BLOCK.BODY,
		body: `You may Channel as a swift action three times plus your Intelligence modifier per day, but only once per turn.  Add your total levels in classes which grant a magic source to the number of times per day you can Channel.  For example, a level 5 Wizard with 16 Intelligence can Channel 3 + 5 (levels) + 3 (Int) = 11 times per day.
		If you have no channels left for the day, you may overchannel.  This is just like channelling, but you immediately suffer one Overdraw Wound.  An Overdraw Wound is just like a regular Wound but it cannot be healed by healing magic.
		When you Channel, gain 2 mana plus mana equal to your rank in Channelling.  You may use this mana for casting spells this turn or hold it for another turn.  At the end of each turn that you do not Channel or use mana to cast a spell, lose one mana.  There is no limit to the amount of mana you can hold.`,
	},
	{
		type: RULE_BLOCK.SUBTITLE,
		body: `Saves`,
	},
	{
		type: RULE_BLOCK.BODY,
		body: `Creatures affected by a spell with a save type listed are entitled to make a save of that type.  If the spell does not otherwise specify, a creature which succeeds on the save takes half damage and suffers no other ill effects.
		The DC of a save against a spell is equal to 10 plus the caster's Charisma modifier.`,
	},
];

ruleSections.elements = [
	{
		type: RULE_BLOCK.SUBTITLE,
		body: `Elemental Damage Types`,
	},
	{
		type: RULE_BLOCK.BODY,
		body: `There are 10 magical damage types. Each has different properties, and changing a spell from one damage type to another may have effects beyond merely changing whether a creature is resistant to it.`,
	},
	{
		type: RULE_BLOCK.TABLE,
		body: [
			["Element", "Damage", "Half damage on successful saves?", "Effect"],
			["Acid", "1d8", "Yes", "Creatures adjacent to creatures damaged by acid take 1d4 acid damage."],
			["Cold", "1d8", "Yes", "Creatures who fail their save are Slowed for 1 round."],
			["Fire", "2d6", "Yes", "—"],
			["Force", "1d6", "—", "Damaging Force spells do not permit saves."],
			["Lightning", "1d10", "Yes", "Saves made by creatures wearing metal armour have Disadvantage."],
			["Negative", "1d10", "No", "Undead creatures are healed by negative energy."],
			["Positive", "1d10", "No", "Living creatures are healed by positive energy."],
			["Psionic", "1d10", "No", "Wounds dealt by psionic damage do not reduce the amount of damage dealt to hit points."],
			["Radiant", "1d8", "No", "Creatures who fail their save are Blinded for 1 round."],
			["Sonic", "1d8", "No", "Creatures who fail their save are Deafened for 1 round."],
		],
	},
];