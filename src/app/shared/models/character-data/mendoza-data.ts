import { Ability } from "../ability";
import { AbilityType } from "../ability-type.enum";
import { Skill } from "../skill";
import { SkillTree } from "../skill-tree";

export default class MendozaData {
  static loadAbilities(): Ability[] {
    return [
      new Ability(
        41,
        "FIRE",
        "Fires rapid shots from pulse rifle.",
        AbilityType.LEFT_CLICK,
        "/assets/characters/mendoza/marine_primary.svg"
      ),
      new Ability(
        42,
        "AIM DOWN SIGHTS",
        "Hold to improve rifle accuracy. Slows movement.",
        AbilityType.RIGHT_CLICK,
        "/assets/characters/mendoza/marine_ads.svg"
      ),
      new Ability(
        43,
        "SPRINT",
        "Tap or hold down to move faster.",
        AbilityType.LSHIFT,
        "/assets/characters/mendoza/marine_sprint.svg"
      ),
      new Ability(
        44,
        "FLASH GRENADE",
        "Throws flash grenade which blinds enemies.",
        AbilityType.E,
        "/assets/characters/mendoza/marine_grenade.svg"
      ),
      new Ability(
        45,
        "SUPPLY DROP",
        "Calls down a med kit and bunker. Bunker knocks back opponents on landing.",
        AbilityType.Q,
        "/assets/characters/mendoza/marine_bunker.svg"
      ),
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
