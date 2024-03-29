classes.sorcerer = {
	"Stats": {
		"str": false,
		"dex": true,
		"con": false,
		"cha": true,
		"int": true,
		"wis": true,
		"hit die": 4,
	},
	"All": [
		"If you don't have a magic source, you gain the Arcane magic source and learn two spells.",
		"Reaching level 1, 5, 9, 13, and 17 in this class grants or improves the Channelling skill.",
	],
	"Level 1": [
		"Metamagic - Once per turn when you cast a spell, you may spend additional mana and add an additional effect to the spell.  Gain one metamagic of your choice.  You may only apply one metamagic to a spell.",
	],
	"Metamagic": [
		"Quickened (2 mana) - The spell can be cast using a swift action.",
		"Silent/Subtle (1 mana) - The spell requires no verbal components or no somatic components.  You may spend 2 mana and get both effects.",
		"Extended (1 mana) - The spell's range is doubled. If spending additional mana on the spell would double the range, increase it tenfold instead.",
		"Twinned (+50% mana, rounded up) - The spell targets two creatures rather than one.  This cannot be used if the spell usually targets more than one creature or does not target a creature.",
		"Delayed (2 mana) - The spell does not take effect until the beginning of your next turn.  You choose all targets at that point.  If you are not conscious, the spell does not take effect.",
		"Resilient (1 mana) - The spell counts as being cast with +4 mana for the purpose of dispelling or countering it.",
		"Elementally Altered (1-3 mana) - This spell's damage is changed to the element of your choice: Fire, Cold, Lightning, Acid (1 mana), Psychic, Sonic (2 mana), Positive Energy, Negative Energy, Force (3 mana)",
		"Enduring (1 mana) - The spell lasts twice as long.  The spell must have a duration longer than instantaneous. If spending additional mana on the spell would double the range, increase it fivefold instead.",
		"Sculpted - Choose some number of squares in the spell's area of effect.  Those squares are excluded from the effect.  The cost of this metamagic is equal to half the number of squares sculpted out, rounded up.",
		"Forceful (1 mana) - Targets have Disadvantage when saving against this spell's effects.",
		"Enlarged (1 mana) - The spell's radius is doubled.",
	],
	"Sorcerer": [
		"Wellspring - When you channel, reduce the mana cost of metamagic you apply this turn by 1.",
		"Cantrips - When you cast a spell using 2 or less mana (not counting metamagic), you are refunded 1 mana.",
	],
	"General": [
		"New Spell - Choose an Arcane spell and add it to your spell list.  You may choose this feature any number of times.",
		"Saving Throws: Control - Gain +2 on your Control Saving Throws (Dexterity and Intelligence).",
	],
};