import { Ability } from "../ability";
import { AbilityType } from "../ability-type.enum";
import { Skill } from "../skill";
import { SkillTree } from "../skill-tree";

export default class BuggData {
  static loadAbilities(): Ability[] {
    return [
      new Ability(
        16,
        "Anti-Grav",
        "Move the same speed in all directions, regardless of facing.",
        AbilityType.Q,
        "/assets/characters/bugg/robotanist_passive.svg"
      ),
      new Ability(
        11,
        "SPRAY",
        "Damages opponents and activates seed pods.",
        AbilityType.LEFT_CLICK,
        "/assets/characters/bugg/robotanist_primary.svg"
      ),
      new Ability(
        12,
        "SEED POD",
        "Fires a seed pod that can be activated by spraying.",
        AbilityType.RIGHT_CLICK,
        "/assets/characters/bugg/robotanist_thrusters.svg"
      ),
      new Ability(
        13,
        "THRUSTERS",
        "Thrusters propel you forward and vertically.",
        AbilityType.LSHIFT,
        "/assets/characters/bugg/robotanist_shield_burst.svg"
      ),
      new Ability(
        14,
        "CROP DUST",
        "Creates a slowing, damaging, area of effect beneath you.",
        AbilityType.E,
        "/assets/characters/bugg/robotanist_crop_dust.svg"
      ),
      new Ability(
        15,
        "SHIELD BURST",
        "You, your seed pods, your plants, and nearby allies gain a temporary overshield.",
        AbilityType.Q,
        "/assets/characters/bugg/robotanist_seed_pod.svg"
      ),
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
