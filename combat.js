ruleSections.actions = [
	{
		type: RULE_BLOCK.SUBTITLE,
		body: `Actions`,
	},
	{
		type: RULE_BLOCK.BODY,
		body: `On your turn, you may take one action of each type.  If an action is divisible (such as making multiple attacks or moving a distance) you may order what you do however you like.
		Any Move action can be taken as a Standard action.  Any Swift action may be taken as a Move or a Standard action.`,
	},
	{
		type: RULE_BLOCK.SUBSUBTITLE,
		body: `Standard`,
	},
	{
		type: RULE_BLOCK.EXAMPLE,
		body: `Attack: Make an attack.`,
	},
	{
		type: RULE_BLOCK.EXAMPLE,
		body: `Spell: Cast a spell.`,
	},
	{
		type: RULE_BLOCK.SUBSUBTITLE,
		body: `Move`,
	},
	{
		type: RULE_BLOCK.EXAMPLE,
		body: `Walk: Move a distance up to your speed.`,
	},
	{
		type: RULE_BLOCK.EXAMPLE,
		body: `Run: Move a distance up to double your speed.  You grant Advantage to attackers until the beginning of your next turn.`,
	},
	{
		type: RULE_BLOCK.SUBSUBTITLE,
		body: `Swift`,
	},
	{
		type: RULE_BLOCK.EXAMPLE,
		body: `Draw one or more weapons.`,
	},
	{
		type: RULE_BLOCK.EXAMPLE,
		body: `Channel: Gain 1 mana.`,
	},
];

ruleSections.criticals = [
	{
		type: RULE_BLOCK.SUBTITLE,
		body: `Threats`,
	},
	{
		type: RULE_BLOCK.BODY,
		body: `When you roll a natural 20 on an attack roll, you score a critical threat.  When you score a critical threat, roll another d20.  If the attack would have hit using this roll (and all your modifiers), you score a critical hit.
		If you have Advantage or Disadvantage, simply use the other die rolled as the confirmation roll.`,
	},
	{
		type: RULE_BLOCK.BODY,
		body: `Some weapons and features modify your ability to score critical hits.  For instance, a longsword scores critical threats on rolls of 19 and 20.  Even in this case, if your attack does not hit it does not count as a critical threat.`,
	},
	{
		type: RULE_BLOCK.SUBTITLE,
		body: `Result`,
	},
	{
		type: RULE_BLOCK.BODY,
		body: `When you score a critical hit, the creature you hit takes one additional wound.  Some weapons and features modify this damage.
		If the creature hit is immune to wounds (typically constructs and some undead) it does not suffer the wound but still suffers all of the other effects associated with the critical hit, if any.`,
	},
];


ruleSections.dying = [
	{
		type: RULE_BLOCK.SUBTITLE,
		body: `Wounds`,
	},
	{
		type: RULE_BLOCK.BODY,
		body: `When a creature takes damage, that creature may also take one or more Wounds.  A creature's hit points may be reduced to 0 (but never below), and this does not affect their capabilities in any way - hit points are a representation of a creature's combined luck and skill to avoid injury.  Wounds are calculated in the following way:`,
	},
	{
		type: RULE_BLOCK.SUBSUBTITLE,
		body: `Calculating Wounds`,
	},
	{
		type: RULE_BLOCK.EXAMPLE,
		body: `First, if the damage dealt is greater than the creature's Constitution *score*, subtract the creature's Constitution score from the damage dealt and the creature will take a Wound.  For example, an ogre hits a player character with 10 Constitution for 12 damage.  The character takes 1 Wound and loses 2 hit points.`,
	},
	{
		type: RULE_BLOCK.EXAMPLE,
		body: `Second, if the damage reduces a creature to 0 hit points, divide the excess damage by the creature's Constitution score, rounding any remainder up.  The creature takes that many Wounds.  For example, an ogre hits a player character with 8 Constitution for 18 damage, but the character only has 1 hit point remaining.  8 damage causes 1 Wound, 1 more damage reduces the character to 0 hit points, and the remaining 9 damage causes 2 more Wounds, for a total of 3 Wounds.`,
	},
	{
		type: RULE_BLOCK.EXAMPLE,
		body: `Some other effects may cause additional Wounds.  For instance, critical hits always deal 1 additional Wound.`,
	},
	{
		type: RULE_BLOCK.BODY,
		body: `If a creature takes more than one Wound from a single attack or takes a Wound from an attack that leaves it at 0 hit points, that creature must make a death saving throw or fall unconscious and begin dying.  Note that multiple Wounding attacks from one creature on its turn may not require any death saving throws, provided they only deal one Wound each.  The DC of a death saving throw is always equal to the number of Wounds that a creature has taken.  A creature gets a bonus on their death saving throw equal to their Constitution modifier.  A natural 1 is not neccessarily a failure on a death saving throw - so you are not required to roll death saving throws if you have not taken Wounds equal to your Constitution modifier plus two or more.`,
	},
	{
		type: RULE_BLOCK.SUBTITLE,
		body: `Dying`,
	},
	{
		type: RULE_BLOCK.BODY,
		body: `When a creature is dying at the beginning of their turn, it must roll a death saving throw.`,
	},
	{
		type: RULE_BLOCK.SUBSUBTITLE,
		body: `Death Saving Throws`,
	},
	{
		type: RULE_BLOCK.TABLE,
		body: [
			[`DC - 6 or worse`,`Die.`],
			[`DC - 5 to DC - 1`,`Gain an additional Wound.`],
			[`DC to DC + 4`,`No change.`],
			[`DC + 5 to DC + 9`,`Become stable and no longer roll death saving throws unless you take another Wound.  Awaken in 1d4 hours.`],
			[`DC + 10 or better`,`Become stable and conscious.`],
		],
	},
	{
		type: RULE_BLOCK.BODY,
		body: `A natural 20 always stabilizes the creature, and if the result is at least DC + 5, the creature becomes conscious.
		When a dying creature recieves magical healing, it may immediately roll a death saving throw.  This special death saving throw has no consequences if it is a failure, but it can stabilize the creature or cause it to become conscious (even if it is already stable).  Note that even with magical healing, a creature may still be dying, and will continue rolling death saving throws at the beginning of each of its turns if it does not stabilize.
		Your DM may assume that creatures which are not player characters (or important NPCs) simply die if they fall unconscious during combat. Similarly, your DM may assume that a creature dies without rolling if it takes Wounds equal to its Constitution score.`,
	},
	{
		type: RULE_BLOCK.SUBTITLE,
		body: `Long Term Healing`,
	},
	{
		type: RULE_BLOCK.BODY,
		body: `All hit points are restored after a short break of 10 minutes spent relaxing or 20 minutes of light activity.
		Each night that you rest, you heal one Wound.  However, you may still die from your injuries.  If you are Wounded when you begin your rest, then at the midpoint of your rest, roll a death saving throw.  If you fail it you begin dying, but only roll once per hour and do not wake up from results that say you do.  Provided you do not die, you stop dying and wake up in the morning as usual (for a typical 8 hour rest, you would roll a maximum of 5 times per night).
		You may hire a nurse to watch over you through the night; one nurse can watch over up to 10 creatures and reduces the maximum number of death saves to 2 per night.`,
	},
	{
		type: RULE_BLOCK.BODY,
		body: `When you rest overnight, lose a stack of exhaustion.  If you do not rest overnight, gain a stack of exhaustion instead.  If you spend a day resting, you lose a stack of exhaustion.
		Over a ten hour rest period, you may spend up to 2.5 hours on watch and still gain all benefits of resting.  If a watch is not needed, your time can be spent tending to wounded companions, but you cannot do both.`,
	},
	{
		type: RULE_BLOCK.SUBTITLE,
		body: `Less Deadly Games`,
	},
	{
		type: RULE_BLOCK.BODY,
		body: `Some groups might prefer a less deadly game at higher levels.  If your group desires a less deadly game, consider one of the following options:`,
	},
	{
		type: RULE_BLOCK.EXAMPLE,
		body: `Player characters cannot die from failed death saving throws if they have fewer wounds than their level plus their Constitution modifier (don't subtract a malus).`,
	},
	{
		type: RULE_BLOCK.EXAMPLE,
		body: `Player characters do not roll death saving throws if they have fewer wounds than their level plus their Constitution modifier (don't subtract a malus).`,
	},
	{
		type: RULE_BLOCK.EXAMPLE,
		body: `Player characters add half their level to death saving throws.`,
	},
];

ruleSections.defenses = [
	{
		type: RULE_BLOCK.SUBTITLE,
		body: `Defenses`,
	},
	{
		type: RULE_BLOCK.BODY,
		body: `Your Armour Class (AC) determines how hard it is to hit you.  However, certain attacks may bypass some of your defenses.  The most common types of attacks which bypass your defenses are recorded on your character sheet and described here.`,
	},
	{
		type: RULE_BLOCK.EXAMPLE,
		body: `Your touch AC is for when a creature needs to touch you, typically to cast a spell on you.  Do not apply your armour to you touch AC, but shields still provide AC against touch attacks.`,
	},
	{
		type: RULE_BLOCK.EXAMPLE,
		body: `Your flat-footed AC is for attacks which hit you when you are unable to react (either because you cannot move or because you are unaware of the attack).  Do not apply your Dexterity modifier or your shield bonus to your flat-footed AC.  Features which grant AC may also indicate that they do not function when flat-footed.`,
	},
];
