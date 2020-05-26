import { Ability } from "../ability";
import { AbilityType } from "../ability-type.enum";
import { Skill } from "../skill";
import { SkillTree } from "../skill-tree";

export default class SummerData {
  static loadAbilities(): Ability[] {
    return [
      new Ability(
        86,
        "Heat",
        "Abilities generate heat. If overheated, abilities shut down for 5 seconds.",
        AbilityType.PASSIVE,
        "/assets/characters/summer/pyro_passive.svg",
        false,
        [],
        [],
        []
      ),
      new Ability(
        81,
        "FLAMETHROWERS",
        "Fires a continuous cone of flame. Enemies do not block line of fire. Generates heat. Abilities shut down when overheated.",
        AbilityType.LEFT_CLICK,
        "/assets/characters/summer/pyro_primary.svg",
        false,
        [],
        [],
        []
      ),
      new Ability(
        82,
        "FIREBALL",
        "Fires a long-range fireball that explodes on impact. Generates heat.",
        AbilityType.RIGHT_CLICK,
        "/assets/characters/summer/pyro_jumpjets.svg",
        false,
        [],
        [],
        []
      ),
      new Ability(
        83,
        "FIREPULSE THRUSTERS",
        "Jump up and forward. Generates heat.",
        AbilityType.LSHIFT,
        "/assets/characters/summer/pyro_eruption.svg",
        false,
        [],
        [],
        []
      ),
      new Ability(
        84,
        "IGNITION SPARK",
        "Creates a blast that knocks you and opponents back. Generates heat.",
        AbilityType.E,
        "/assets/characters/summer/pyro_air_blast.svg",
        false,
        [],
        [],
        []
      ),
      new Ability(
        85,
        "MAGMA SPIRAL",
        "Creates circular pattern of flaming magma. Generates heat.",
        AbilityType.Q,
        "/assets/characters/summer/pyro_fireball.svg",
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
        81,
        1,
        "Flame Projectors",
        "Flamethrower range increased by 50%.",
        "/assets/characters/summer/primary_extended_range.svg"
      ),
      new Skill(
        82,
        1,
        "Refinery Blast",
        "Creatures struck by flamethrowers drop essence as the take damage.",
        "/assets/characters/summer/primary_bonus_essence.svg"
      ),
      new Skill(
        83,
        1,
        "Thruster Pounce",
        "Jump while using Firepulse Thrusters to drop on opponents, damaging them and knocking them back.",
        "/assets/characters/summer/jumpjet_aoe.svg"
      ),
    ];
    skillTree.selectedTierOneSkill = skillTree.tierOneSkills[0];

    skillTree.tierTwoSkills = [
      new Skill(
        84,
        2,
        "Acetylene Torch",
        "Flamethrowers inflict +40% damage when heat gauge is over 50%.",
        "/assets/characters/summer/primary_blue_flame.svg"
      ),
    ];
    skillTree.selectedTierTwoSkill = skillTree.tierTwoSkills[0];

    skillTree.tierThreeSkills = [
      new Skill(
        85,
        3,
        "Incendiary Shot",
        "Fireballs leave behind a burning area for 4 seconds.",
        "/assets/characters/summer/fireball_aoe.svg"
      ),
      new Skill(
        86,
        3,
        "Magma Swarm",
        "Magma Spiral creates 50% more flame projectiles and increases damage by 20%.",
        "/assets/characters/summer/spiral_duration.svg"
      ),
      new Skill(
        87,
        3,
        "Tuned Spark Coils",
        "Ignition Spark knocks back +50% and deflect projectiles.",
        "/assets/characters/summer/air_blast_deflect.svg"
      ),
    ];
    skillTree.selectedTierThreeSkill = skillTree.tierThreeSkills[0];

    skillTree.tierFourSkills = [
      new Skill(
        88,
        4,
        "Cooldown Protocol",
        "Time to recover from overheat is decreased from 5 to 4 seconds.",
        "/assets/characters/summer/overheat_duration.svg"
      ),
    ];
    skillTree.selectedTierFourSkill = skillTree.tierFourSkills[0];

    skillTree.tierFiveSkills = [
      new Skill(
        89,
        5,
        "Goes to Eleven",
        "Maximum heat increased from 225 to 275.",
        "/assets/characters/summer/heat_upgrade.svg"
      ),
      new Skill(
        90,
        5,
        "Ready to Rock!",
        "Quick melee delivers 2 attacks for 40 damage and 40 DoT each when overheated.",
        "/assets/characters/summer/overheat_fists.svg"
      ),
    ];
    skillTree.selectedTierFiveSkill = skillTree.tierFiveSkills[0];

    return skillTree;
  }
}
