import { Ability } from "../ability";
import { AbilityType } from "../ability-type.enum";
import { Skill } from "../skill";
import { SkillTree } from "../skill-tree";
import { AbilityInput } from "../ability-input.enum";
import { SkillBonus } from "../skill-bonus";

export default class SummerData {
  static loadAbilities(): Ability[] {
    return [
      new Ability(
        86,
        "Heat",
        "Abilities generate heat. If overheated, abilities shut down for 5 seconds.",
        AbilityInput.PASSIVE,
        AbilityType.Utility,
        "/assets/characters/summer/pyro_passive.svg"
      ),
      new Ability(
        81,
        "FLAMETHROWERS",
        "Fires a continuous cone of flame. Enemies do not block line of fire. Generates heat. Abilities shut down when overheated.",
        AbilityInput.LEFT_CLICK,
        AbilityType.Weapon,
        "/assets/characters/summer/pyro_primary.svg"
      )
        .addDamage("6 – 10 per hit")
        .addRateOfFire("15.6 hits per second (94 - 156 per second)")
        .addNotes([
          "Range – 12 m",
          "Damage Falloff Begins – 4 m",
          "Damage Falloff Ends – 12 m",
        ])
        .addSkillBonuses([
          new SkillBonus("Flame Projectors – Available at Level 1", [
            "Flamethrower range is increased by 50%.",
          ]),
          new SkillBonus("Refinery Blast – Available at Level 1", [
            "Creatures hit with flamethrowers periodically drop bonus essence. Gives 25 essence for every 150 damage dealt.",
            "Spitter – 400 HP, 75 bonus essence",
            "Stompers – 750 HP, 125 bonus essence",
            "Lurker – 300 HP, 50 bonus essence",
            "Hive – 5000 HP, 875 bonus essence",
          ]),
          new SkillBonus("Acetylene Torch – Available at Level 2", [
            "Flamethrowers inflict 40% more damage when your heat is above 50%.",
          ]),
        ]),
      new Ability(
        82,
        "FIREBALL",
        "Fires a long-range fireball that explodes on impact. Generates heat.",
        AbilityInput.RIGHT_CLICK,
        AbilityType.Weapon,
        "/assets/characters/summer/pyro_jumpjets.svg"
      )
        .addHeatGenerated("100")
        .addDamage("8 – 20 (48 – 120 DoT)")
        .addDetails(
          "Deals both direct damage and applies damage over time over 15 seconds"
        )
        .addNotes([
          "Max Range – 50 m",
          "Fireball Lifetime – 6 seconds",
          "AoE Radius – 5 m",
        ])
        .addSkillBonuses([
          new SkillBonus("Incendiary Shot – Available at Level 3", [
            "Fireball leaves behind a burning area for 4 seconds.",
          ]),
        ]),
      new Ability(
        83,
        "FIREPULSE THRUSTERS",
        "Jump up and forward. Generates heat.",
        AbilityInput.LSHIFT,
        AbilityType.Utility,
        "/assets/characters/summer/pyro_eruption.svg"
      )
        .addHeatGenerated("100")
        .addSkillBonuses([
          new SkillBonus("Thruster Pounce – Available at Level 1", [
            "Summer can jump after using Firepulse to perform an explosive pounce.",
          ]),
        ]),
      new Ability(
        84,
        "IGNITION SPARK",
        "Creates a blast that knocks you and opponents back. Generates heat.",
        AbilityInput.E,
        AbilityType.Weapon,
        "/assets/characters/summer/pyro_air_blast.svg"
      )
        .addHeatGenerated("100")
        .addDamage("40 – 100")
        .addNotes(["AoE Radius – 1 m"])
        .addSkillBonuses([
          new SkillBonus("Tuned Spark Coils – Available at Level 3", [
            "Ignition Spark knocks enemies back further and deflects projectiles.",
          ]),
        ]),
      new Ability(
        85,
        "MAGMA SPIRAL",
        "Creates circular pattern of flaming magma. Generates heat.",
        AbilityInput.Q,
        AbilityType.Weapon,
        "/assets/characters/summer/pyro_fireball.svg"
      )
        .addHeatGenerated("100")
        .addDamage(
          "Projectiles: 25 damage (40-125 DoT). AoE: 25 damage every 4.5 seconds"
        )
        .addDetails(
          "Projectiles deal direct damage and apply damage over time over 15 seconds"
        )
        .addNotes([
          "Duration: 2 seconds",
          "Fires 2-4 projectiles, 4 times during ability duration",
          "Projectiles pass through characters, dealing damage and creating burning zone on the ground",
          "Projectiles that hit a barrier will damage the barrier, but don’t create a burning zone",
        ])
        .addSkillBonuses([
          new SkillBonus("Magma Swarm – Available at Level 3", [
            "Magma spiral creates 50% more flame projectiles. Areas deal 20% more damage.",
          ]),
        ]),
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
