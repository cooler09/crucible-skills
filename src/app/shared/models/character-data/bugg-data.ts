import { Ability } from "../ability";
import { AbilityType } from "../ability-type.enum";
import { Skill } from "../skill";
import { SkillTree } from "../skill-tree";
import { AbilityInput } from "../ability-input.enum";
import { SkillBonus } from "../skill-bonus";

export default class BuggData {
  static loadAbilities(): Ability[] {
    return [
      new Ability(
        16,
        "Anti-Grav",
        "Move the same speed in all directions, regardless of facing.",
        AbilityInput.PASSIVE,
        AbilityType.Utility,
        "/assets/characters/bugg/robotanist_passive.svg"
      ),
      new Ability(
        11,
        "SPRAY",
        "Damages opponents and activates seed pods.",
        AbilityInput.LEFT_CLICK,
        AbilityType.Weapon,
        "/assets/characters/bugg/robotanist_primary.svg"
      )
        .addDamage("12 - 24")
        .addRateOfFire("3.5 per second")
        .addDetails("Fires in a high arc")
        .addNotes([
          "Ammo – 15 rounds",
          "Reload time of 2 seconds",
          "Max Range – 41.7 m",
          "Projectile Speed – 30 m/s",
          "Projectile Lifetime – 40 m",
          "Splash (AoE) Radius – 2 m",
        ])
        .addSkillBonuses([
          new SkillBonus("High pH Mixture – Available at Level 1", [
            "Spray damage increased by 25%, applied as Damage over time.",
          ]),
        ]),
      new Ability(
        12,
        "SEED POD",
        "Fires a seed pod that can be activated by spraying.",
        AbilityInput.RIGHT_CLICK,
        AbilityType.Utility,
        "/assets/characters/bugg/robotanist_thrusters.svg"
      )
        .addDamage("Plants deal 16 damage, 4 times per second")
        .addCooldown("4 seconds")
        .addNotes([
          "Plant Health – 150",
          "Max Placement Distance – 5 m",
          "Plant Range – 12 m",
          "Plants have a 1 second activation",
        ])
        .addSkillBonuses([
          new SkillBonus("Early Bloomers – Available at Level 1", [
            "Plants do not have to be watered in order to activate. Plants activate immediately when seed pods are placed.",
          ]),
          new SkillBonus("Protective Husks – Available at Level 3", [
            "Seed pods are spawned with 50 overshields.",
          ]),
          new SkillBonus("Booming Blossoms - Available at Level 3", [
            "Plants can receive extra watering until the become overcharged, stunning enemies within 9 m for 1.5 seconds and inflicting 25 damage.",
          ]),
          new SkillBonus("Daisy Chain - Available at Level 5", [
            "Plant attacks can chain to one additional target within 6 m. Will not hit the same target twice.",
          ]),
        ]),
      new Ability(
        13,
        "THRUSTERS",
        "Thrusters propel you forward and vertically.",
        AbilityInput.LSHIFT,
        AbilityType.Utility,
        "/assets/characters/bugg/robotanist_shield_burst.svg"
      )
        .addCooldown("10 seconds")
        .addSkillBonuses([
          new SkillBonus("High Grade Bio-Fuel – Available at Level 5", [
            "Upgrades thruster fuel so it applies a massive initial thrust when activating thrusters.",
          ]),
        ]),
      new Ability(
        14,
        "CROP DUST",
        "Creates a slowing, damaging, area of effect beneath you.",
        AbilityInput.E,
        AbilityType.Utility,
        "/assets/characters/bugg/robotanist_crop_dust.svg"
      )
        .addDamage("10 damage every 4.5 seconds")
        .addCooldown("12 seconds")
        .addDetails("Can be used with Thrusters")
        .addNotes([
          "Slow Effect – Reduces enemy speed by 33%",
          "Goo Lifetime – 5 m",
          "AoE Radius – 4 m",
        ])
        .addSkillBonuses([
          new SkillBonus("No-Weed Pesticide – Available at Level 4", [
            "Crop Dust applies a 20% vulnerability to enemies.",
          ]),
        ]),
      new Ability(
        15,
        "SHIELD BURST",
        "You, your seed pods, your plants, and nearby allies gain a temporary overshield.",
        AbilityInput.Q,
        AbilityType.Utility,
        "/assets/characters/bugg/robotanist_seed_pod.svg"
      )
        .addCooldown("25 seconds")
        .addDetails("Can be used with Thrusters")
        .addNotes([
          "Shield Granted – 400",
          "AoE Radius – 12 m",
          "Shield Lifetime – 1.5 seconds",
        ])
        .addSkillBonuses([
          new SkillBonus("Tend and Protect – Available at Level 3", [
            "Shield amount of shield burst is increased 50%, from 400 to 600.",
          ]),
        ]),
    ];
  }
  static loadSkillTree(): SkillTree {
    let skillTree = new SkillTree();
    skillTree.tierOneSkills = [
      new Skill(
        11,
        1,
        "Onboard Diagnostics",
        "Your med kit now regenerates every 30 seconds. It also creates a healing area for you, your plants, and allies.",
        "/assets/characters/bugg/medpack_field.svg"
      ),
      new Skill(
        12,
        1,
        "Early Bloomers",
        "Seed pods do not have to be watered in order to be activated.",
        "/assets/characters/bugg/plant_self_water.svg"
      ),
      new Skill(
        13,
        1,
        "High pH Mixture",
        "Spray damage increased by 25% as DoT.",
        "/assets/characters/bugg/splash_upgrade.svg"
      ),
    ];
    skillTree.selectedTierOneSkill = skillTree.tierOneSkills[0];

    skillTree.tierTwoSkills = [
      new Skill(
        14,
        2,
        "Realigned Gyros",
        "Normal movement increases from 4.5 to 5.5 meters/second.",
        "/assets/characters/bugg/omni_move.svg"
      ),
    ];
    skillTree.selectedTierTwoSkill = skillTree.tierTwoSkills[0];

    skillTree.tierThreeSkills = [
      new Skill(
        15,
        3,
        "Tend and Protect",
        "Shield Burst amount increases by 50%.",
        "/assets/characters/bugg/shieldburst_upgrade.svg"
      ),
      new Skill(
        16,
        3,
        "Protective Husks",
        "Seed pods are spawned with overshields.",
        "/assets/characters/bugg/shielded_seeds.svg"
      ),
      new Skill(
        17,
        3,
        "Booming Blossoms",
        "Plants can be watered until they are overcharged, stunning nearby enemies.",
        "/assets/characters/bugg/plant_bomb.svg"
      ),
    ];
    skillTree.selectedTierThreeSkill = skillTree.tierThreeSkills[0];

    skillTree.tierFourSkills = [
      new Skill(
        18,
        4,
        "No-Weed Pesticide",
        "Crop Dust applies Vulnerability",
        "/assets/characters/bugg/cropdust_vuln.svg"
      ),
    ];
    skillTree.selectedTierFourSkill = skillTree.tierFourSkills[0];

    skillTree.tierFiveSkills = [
      new Skill(
        19,
        5,
        "High Grade Bio-Fuel",
        "Grants initial burst of speed when using Thrusters.",
        "/assets/characters/bugg/thruster_upgrade.svg"
      ),
      new Skill(
        20,
        5,
        "Daisy Chain",
        "Plant attacks can chain to one additional target.",
        "/assets/characters/bugg/plant_chain_lightning.svg"
      ),
    ];
    skillTree.selectedTierFiveSkill = skillTree.tierFiveSkills[0];

    return skillTree;
  }
}
