import { Ability } from "../ability";
import { AbilityType } from "../ability-type.enum";
import { Skill } from "../skill";
import { SkillTree } from "../skill-tree";
import { AbilityInput } from "../ability-input.enum";
import { SkillBonus } from "../skill-bonus";

export default class AjonahData {
  static loadAbilities(): Ability[] {
    return [
      new Ability(
        1,
        "HIP FIRE",
        "Fires harpoon.",
        AbilityInput.LEFT_CLICK,
        AbilityType.Weapon,
        "/assets/characters/ajonah/saboteur_primary.svg"
      )
        .addDamage("40 (2.5x crit - 100)")
        .addRateOfFire("2.84 per second")
        .addDetails("Targets receive crit dmg on headshot")
        .addSkillBonuses([
          new SkillBonus("Expanded Quiver - Available at Level 1", [
            "Harpoon gun has +2 Max Ammo",
          ]),
          new SkillBonus("Dazzling Burst – Available at Level 3", [
            "Harpoon gun headshots blind targets for .25 seconds",
          ]),
          new SkillBonus("Strike to the Head - Available at Level 5", [
            "Critical multiplier increases by 20% (from 2.5x to 3x crit – 120)",
          ]),
        ])
        .addNotes([
          "Ammo – 8 rounds",
          "Reload time of 2.2 seconds",
          "Max Range – 312 m",
          "Projectile Speed – 780 m/s",
          "Damage Falloff Starts – 60 m",
          "Damage Falloff Ends – 120 m",
        ]),
      new Ability(
        2,
        "AIM DOWN SIGHTS",
        "Hold to improve harpoon accuracy and increase damage. Slows movement.",
        AbilityInput.RIGHT_CLICK,
        AbilityType.Weapon,
        "/assets/characters/ajonah/saboteur_ads.svg"
      )
        .addDamage("60 (2.5x crit - 150)")
        .addRateOfFire("2.84 per second")
        .addDetails(
          "Targets receive critical damage on a headshot. Projectiles have the same properties as hip fire, with increased damage."
        )
        .addSkillBonuses([
          new SkillBonus("Expanded Quiver - Available at Level 1", [
            "Harpoon gun has +2 Max Ammo",
          ]),
          new SkillBonus("Dazzling Burst – Available at Level 3", [
            "Harpoon gun headshots blind targets for .25 seconds",
          ]),
          new SkillBonus("Strike to the Head - Available at Level 5", [
            "Critical multiplier increases by 20% (from 2.5x to 3x crit – 120)",
          ]),
        ])
        .addNotes(["Slows movement speed to 2.5 m/s"]),
      new Ability(
        3,
        "GRAPPLING HOOK",
        "Fires a retracting grappling hook. Hold to swing.",
        AbilityInput.LSHIFT,
        AbilityType.Utility,
        "/assets/characters/ajonah/saboteur_grapple.svg"
      )
        .addCooldown("10 seconds")
        .addDetails("Hold to swing, tap to release.")
        .addNotes(["Max distance – 30 m"])
        .addSkillBonuses([
          new SkillBonus("Tidal Reach - Available at Level 1", [
            "Grappling hook max range is reduced, but now has 2 charges",
            "Cooldown increased to 12 seconds",
          ]),
          new SkillBonus("Blend with the Reefs – Available at Level 4", [
            "Gain cloak for 1.5 seconds after using grappling hook",
          ]),
        ]),
      new Ability(
        4,
        "JAMMING SHROUD",
        "Deploys device that jams detection in this area. Tap again to detonate.",
        AbilityInput.Q,
        AbilityType.Utility,
        "/assets/characters/ajonah/saboteur_jammer.svg"
      )
        .addCooldown("20 seconds – after destroyed")
        .addDetails(
          "Jamming shroud prevents enemies from detecting Ajonah and her allies within its radius. Tap the key a second time to destroy the device."
        )
        .addNotes(["Max placement distance – 2.5 m", "Jamming radius – 30 m"])
        .addSkillBonuses([
          new SkillBonus("Deadly Shroud – Available at Level 2", [
            "Destroying the jamming shroud causes an explosion, dealing 25 damage to enemies and knocking them back",
            "Explosion radius is 8 m",
          ]),
          new SkillBonus("Safe Harbor – Available at Level 3", [
            "Allies gain 10% speed boost while inside the jamming shroud radius",
          ]),
        ]),
      new Ability(
        5,
        "SQUID MINE",
        "Creates mine that follows target and explodes, slowing enemies.",
        AbilityInput.E,
        AbilityType.Utility,
        "/assets/characters/ajonah/saboteur_mine.svg"
      )
        .addCooldown("8 seconds")
        .addDamage("15-30 direct damage, 45-90 damage over time")
        .addDetails("Maximum of 3 mines can be active.")
        .addNotes([
          "Mine health – 50",
          "Enemies slowed by 25% for 2 seconds",
          "Max placement distance – 10 m",
          "AOE radius – 3 m",
        ])
        .addSkillBonuses([
          new SkillBonus("Sea’s Bounty – Available at Level 1", [
            "Squid mine deployment speed range doubles",
            "Maximum squid mines increases from 3 to 4",
          ]),
          new SkillBonus("Neurotoxic Venom – Available at Level 5", [
            "Duration of squid mine slow increased to 5 seconds",
          ]),
        ]),
    ];
  }
  static loadSkillTree(): SkillTree {
    let skillTree = new SkillTree();
    skillTree.tierOneSkills = [
      new Skill(
        1,
        1,
        "Expanded Quiver",
        "Increases maximum ammo by 2.",
        "/assets/characters/ajonah/sab_max_ammo.svg"
      ),
      new Skill(
        2,
        1,
        "Sea's Bounty",
        "Squid Mines are thrown at increased range. Number of Squid Mines increases by 1.",
        "/assets/characters/ajonah/mine_style.svg"
      ),
      new Skill(
        3,
        1,
        "Tidal Reach",
        "Grappling Hook gains an additional charge but reduces range. Increases cooldown by 2 seconds.",
        "/assets/characters/ajonah/grapple_style.svg"
      ),
    ];
    skillTree.selectedTierOneSkill = skillTree.tierOneSkills[0];

    skillTree.tierTwoSkills = [
      new Skill(
        4,
        2,
        "Deadly Shroud",
        "Detonating an active Jamming Shroud inflicts damage and knock back targets.",
        "/assets/characters/ajonah/jammer_ability.svg"
      ),
    ];
    skillTree.selectedTierTwoSkill = skillTree.tierTwoSkills[0];

    skillTree.tierThreeSkills = [
      new Skill(
        5,
        3,
        "Dazzling Burst",
        "Critical hits blind targets.",
        "/assets/characters/ajonah/headshot_blind.svg"
      ),
      new Skill(
        6,
        3,
        "Heal in Shadows",
        "Heal 20 health/second when cloaked.",
        "/assets/characters/ajonah/stealth_regen.svg"
      ),
      new Skill(
        7,
        3,
        "Safe Harbor",
        "Increases speed +10% when within Jamming Shroud, including allies.",
        "/assets/characters/ajonah/jammer_swiftness.svg"
      ),
    ];
    skillTree.selectedTierThreeSkill = skillTree.tierThreeSkills[0];

    skillTree.tierFourSkills = [
      new Skill(
        8,
        4,
        "Blend with the Reefs",
        "Gain cload for 1.5 seconds after using Grappling Hook.",
        "/assets/characters/ajonah/grapple_stealth.svg"
      ),
    ];
    skillTree.selectedTierFourSkill = skillTree.tierFourSkills[0];

    skillTree.tierFiveSkills = [
      new Skill(
        9,
        5,
        "Neurotoxic Venom",
        "Squid Mines have increased slow duration.",
        "/assets/characters/ajonah/mine_slow.svg"
      ),
      new Skill(
        10,
        5,
        "Strike to the Head",
        "Increases critical hit multiplier from 2.5 to 3.0.",
        "/assets/characters/ajonah/headshot_multiplier.svg"
      ),
    ];
    skillTree.selectedTierFiveSkill = skillTree.tierFiveSkills[0];

    return skillTree;
  }
}
