import { Ability } from "../ability";
import { AbilityType } from "../ability-type.enum";
import { Skill } from "../skill";
import { SkillTree } from "../skill-tree";

export default class ToscaData {
  static loadAbilities(): Ability[] {
    return [
      new Ability(
        96,
        "Works Well Under Pressure",
        "Interact with object in games faster.",
        AbilityType.PASSIVE,
        "/assets/characters/tosca/inventor_interact_speed.svg",
        false,
        [],
        [],
        []
      ),
      new Ability(
        91,
        "FIRE",
        "Fires a scattershot of acid bullets.",
        AbilityType.LEFT_CLICK,
        "/assets/characters/tosca/inventor_primary.svg",
        false,
        [],
        [],
        []
      ),
      new Ability(
        92,
        "ADHESIVE ALPHA",
        "Throw explosive compound inflicting damage and slowing target.",
        AbilityType.RIGHT_CLICK,
        "/assets/characters/tosca/inventor_grenade.svg",
        false,
        [],
        [],
        []
      ),
      new Ability(
        93,
        "BLINK",
        "Short-range teleport in the direction of movement. Passes through obstacles.",
        AbilityType.LSHIFT,
        "/assets/characters/tosca/inventor_blink.svg",
        false,
        [],
        [],
        []
      ),
      new Ability(
        94,
        "X-RAY GOGGLES",
        "Immediately detect all opponents within 50 meters in front of you.",
        AbilityType.E,
        "/assets/characters/tosca/inventor_passive.svg",
        false,
        [],
        [],
        []
      ),
      new Ability(
        95,
        "ELECTRO-CLOUD",
        "Create a smoke screen which disrupts enemy detection and blocks line of sight.",
        AbilityType.Q,
        "/assets/characters/tosca/inventor_smokescreen.svg",
        false,
        [],
        [],
        []
      ),
    ];
  }
  static loadSkillTree(): SkillTree {
    let skillTree = new SkillTree();
    skillTree.tierOneSkills = [
      new Skill(
        91,
        1,
        "Smuggler's Compartment",
        "Increases starting med kits from 1 to 3. Maximum med kit capacity increases from 3 to 5.",
        "/assets/characters/tosca/med_kit_capacity.svg"
      ),
      new Skill(
        92,
        1,
        "Blink Booster",
        "Increases Blink distance from 12.5 to 15 meters.",
        "/assets/characters/tosca/blink_distance.svg"
      ),
      new Skill(
        93,
        1,
        "Finish Them!",
        "Your melee attack transforms up to 80 DoT to immediate damage.",
        "/assets/characters/tosca/melee_dot_consume.svg"
      ),
    ];
    skillTree.selectedTierOneSkill = skillTree.tierOneSkills[0];

    skillTree.tierTwoSkills = [
      new Skill(
        94,
        2,
        "Medical Mastery",
        "Decreases med kit activation time from 4 to 3.2 seconds.",
        "/assets/characters/tosca/heal_speed.svg"
      ),
    ];
    skillTree.selectedTierTwoSkill = skillTree.tierTwoSkills[0];

    skillTree.tierThreeSkills = [
      new Skill(
        95,
        3,
        "Rappi-Shot Stabilizer",
        "Scattergun fire rate increases +10%. Kick is reduced 20%.",
        "/assets/characters/tosca/scattergun_fire_rate.svg"
      ),
      new Skill(
        96,
        3,
        "Z-Ray Lenses",
        "X-Ray Goggles range increases to 65 meters and affects 360 degrees.",
        "/assets/characters/tosca/x-ray_range.svg"
      ),
      new Skill(
        97,
        3,
        "Alpha Spill",
        "Adhesive Alpha creates an AoE for 8 seconds that damages and slows enemies by 25% for 2 seconds.",
        "/assets/characters/tosca/sticky_area.svg"
      ),
    ];
    skillTree.selectedTierThreeSkill = skillTree.tierThreeSkills[0];

    skillTree.tierFourSkills = [
      new Skill(
        98,
        4,
        "Multi-Charged Blinkvest",
        "Number of Blinks increases from 2 to 3.",
        "/assets/characters/tosca/extra_blink.svg"
      ),
    ];
    skillTree.selectedTierFourSkill = skillTree.tierFourSkills[0];

    skillTree.tierFiveSkills = [
      new Skill(
        99,
        5,
        "Explosive Teleport",
        "Blinking leaves behind a bomb that detonates after 1 second, blinding enemies.",
        "/assets/characters/tosca/explosive_teleport.svg"
      ),
      new Skill(
        100,
        5,
        "Isochronal Cloud",
        "Number of Electro-Cloud charges increase from 1 to 3. Clouds will be smaller. Decreases cooldown by 9 seconds.",
        "/assets/characters/tosca/smoke_trail.svg"
      ),
    ];
    skillTree.selectedTierFiveSkill = skillTree.tierFiveSkills[0];

    return skillTree;
  }
}
