import { Ability } from "../ability";
import { AbilityType } from "../ability-type.enum";
import { Skill } from "../skill";
import { SkillTree } from "../skill-tree";
import { AbilityInput } from "../ability-input.enum";
import { SkillBonus } from "../skill-bonus";

export default class EarlData {
  static loadAbilities(): Ability[] {
    return [
      new Ability(
        36,
        "Turbofire",
        "Firing weapons creates Turbofire, increasing rate of fire.",
        AbilityInput.PASSIVE,
        AbilityType.Utility,
        "/assets/characters/earl/minigunner_passive.svg"
      ),
      new Ability(
        31,
        "FIRE",
        "Fires Misty, increasing Turbofire. Turbofire increases fire rate over time.",
        AbilityInput.LEFT_CLICK,
        AbilityType.Weapon,
        "/assets/characters/earl/minigunner_primary.svg"
      )
        .addDetails(
          "When cold, Misty has a rate of fire of 5 shots per second, but as Turbofire increases the maximum rate can reach 16 shots per second."
        )
        .addRateOfFire("5 - 16 per second")
        .addDamage("8 - 16 (1.5x crit – 12-24)")
        .addNotes([
          "Ammo – 120 rounds",
          "Reload time of 3 - 5 seconds",
          "Earl will reload up to all 3 of Misty’s pistons based on how much ammo remains. Starting and completing a reload takes 1 second for each step, and each piston takes 1 second to reload. A full reload takes 5 seconds, and reloading a single piston takes 3 seconds.",
          "Max Range – 225 m",
          "Projectile Speed – 500 m/s",
          "Damage Falloff Starts – 45 m",
          "Damage Falloff Ends – 112.5 m",
        ])
        .addSkillBonuses([
          new SkillBonus("High Idle – Available at Level 1", [
            "Turbofire does not deplete below 25%",
          ]),
          new SkillBonus("Packing a Spare – Available at Level 1", [
            "Gain +30 maximum ammo",
          ]),
          new SkillBonus("Red Line That Sucker - Available at Level 5", [
            "Maximum Turbofire causes an additional increase in firing spead (25%) and projectile speed (33%). Red Line shots pierce through targets.",
          ]),
        ]),
      new Ability(
        32,
        "UPSHIFT",
        "Fires a burst of explosive rounds and increases Turbofire.",
        AbilityInput.RIGHT_CLICK,
        AbilityType.Weapon,
        "/assets/characters/earl/minigunner_upshift.svg"
      )
        .addDamage("20 – 40 per explosion")
        .addDetails(
          "Upshift requires a short activation and has a total duration of 1.5 seconds."
        )
        .addCooldown("13 seconds")
        .addNotes([
          "Max Range – 150 m",
          "Projectile Speed – 150 m/s",
          "AoE Radius – 2.5 m",
        ])
        .addSkillBonuses([
          new SkillBonus("Scatterblast Shot– Available at Level 3", [
            "Upshift has a larger AoE (2.5 m – 4 m) and each shot inflicts an additional 12.5 - 25 damage over 10 seconds",
          ]),
        ]),
      new Ability(
        33,
        "AFTERBURNER",
        "Rocket forward at high speed.",
        AbilityInput.LSHIFT,
        AbilityType.Utility,
        "/assets/characters/earl/minigunner_afterburner.svg"
      )
        .addCooldown("25 seconds")
        .addDetails(
          "Afterburner takes 1 second to warm up upon activation and has 4.5 seconds of thrust. Can be stopped early."
        )
        .addSkillBonuses([
          new SkillBonus("Full Throttle – Available at Level 4", [
            "Colliding with someone while using Afterburner deals 36 damage, pushes them back, and stuns them for 0.25 seconds",
          ]),
        ]),
      new Ability(
        34,
        "BLOWBACK VENTS",
        "Knock enemies back and block projectiles in immediate area.",
        AbilityInput.E,
        AbilityType.Utility,
        "/assets/characters/earl/minigunner_airhorn.svg"
      )
        .addDamage("10 – 15 up to 4 times per second within affected area.")
        .addCooldown("15 seconds")
        .addDetails(
          "Earl lifts off the ground for 2.5 seconds, enemies and projectiles are knocked back 360-degrees around Earl."
        )
        .addNotes([
          "AoE Radius – 3 m, increasing by 1 m every 0.5 seconds to 8 m.",
          "Creates 6m radius explosions every .25 seconds that will deal 10-15 damage depending on how close the recipient of damage is.",
        ])
        .addSkillBonuses([
          new SkillBonus("Directional Vents – Available at Level 3", [
            "Increased movement speed while using Blowback Vents and increases duration from 2.5 to 3 seconds",
          ]),
        ]),
      new Ability(
        35,
        "TANKING UP",
        "Drink a refreshing beverage to immediately restore health.",
        AbilityInput.Q,
        AbilityType.Utility,
        "/assets/characters/earl/minigunner_drink.svg"
      )
        .addCooldown("20 seconds")
        .addNotes([
          "Heals for 200 over 0.5 seconds",
          "Earl throws the empty drink can behind him, dealing 30 damage on hit",
        ])
        .addSkillBonuses([
          new SkillBonus("X-Turbo Draft – Available at Level 3", [
            "After Tanking Up, gain max Turbofire",
          ]),
          new SkillBonus("Star-Ball Energy Drink – Available at Level 5", [
            "Tanking Up cleanses negative status effects and heals for 300 (up from 200)",
          ]),
        ]),
    ];
  }
  static loadSkillTree(): SkillTree {
    let skillTree = new SkillTree();
    skillTree.tierOneSkills = [
      new Skill(
        31,
        1,
        "Big Rig",
        "Increases maximum health by 300.",
        "/assets/characters/earl/max_health.svg"
      ),
      new Skill(
        32,
        1,
        "High Idle",
        "Turbofire does not deplete below 25%.",
        "/assets/characters/earl/high_idle.svg"
      ),
      new Skill(
        33,
        1,
        "Packing a Spare",
        "Increases maximum ammo by 30 (10 per piston).",
        "/assets/characters/earl/max_ammo.svg"
      ),
    ];
    skillTree.selectedTierOneSkill = skillTree.tierOneSkills[0];

    skillTree.tierTwoSkills = [
      new Skill(
        34,
        2,
        "Nothing Wasted",
        "Increases amount healed by med kits +50%.",
        "/assets/characters/earl/medpack_bonus.svg"
      ),
    ];
    skillTree.selectedTierTwoSkill = skillTree.tierTwoSkills[0];

    skillTree.tierThreeSkills = [
      new Skill(
        35,
        3,
        "Directional Vents",
        "Doubles movement speed when using Blowback Vents and increases duration from 2.5 to 3 seconds.",
        "/assets/characters/earl/turbo_vents.svg"
      ),
      new Skill(
        36,
        3,
        "Scatterblast Shot",
        "Upshift AoE increases +50% and inflicts +50% damage as DoT.",
        "/assets/characters/earl/upshift_aoe.svg"
      ),
      new Skill(
        37,
        3,
        "X-Turbo Draft",
        "Tanking Up fully charges Turbofire.",
        "/assets/characters/earl/drink_gun.svg"
      ),
    ];
    skillTree.selectedTierThreeSkill = skillTree.tierThreeSkills[0];

    skillTree.tierFourSkills = [
      new Skill(
        38,
        4,
        "Full Throttle",
        "Afterburner knocks opponents back and stuns them.",
        "/assets/characters/earl/afterburner_knockback.svg"
      ),
    ];
    skillTree.selectedTierFourSkill = skillTree.tierFourSkills[0];

    skillTree.tierFiveSkills = [
      new Skill(
        39,
        5,
        "Star-Ball Energy Drink",
        "Tanking Up heals +50% and purges negative conditions.",
        "/assets/characters/earl/drink_cleanse.svg"
      ),
      new Skill(
        40,
        5,
        "Red Line That Sucker",
        "At maximum Turbofire, increases RoF +25% and projectile speed +33%. Opponents do not block Line of Fire at maximum Turbofire.",
        "/assets/characters/earl/red_line.svg"
      ),
    ];
    skillTree.selectedTierFiveSkill = skillTree.tierFiveSkills[0];

    return skillTree;
  }
}
