import { Ability } from "../ability";
import { AbilityType } from "../ability-type.enum";
import { Skill } from "../skill";
import { SkillTree } from "../skill-tree";
import { AbilityInput } from "../ability-input.enum";
import { SkillBonus } from "../skill-bonus";

export default class MendozaData {
  static loadAbilities(): Ability[] {
    return [
      new Ability(
        41,
        "FIRE",
        "Fires rapid shots from pulse rifle.",
        AbilityInput.LEFT_CLICK,
        AbilityType.Weapon,
        "/assets/characters/mendoza/marine_primary.svg"
      )
        .addDamage("20 (2x crit – 40)")
        .addRateOfFire("10 per second")
        .addNotes([
          "Ammo – 24 rounds",
          "Reload time of 2 seconds",
          "Max Range – 250 m",
          "Projectile Speed – 625 m/s",
          "Damage Falloff Starts – 40 m",
          "Damage Falloff Ends – 60 m",
        ])
        .addSkillBonuses([
          new SkillBonus("Teflexton Barrel – Available at Level 1", [
            "Rifle bullets travel 25% faster, resulting in 25% less damage falloff",
          ]),
          new SkillBonus("Mark 20 Accu-scope – Available at Level 3", [
            "Aim Down Sights action is faster, and weapon bloom is greatly reduced",
          ]),
          new SkillBonus("Magna-Clip Loader - Available at Level 4", [
            "Magazine size increases from 24 to 30 rounds, and reloads 25% faster",
          ]),
          new SkillBonus("Hyperburst Chamber - Available at Level 5", [
            "After reloading, the first 6 bullets in the pulse rifle deal 33% more damage",
          ]),
        ]),
      new Ability(
        42,
        "AIM DOWN SIGHTS",
        "Hold to improve rifle accuracy. Slows movement.",
        AbilityInput.RIGHT_CLICK,
        AbilityType.Weapon,
        "/assets/characters/mendoza/marine_ads.svg"
      )
        .addRateOfFire("10 per second")
        .addDamage("20 (2x crit – 40)")
        .addDetails("Slows Mendoza’s movement")
        .addNotes([
          "Ammo – 24 rounds",
          "Reload time of 2 seconds",
          "Max Range – 250 m",
          "Projectile Speed – 625 m/s",
          "Damage Falloff Starts – 40 m",
          "Damage Falloff Ends – 60 m",
        ])
        .addSkillBonuses([
          new SkillBonus("Teflexton Barrel – Available at Level 1", [
            "Rifle bullets travel 25% faster, resulting in 25% less damage falloff",
          ]),
          new SkillBonus("Mark 20 Accu-scope – Available at Level 3", [
            "Aim Down Sights action is faster, and weapon bloom is greatly reduced",
          ]),
          new SkillBonus("Magna-Clip Loader - Available at Level 4", [
            "Magazine size increases from 24 to 30 rounds, and reloads 25% faster",
          ]),
          new SkillBonus("Hyperburst Chamber - Available at Level 5", [
            "After reloading, the first 6 bullets in the pulse rifle deal 33% more damage",
          ]),
        ]),
      new Ability(
        43,
        "SPRINT",
        "Tap or hold down to move faster.",
        AbilityInput.LSHIFT,
        AbilityType.Utility,
        "/assets/characters/mendoza/marine_sprint.svg"
      )
        .addDetails("Only affects forward movement")
        .addNotes(["Speed: 8.5 m/s"])
        .addSkillBonuses([
          new SkillBonus("Headlong Rush – Available at Level 3", [
            "Sprinting into an enemy deals 50 damage and causes a 5 m knockback. Sprinting speed increased from 8.5 m/s to 9 m/s",
          ]),
        ]),
      new Ability(
        44,
        "FLASH GRENADE",
        "Throws flash grenade which blinds enemies.",
        AbilityInput.E,
        AbilityType.Weapon,
        "/assets/characters/mendoza/marine_grenade.svg"
      )
        .addDamage("50 - 100")
        .addCooldown("12 seconds")
        .addDetails("Explodes on impact, blinds enemies for 1 second.")
        .addNotes([
          "Max Throw Distance – 175 m",
          "AoE Radius – 4 m",
          "Projectile Speed – 35 m/s",
        ])
        .addSkillBonuses([
          new SkillBonus("MU-21 Mini-Flash Grenades – Available at Level 1", [
            "Replaces Flash Grenade with 3 mini-grenades. Mini-grenades have less blind duration (0.5 seconds), a smaller AoE of 2.5 m, and deal 25-50 damage. Mini-grenades gain a charge every 10 seconds.",
          ]),
          new SkillBonus("Flashfire Grenades – Available at Level 5", [
            "Grenades leave a burning damage area for 8 seconds which deals 25 damage per second. AoE radius is 4 m, or 2 m with Mini-grenades.",
          ]),
        ]),
      new Ability(
        45,
        "SUPPLY DROP",
        "Calls down a med kit and bunker. Bunker knocks back opponents on landing.",
        AbilityInput.Q,
        AbilityType.Utility,
        "/assets/characters/mendoza/marine_bunker.svg"
      )
        .addDamage("100 if it lands on an enemy")
        .addCooldown("60 seconds")
        .addDetails("Knocks back enemies on landing")
        .addNotes([
          "Max Placement Distance – 10 m",
          "AoE Radius of Landing Impact – 4 m",
          "Health – 1800, which decays over 60 seconds",
        ])
        .addSkillBonuses([
          new SkillBonus("Autogun Bunker – Available at Level 1", [
            "Supply Drop Bunker gains a turret which fires 16 bullets every 2 seconds. Bullets deal 8-12 damage each. Turret range is 100 m.",
          ]),
        ]),
    ];
  }
  static loadSkillTree(): SkillTree {
    let skillTree = new SkillTree();
    skillTree.tierOneSkills = [
      new Skill(
        41,
        1,
        "Teflexton Barrel",
        "Rifle shots are 25% faster with 25% less damage falloff.",
        "/assets/characters/mendoza/extended_barrel.svg"
      ),
      new Skill(
        42,
        1,
        "MU-21 Mini-Flash Grenades",
        "Replace grenades with 3 mini-grenades. Increases cooldown by 4 seconds.",
        "/assets/characters/mendoza/mini_grenades.svg"
      ),
      new Skill(
        43,
        1,
        "Autogun Bunker",
        "Supply Drop provides a turret.",
        "/assets/characters/mendoza/turret.svg"
      ),
    ];
    skillTree.selectedTierOneSkill = skillTree.tierOneSkills[0];

    skillTree.tierTwoSkills = [
      new Skill(
        44,
        2,
        "U-14 Experimental Overshield",
        "Gain a 200 strength overshield which regenerates once out of combat for 6 seconds.",
        "/assets/characters/mendoza/overshield.svg"
      ),
    ];
    skillTree.selectedTierTwoSkill = skillTree.tierTwoSkills[0];

    skillTree.tierThreeSkills = [
      new Skill(
        45,
        3,
        "Mark 20 Accu-Scope",
        "Aim Down Sights faster and more accurate.",
        "/assets/characters/mendoza/scope.svg"
      ),
      new Skill(
        46,
        3,
        "Headlong Rush",
        "Knock back and damage opponents when sprinting. Sprint speed increases from 8.5 to 9 meters/second.",
        "/assets/characters/mendoza/sprint_charge.svg"
      ),
      new Skill(
        47,
        3,
        "Stimu-Health Packs",
        "Med kits apply in-combat shield regeneration for 10 seconds.",
        "/assets/characters/mendoza/stim_pack.svg"
      ),
    ];
    skillTree.selectedTierThreeSkill = skillTree.tierThreeSkills[0];

    skillTree.tierFourSkills = [
      new Skill(
        48,
        4,
        "Magna-Clip Loader",
        "Rifle magazine increases from 24 to 30 shots, reloads 25% faster.",
        "/assets/characters/mendoza/extended_mag.svg"
      ),
    ];
    skillTree.selectedTierFourSkill = skillTree.tierFourSkills[0];

    skillTree.tierFiveSkills = [
      new Skill(
        49,
        5,
        "Hyperburst Chamber",
        "After reloading, the first 6 pulse rifle shots inflict 33% more damage.",
        "/assets/characters/mendoza/hyperburst.svg"
      ),
      new Skill(
        50,
        5,
        "Flashfire Grenades",
        "Grenades leave a burning damage area.",
        "/assets/characters/mendoza/flashfire_grenade.svg"
      ),
    ];
    skillTree.selectedTierFiveSkill = skillTree.tierFiveSkills[0];

    return skillTree;
  }
}
