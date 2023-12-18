ruleSections.actions = [
	{
		type: RULE_BLOCK.SUBTITLE,
		body: `Actions`,
	},
	{
		type: RULE_BLOCK.BODY,
		body: `On your turn, you may take one action of each type.  If an action is divisible (such as making multiple attacks or moving a distance) you may order what you do however you like.
		Any Move action can be taken as a Standard action.  Any Swift action may be taken as a Move or a Standard action.  Reactions may only be taken when a rule or feature allows you to, and may not be taken on your turn.
		Some things take minimal effort from you, and are considered Free actions.  You may take any reasonable number of Free actions at any point.`,
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
		type: RULE_BLOCK.EXAMPLE,
		body: `Ready: Prepare an action for when an appropriate trigger happens before the beginning of your next turn.`,
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
	{
		type: RULE_BLOCK.SUBSUBTITLE,
		body: `Reaction`,
	},
	{
		type: RULE_BLOCK.EXAMPLE,
		body: `Make an attack of opportunity.`,
	},
	{
		type: RULE_BLOCK.EXAMPLE,
		body: `Use a Readied action.`,
	},
	{
		type: RULE_BLOCK.SUBSUBTITLE,
		body: `Free`,
	},
	{
		type: RULE_BLOCK.EXAMPLE,
		body: `Speak briefly.`,
	},
];

ruleSections.attacks = [
	{
		type: RULE_BLOCK.SUBTITLE,
		body: `Making a Melee Attack`,
	},
	{
		type: RULE_BLOCK.BODY,
		body: `To make a melee attack, select a creature or a space within your reach that you have clear line of effect to.  This is the target creature.  If targetting a space, you have a Disadvantage on your attack, and it targets a random creature in the space that you can't see (if any).
		Next roll 1d20 (suitably modified if you have Advantage or Disadvantage) and add your relevant modifiers.  Typically, this will be twice your rank in the Melee Weapons skill and your Strength modifier, but some features or items will give you additional bonuses.
		If your roll is greater than or equal to the target creature's AC, you hit it.`,
	},
	{
		type: RULE_BLOCK.SUBTITLE,
		body: `Making a Ranged Attack`,
	},
	{
		type: RULE_BLOCK.BODY,
		body: `To make a ranged attack, select a creature or a space that you have clear line of effect to.  This is the target creature.  If targetting a space, you have a Disadvantage on your attack, and it targets a random creature in the space that you can't see (if any).
		If the target creature is beyond the range of your weapon, you have Disadvantage.  If it is further than 4x the range of your weapon (3x for thrown attacks) you cannot hit it.
		Next roll 1d20 (suitably modified if you have Advantage or Disadvantage) and add your relevant modifiers.  Typically, this will be twice your rank in the Ranged Weapons skill and your Dexterity modifier (Strength for thrown weapons), but some features or items will give you additional bonuses.
		If your roll is greater than or equal to the target creature's AC, you hit it.`,
	},
	{
		type: RULE_BLOCK.SUBTITLE,
		body: `Dealing Damage with an Attack`,
	},
	{
		type: RULE_BLOCK.BODY,
		body: `When you hit a creature with an attack, you deal damage to it.  Roll your weapon's damage and add your relevant modifiers (typically Strength unless it's a projectile weapon).  See Combat->Dying for how to handle taking damage.`,
	},
	{
		type: RULE_BLOCK.SUBTITLE,
		body: `Relevant Ability Scores`,
	},
	{
		type: RULE_BLOCK.TABLEWITHHEAD,
		body: [
			["Attack Type", "To-Hit", "To Damage"],
			["Melee", "Strength", "Strength"],
			["Melee (Finesse)", "Dexterity", "Strength"],
			["Ranged (Projectile)", "Dexterity", "—"],
			["Ranged (Thrown)", "Strength", "Strength"],
		],
	},
	{
		type: RULE_BLOCK.SUBTITLE,
		body: `Critical Threats`,
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
		type: RULE_BLOCK.BODY,
		body: `When you score a critical hit, the creature you hit takes one additional wound.  Some weapons and features modify this damage.
		If the creature hit is immune to wounds (typically constructs and some undead) it does not suffer the wound but still suffers all of the other effects associated with the critical hit, if any.`,
	},
	{
		type: RULE_BLOCK.SUBTITLE,
		body: `Dual Wielding`,
	},
	{
		type: RULE_BLOCK.BODY,
		body: `You may wield one weapon in each hand.  If you do so, whenever you take the Attack action you may also attack with your off-hand weapon.  However, your attacks with your off-hand weapon have Disadvantage.`,
	},
];

ruleSections.movement = [
	{
		type: RULE_BLOCK.SUBTITLE,
		body: `Moving Around`,
	},
	{
		type: RULE_BLOCK.BODY,
		body: `When you use a move action, you can reposition yourself.  Different types of movement require you to spend extra feet of movement.  For example, while swimming each foot that you move costs you 2 feet of movement.
		If you attempt a form of movement you do not have a base speed in (typically you only have a land movement speed), you must make a skill check.  The result of the check is the maximum feet of movement you may spend on that type of movement this turn.  For skill checks related to movement, every 5 feet of movement speed you have above 30 gives you a +2 bonus and every 5 feet of movement speed belows 30 gives you a -2 malus.`,
	},
	{
		type: RULE_BLOCK.SUBSUBTITLE,
		body: `Relative Movement Costs`,
	},
	{
		type: RULE_BLOCK.TABLEWITHHEAD,
		body: [
			["Movement Type", "Cost Per Foot", "Special"],
			["Walking", "1", "—"],
			["Running", "1", "—"],
			["Climbing (Vertical)", "5", "Some surfaces require a minimum climb check, otherwise you fall."],
			["Climbing (Horizontal)", "3", "Some surfaces require a minimum climb check, otherwise you fall."],
			["Flying", "1", "Must have a flying speed"],
			["Swimming", "2", "—"],
			["Jumping (Vertical)", "10", "Half of the movement you spend on jumping is refunded."],
			["Jumping (Horizontal)", "2", "Half of the movement you spend on jumping is refunded."],
			["Jumping (Horizontal, from standstill)", "3", "Half of the movement you spend on jumping is refunded."],
			["Difficult Terrain", "×2", "—"],
		],
	},
	{
		type: RULE_BLOCK.SUBTITLE,
		body: `Attacks of Opportunity`,
	},
	{
		type: RULE_BLOCK.BODY,
		body: `Creatures control the space around them in combat.  If you are wielding a weapon or are a monk, you threaten all spaces within your reach.  When a creature moves out of one of your threatened spaces, it provokes an attack of opportunity from you unless it stops in the next space it enters (it can make no more voluntary movement this turn).
		When a creature provokes an attack of opportunity from you, you may use your reaction to make an attack against that creature.  All effects of your attack are applied before the target enters the next space.`,
	},
];


ruleSections.dying = [
	{
		type: RULE_BLOCK.SUBTITLE,
		body: `Wounds`,
	},
	{
		type: RULE_BLOCK.BODY,
		body: `When you take damage, your first defense is your hit points.  As long as you have hit points left, subtract the damage dealt from your hitpoints.  Loss of hit points do not affect your capabilities in any way.  Rather, they are a representation of your character's combined luck and skill to avoid injury.
		However, if you take lots of damage from a single attack, some of that damage may be taken as Wounds.  Whether you take Wounds is determined as follows:`,
	},
	{
		type: RULE_BLOCK.SUBSUBTITLE,
		body: `Calculating Wounds`,
	},
	{
		type: RULE_BLOCK.EXAMPLE,
		body: `First, if the damage dealt is greater than your Constitution <i>score</i>, subtract your Constitution score from the damage dealt and take a Wound.
		<i>Example: An ogre hits a player character with 10 Constitution for 12 damage.  The character takes 1 Wound and loses 2 hit points.</i>`,
	},
	{
		type: RULE_BLOCK.EXAMPLE,
		body: `Second, if the damage reduces you to 0 hit points, divide the excess damage by your Constitution score, rounding any remainder up.  You then take that many Wounds.
		<i>Example: An ogre hits a player character with 8 Constitution for 18 damage, but the character only has 1 hit point remaining.  8 damage causes 1 Wound, 1 more damage reduces the character to 0 hit points, and the remaining 9 damage causes 2 more Wounds, for a total of 3 Wounds.</i>`,
	},
	{
		type: RULE_BLOCK.EXAMPLE,
		body: `Some other effects may cause additional Wounds.  For instance, critical hits always deal 1 additional Wound.`,
	},
	{
		type: RULE_BLOCK.BODY,
		body: `If you take more than one Wound from a single attack or take a Wound from an attack that leaves you at 0 hit points, you must succeed on a death saving throw or fall unconscious and begin dying.  Note that multiple Wounding attacks in one turn may not require any death saving throws, provided they only deal one Wound each.  The DC of a death saving throw is always equal to the number of Wounds that you have taken.
		You get a bonus on your death saving throw equal to your Constitution modifier.  A natural 1 is not neccessarily a failure on a death saving throw - so you are not required to roll death saving throws if you have not taken Wounds equal to your Constitution modifier plus two or more.`,
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
		type: RULE_BLOCK.SUBTITLE,
		body: `Exhaustion`,
	},
	{
		type: RULE_BLOCK.BODY,
		body: `When you rest overnight, lose a stack of exhaustion.  If you do not rest overnight, gain a stack of exhaustion instead.  If you spend a day resting, you lose an additional stack of exhaustion.
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

ruleSections.other = [
	{
		type: RULE_BLOCK.SUBTITLE,
		body: `Flanking`,
	},
	{
		type: RULE_BLOCK.BODY,
		body: `You flank a creature when you and an ally are both threatening it, and there is a straight line from the centre of your space to the centre of your ally's space which passes through opposite sides of the creature's space.  While flanking a creature, your attacks against that enemy gain Advantage.
		In other words, you flank a creature when you and your ally are on opposite sides of the creature and both threatening it.`,
	},
	{
		type: RULE_BLOCK.SUBTITLE,
		body: `Ready`,
	},
	{
		type: RULE_BLOCK.BODY,
		body: `You may use an action to prepare an action you want to take in response to something else, like a creature attacking an ally.  To do so, choose an event that you can percieve and the action you will take in response.  When the event occurs, you may immediately take your Readied action.
		If your action is an attack, you may only attack once (even if you have Extra Attack).
		If you have more than one Reaction available, you may not use your Readied action more than once.`,
	},
	{
		type: RULE_BLOCK.SUBTITLE,
		body: `Mounted Combat`,
	},
	{
		type: RULE_BLOCK.BODY,
		body: `You may ride a creature at least one size class larger than you.  If you do not have a saddle appropriate to both you and your mount, you suffer Disadvantage on all checks while mounted (some checks may be exempted from this penalty at your DM's discretion).
		You must make a Dexterity check with DC 20 if there is a hostile creature within 15 feet in order to control your mount.  If you fail the check, your mount flees combat as fast as it can.  You do not need to make the check when riding a mount trained for combat.  Once you succeed on the check, you do not need to make it again until you dismount or 5 minutes have passed.
		If you're controlling your mount, you can use a move action to move you and your mount using your mount's speed.  Ranged attacks made on the same turn that your mount moves are made with Disadvantage.
		While mounted, your movement does not provoke attacks of opportunity from creatures smaller than your mount.`,
	},
];
