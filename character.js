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
		body: `Selecting a race grants you a number of traits at level 1, including restrictions on your starting stats.  Select one racial trait.
		At level 5, 10, 15, and 20, you'll select a new trait.
		This is intended to make race selection relevant even at higher levels.  Some of the racial traits are cultural and can be swapped out (with your DM's permission) for cultural traits of other races.`,
	},
	{
		type: RULE_BLOCK.SUBTITLE,
		body: `Stats`,
	},
	{
		type: RULE_BLOCK.BODY,
		body: `Your stats start at 11/9/7/7/5/3, distributed how you wish.  Most races have a "high" stat which cannot start below 7 and a "low" stat which cannot start above 7.
		Then increase your stats, having 54 points to spend.  No stat can begin above 18.`,
	},
	{
		type: RULE_BLOCK.TABLE,
		body: [
			["Change", "Cost"],
			["+1", "1"],
			["+2", "2"],
			["+3", "4"],
			["+4", "6"],
			["+5", "9"],
			["+6", "12"],
			["+7", "16"],
			["+8", "20"],
			["+9", "25"],
		],
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
		body: `You may not select a feature with the same name as a feature you already have unless the feature says that you may, even if the same feature is available from two different classes.`,
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
		body: `You gain one skill of your choice each level, or increase the rank of a skill that you already have.  If you have more ranks in a skill than a quarter of your level (rounded up), those additional ranks have no effect.
		There is no fixed list of skills.  Instead, there are some suggested skills, but you may choose whatever skill you wish when you level up.  Skills do not affect your interaction with other creatures except for the special skills Diplomacy and Insight.
		Whenever you perform an action which is similar to one of your skills, you may apply the bonus from your skill to any rolls made regarding it (other than saving throws).  For example, you might be able to apply Climbing to ascend the rigging of a ship, but Sailing might also apply.  In any case, only one skill can be applied to any roll.
		A skill gives +2 per rank to related actions. If you perform an action which requires some amount of skill but you have no associated skill, you have Disadvantage on the roll.  For example, picking a lock, riding a horse, or swimming would give you Disadvantage, but attempting to lie to someone would not.
		You may add your Intelligence modifier to any skill check (even skill checks for things like Arcana where the key ability would already be Intelligence), up to the rank you have in the applicable skill.`,
	},
	{
		type: RULE_BLOCK.SUBTITLE,
		body: "Special Skills",
	},
	{
		type: RULE_BLOCK.BODY,
		body: "Some skills have special effects.  These skills cannot be used in other circumstances - they only provide the listed benefits.",
	},
	{
		type: RULE_BLOCK.SUBSUBTITLE,
		body: "Melee Weapons",
	},
	{
		type: RULE_BLOCK.BODY,
		body: "Gain +2 on attack rolls with melee weapons.",
	},
	{
		type: RULE_BLOCK.SUBSUBTITLE,
		body: "Ranged Weapons",
	},
	{
		type: RULE_BLOCK.BODY,
		body: "Gain +2 on attack rolls with ranged weapons.",
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
		type: RULE_BLOCK.SUBSUBTITLE,
		body: "Diplomacy",
	},
	{
		type: RULE_BLOCK.BODY,
		body: "When you make a social skill check, the lowest you can roll before taking your modifiers into account is twice the number of ranks you have in Diplomacy plus one (if you roll less, treat it as that number).  Expertise can increase this to thrice plus one.",
	},
	{
		type: RULE_BLOCK.SUBSUBTITLE,
		body: "Insight",
	},
	{
		type: RULE_BLOCK.BODY,
		body: "Whenever someone attempts to decieve you, if their die roll (before modifiers, including Diplomacy, if applicable) is less than or equal to twice your ranks in Insight, you are aware that they attempted to decieve you (but not what the lie was).",
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
	{
		type: RULE_BLOCK.SUBTITLE,
		body: "Example Skills",
	},
	{type: RULE_BLOCK.EXAMPLE, body: "Climb"},
	{type: RULE_BLOCK.EXAMPLE, body: "Hide"},
	{type: RULE_BLOCK.EXAMPLE, body: "Ride"},
	{type: RULE_BLOCK.EXAMPLE, body: "Sail"},
	{type: RULE_BLOCK.EXAMPLE, body: "Swim"},
	{type: RULE_BLOCK.EXAMPLE, body: "Arcana"},
	{type: RULE_BLOCK.EXAMPLE, body: "Religion"},
	{type: RULE_BLOCK.EXAMPLE, body: "Nature"},
];