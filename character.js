ruleSections.creation = [
	{
		type: RULE_BLOCK.BODY,
		body: `Character creation is relatively straightforward: select a race, select a class, and select your starting equipment.`,
	},
	{
		type: RULE_BLOCK.SUBTITLE,
		body: `Races`,
	},
	{
		type: RULE_BLOCK.BODY,
		body: `Selecting a race grants you a number of traits at level 1, including adjustments to your starting stats.  Select one racial trait.
		At level 5, 10, 15, and 20, you'll select a new trait.
		This is intended to make race selection relevant even at higher levels.  Some of the racial traits are cultural and can be swapped out (with your DM's permission) for cultural traits of other races.`,
	},
];

ruleSections.levelling = [
	{
		type: RULE_BLOCK.BODY,
		body: `Upon levelling up, your capabilities increase.  Do all of the following to complete your level up.`,
	},
	{
		type: RULE_BLOCK.EXAMPLE,
		body: `Choose a class to gain a level in (this is "your class" for the rest of this level up).  Gain a class feature from your class.  Most features can only be taken once.  You may not choose a feature which is identical to a feature you already have from another class.
		You may only choose a "general" feature if your class is not your primary class (the one you chose at level 1).`,
	},
	{
		type: RULE_BLOCK.EXAMPLE,
		body: `Gain one stat point in a stat associated with your class.  This cannot be a stat that you gained in the last three levels.`,
	},
	{
		type: RULE_BLOCK.EXAMPLE,
		body: `Gain a new skill or increase the rank of a skill you already have.  If your class grants you a skill at this level, you also gain (or increase the rank of) that skill.  If your class grants a magic source, you may instead learn a new spell.`,
	},
	{
		type: RULE_BLOCK.EXAMPLE,
		body: `Increase your maximum hit points by rolling your class' hit die and adding your roll to your current maximum hit points.`,
	},
	{
		type: RULE_BLOCK.EXAMPLE,
		body: `Gain a Reputation (but this may vary based on your table).`,
	},
	{
		type: RULE_BLOCK.EXAMPLE,
		body: `Gain a racial trait if your total level is 5, 10, 15, or 20.`,
	},
	{
		type: RULE_BLOCK.BODY,
		body: `You may not select an identical feature more than once unless the feature says that you may, even if the same feature is available from two different classes.  You may add up levels from all classes with Extra Attacks to qualify for extra attacks, but use your base class's version.`,
	},
];

ruleSections.stats = [
	{
		type: RULE_BLOCK.BODY,
		body: `There are three physical stats:`,
	},
	{
		type: RULE_BLOCK.EXAMPLE,
		body: `Strength (STR): Your ability to change the world around you with your body.`,
	},
	{
		type: RULE_BLOCK.EXAMPLE,
		body: `Dexterity (DEX): Your ability to control your own body.`,
	},
	{
		type: RULE_BLOCK.EXAMPLE,
		body: `Constitution (CON): Your ability to resist the outside world changing your body.`,
	},
	{
		type: RULE_BLOCK.BODY,
		body: `Similarly, there are three mental stats:`,
	},
	{
		type: RULE_BLOCK.EXAMPLE,
		body: `Charisma (CHA): Your ability to change the world around you with your mind.`,
	},
	{
		type: RULE_BLOCK.EXAMPLE,
		body: `Intelligence (INT): Your ability to control your own mind.`,
	},
	{
		type: RULE_BLOCK.EXAMPLE,
		body: `Wisdom (WIS): Your ability to resist the outside world changing your mind.`,
	},
	{
		type: RULE_BLOCK.BODY,
		body: `These terms may not line up with the common usages of them.  For example, Intelligence does not represent how much you know or how quickly you can think.  Nor is Charisma your likeability - though very likeabile characters (and some very unlikeable characters) will tend to have higher Charisma.`,
	},
	{
		type: RULE_BLOCK.SUBTITLE,
		body: `Gaining Stats`,
	},
	{
		type: RULE_BLOCK.BODY,
		body: `At each level, you choose one stat associated with your class and increase that stat by 1.  For example, the stats associated with Barbarian are STR, CON, DEX, and WIS.  You can only increase each stat in this way once every three levels.`,
	},
];

ruleSections.skills = [
	{
		type: RULE_BLOCK.BODY,
		body: `There are three types of skills: narrow skills, broad skills, and special skills.  You gain one skill of your choice each level, or increase the rank of a skill that you already have.  You may not increase the rank of a skill if it is already ranked equal to one quarter your level or higher.
		There is no fixed list of skills.  Instead, there are some suggested skills, but you may choose whatever skill you wish when you level up.  If it is not listed, decide with your DM whether it is a narrow or broad skill, using the examples as a guide.
		Whenever you perform an action which is similar to one of your skills, you may apply the bonus from your skill to any rolls made regarding it (other than saving throws).  For example, you might be able to apply Climbing to ascend the rigging of a ship, but Sailing or Athletics might also apply.  In any case, only one skill can be applied to any roll.
		A narrow skill gives a +2 per rank to related actions.  A broad skill will apply to more actions, but only gives a +1 per rank.  Special skills provide other bonuses and do not apply a bonus to any roll unless the rules governing that skill say that it does.
		If you perform an action with no associated skill, you have Disadvantage on the roll.`,
	},
	{
		type: RULE_BLOCK.SUBTITLE,
		body: "Special Skills",
	},
	{
		type: RULE_BLOCK.SUBSUBTITLE,
		body: "Melee Weapons",
	},
	{
		type: RULE_BLOCK.BODY,
		body: "This is a broad skill, but it is treated as a narrow skill for the purpose of making attacks only.  If you wish to use your weapon out of combat for any purpose (training, demonstration, etc.) treat it as a broad skill.",
	},
	{
		type: RULE_BLOCK.SUBSUBTITLE,
		body: "Ranged Weapons",
	},
	{
		type: RULE_BLOCK.BODY,
		body: "This is a broad skill, but it is treated as a narrow skill for the purpose of making attacks only.  If you wish to use your weapon out of combat for any purpose (training, demonstration, etc.) treat it as a broad skill.",
	},
	{
		type: RULE_BLOCK.SUBSUBTITLE,
		body: "Channelling",
	},
	{
		type: RULE_BLOCK.BODY,
		body: "Whenever you Channel, gain 1 additional mana.",
	},
	{
		type: RULE_BLOCK.SUBTITLE,
		body: "Gaining Skills Via Classes",
	},
	{
		type: RULE_BLOCK.BODY,
		body: "Classes grant you skills when you reach certain levels.  Levels in different classes may not be combined for this purpose.  If a skill's rank is increased beyond what you are eligible for, you gain no benefit from that rank until you are eligible for it.",
	},
	{
		type: RULE_BLOCK.EXAMPLE,
		body: "Barbarian: Gain Melee Weapons at levels 1, 5, 9, 13, 17.",
	},
	{
		type: RULE_BLOCK.EXAMPLE,
		body: "Bard: Gain Melee Weapons or Ranged Weapons at levels 1, 5, 9, 13, 17.",
	},
	{
		type: RULE_BLOCK.EXAMPLE,
		body: "Cleric: Gain Channelling at levels 1, 5, 9, 13, 17.",
	},
	{
		type: RULE_BLOCK.EXAMPLE,
		body: "Fighter: Gain Melee Weapons or Ranged Weapons at every odd level.",
	},
	{
		type: RULE_BLOCK.EXAMPLE,
		body: "Monk: Gain the narrow skill Unarmed Combat at levels 1, 5, 9, 13, 17.",
	},
	{
		type: RULE_BLOCK.EXAMPLE,
		body: "Paladin: Gain Channelling, Melee Weapons, or Ranged Weapons at levels 1, 5, 9, 13, 17.",
	},
	{
		type: RULE_BLOCK.EXAMPLE,
		body: "Rogue: Gain Melee Weapons or Ranged Weapons at levels 1, 5, 9, 13, 17.",
	},
	{
		type: RULE_BLOCK.EXAMPLE,
		body: "Sorcerer: Gain Channelling at levels 1, 5, 9, 13, 17.",
	},
	{
		type: RULE_BLOCK.EXAMPLE,
		body: "Wizard: Gain Channelling at levels 1, 5, 9, 13, 17.",
	},
];