ruleSections.overview = [
	{
		type: RULE_BLOCK.TITLE,
		body: `Since Last Session`,
	},{
		type: RULE_BLOCK.EXAMPLE,
		body: `Creatures now die instantly at 4 Wounds (small), 6 Wounds (medium), 8 Wounds (large).`,
	},{
		type: RULE_BLOCK.EXAMPLE,
		body: `Lightning Plague must burn out before being recast.`,
	},{
		type: RULE_BLOCK.EXAMPLE,
		body: `Ride the Lightning is much less predictable.`,
	},{
		type: RULE_BLOCK.SUBTITLE,
		body: `Overview`,
	},{
		type: RULE_BLOCK.BODY,
		body: `In this TTRPG, classes are more flexible but also more strongly separate - the class you choose at level 1 grants you abilities that you cannot get any other way, but you have a multitude of choices after that.  If you only choose features from your class, you should be fine, but it is okay to choose features from other classes to make your character play the way you want him to.
		Your skills are more fluid - you can choose things which fit your character and apply them where appropriate.`,
	},{
		type: RULE_BLOCK.BODY,
		body: `This takes an explicitly simulationist approach: when you come to a situation that the rules don't cover, your DM will make a ruling based on the physical rules of the real world.`,
	},{
		type: RULE_BLOCK.SUBTITLE,
		body: `Advantage`,
	},{
		type: RULE_BLOCK.BODY,
		body: `Certain situations and features grant Advantage or Disadvantage. Non-situational bonuses and maluses will typically be flat values so you can calculate your total bonus in advance.
		When you have Advantage, you roll 2d20 and take the higher value. When you have Disadvantage, you take the lower value instead.
		Subtract your Disadvantage (-D) from your Advantage (+A) before rolling - if you have +A and -D they cancel out and you make a normal roll. If you have net +2A or better, add your net Advantage to your roll in addition to the normal effects of Advantage (or conversely, subtract your Disadvantage).`,
	},
];

ruleSections.glossary = [
	{
		type: RULE_BLOCK.SUBTITLE,
		body: `Conditions`,
	},...[
		`Blind: A Blind creature is unable to see using its eyes.  If it has no other way of detecting creatures, it get Disadvantage against creatures within its reach and 2 Disadvantage against creatures whose locations are known but are outside of its reach.`,
		`Deaf: A Deaf creature is unable to hear.  Unless it is trained in sign language, it cannot communicate during combat unless a creature spends an action to communicate something simple.  Additionally, creatures flanking it get Advantage on attacks against it (in addition to the standard Advantage from flanking).`,
		`Distracted: When a Distracted creature is attacked, the attacker may choose to end the condition and gain Advantage on their attack.  This condition stacks.`,
		`Frightened: If you are within 30 feet of the object of your fear, all of your attacks are made at Disadvantage.  If you approach the object of your fear, all of your attacks this turn are made with Disadvantage.  This penalty also applies to social checks.`,
		`Incapacitated: You cannot take actions.  Creatures get Advantage on their attacks against you.`,
		`Slowed: A Slowed creature spends 1 additional foot of movement for every foot it travels.`,
		`Stunned: A Stunned creature drops everything held, can't take actions, and loses their Dexterity bonus to AC.`,
	].map(condition => {
		return {
			type: RULE_BLOCK.EXAMPLE,
			body: condition,
		};
	}),{
		type: RULE_BLOCK.SUBTITLE,
		body: `Keywords`,
	},...[
		`Flanking: When you and an ally are on opposite sides of an enemy and both threatening it, you both gain Advantage on your attacks against that enemy.`,
		`Touch attack: A touch attack ignores your armour bonus to AC.`,
	].map(condition => {
		return {
			type: RULE_BLOCK.EXAMPLE,
			body: condition,
		};
	}),
];
