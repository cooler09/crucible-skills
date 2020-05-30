import { Ability } from "../ability";
import { AbilityType } from "../ability-type.enum";
import { Skill } from "../skill";
import { SkillTree } from "../skill-tree";
import { AbilityInput } from "../ability-input.enum";
import { SkillBonus } from "../skill-bonus";

export default class ToscaData {
  static loadAbilities(): Ability[] {
    return [
      new Ability(
        96,
        "Works Well Under Pressure",
        "Interact with object in games faster.",
        AbilityInput.PASSIVE,
        AbilityType.Utility,
        "/assets/characters/tosca/inventor_interact_speed.svg"
      ),
      new Ability(
        91,
        "ACID SHOT",
        "Fires a scattershot of acid bullets.",
        AbilityInput.LEFT_CLICK,
        AbilityType.Weapon,
        "/assets/characters/tosca/inventor_primary.svg"
      )
        .addDamage(
          "Per pellet: 2 – 4 damage, and (7 – 14 damage over 12 seconds). 7 pellets per shot"
        )
        .addRateOfFire("2.6 per second")
        .addNotes([
          "Reload time of 2 seconds",
          "Max Range – 125 m",
          "Damage Falloff Starts – 18.75 m",
          "Damage Falloff Ends – 50 m",
          "Splash (AoE) Radius – 2 m",
        ])
        .addSkillBonuses([
          new SkillBonus("Rappi-Shot Stabilizer – Available at Level 3", [
            "Scattergun fire rate is increased from 2.6 per second to 3.1 per second. Weapon kick is decreased by 20%.",
          ]),
        ]),
      new Ability(
        92,
        "ADHESIVE ALPHA",
        "Throw explosive compound inflicting damage and slowing target.",
        AbilityInput.RIGHT_CLICK,
        AbilityType.Weapon,
        "/assets/characters/tosca/inventor_grenade.svg"
      )
        .addDamage("25 – 75 (75 on a direct hit)")
        .addCooldown("15 seconds")
        .addDetails("Adhesive alpha travels in a steep arc.")
        .addNotes([
          "Max Throw Distance – 31.3 m",
          "Projectile Lifetime – 10 seconds",
          "AoE Radius – 4 m",
          "Slows Enemies",
        ])
        .addSkillBonuses([
          new SkillBonus("Alpha Spill – Available at Level 3", [
            "Adhesive Alpha leaves behind an area lasting 8 seconds that damages enemies and slows their movement by 25% for 2 seconds. Applies 10 damage 4 times per second.",
          ]),
        ]),
      new Ability(
        93,
        "BLINK",
        "Short-range teleport in the direction of movement. Passes through obstacles.",
        AbilityInput.LSHIFT,
        AbilityType.Utility,
        "/assets/characters/tosca/inventor_blink.svg"
      )
        .addCooldown("4 seconds")
        .addDetails("Tosca can store two charges of Blink.")
        .addNotes(["Blink Distance – 12.5 m"])
        .addSkillBonuses([
          new SkillBonus("Blink Booster– Available at Level 1", [
            "Increase blink distance from 12.5 m to 15 m.",
          ]),
          new SkillBonus("Multi-charged Blink Vest – Available at Level 4", [
            "Number of blinks increases from 2 to 3.",
          ]),
          new SkillBonus("Explosive Teleport – Available at Level 5", [
            "Blinking leaves behind an explosion that detonates after a short delay, blinding enemies for 0.25 – 1.75 seconds. AoE radius is 6 m.",
          ]),
        ]),
      new Ability(
        94,
        "X-RAY GOGGLES",
        "Immediately detect all opponents within 50 meters in front of you.",
        AbilityInput.E,
        AbilityType.Utility,
        "/assets/characters/tosca/inventor_passive.svg"
      )
        .addCooldown("25 seconds")
        .addSkillBonuses([
          new SkillBonus("Z-Ray Lenses – Available at Level 3", [
            "X-ray vision range increases from 50 m to 65 m and becomes 360 degree vision.",
          ]),
        ]),
      new Ability(
        95,
        "ELECTRO-CLOUD",
        "Create a smoke screen which disrupts enemy detection and blocks line of sight.",
        AbilityInput.Q,
        AbilityType.Utility,
        "/assets/characters/tosca/inventor_smokescreen.svg"
      )
        .addCooldown("30 seconds")
        .addNotes(["AoE Radius – 10 m"])
        .addSkillBonuses([
          new SkillBonus("Isochronal Cloud – Available at Level 5", [
            "Number of Electro-Cloud charges increases from 1 to 3, but clouds are smaller. Decreases cooldown by 9 seconds.",
          ]),
        ]),
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
