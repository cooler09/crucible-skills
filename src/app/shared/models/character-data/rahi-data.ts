import { Ability } from "../ability";
import { AbilityType } from "../ability-type.enum";
import { Skill } from "../skill";
import { SkillTree } from "../skill-tree";
import { AbilityInput } from "../ability-input.enum";
import { SkillBonus } from "../skill-bonus";

export default class RahiData {
  static loadAbilities(): Ability[] {
    return [
      new Ability(
        55,
        "",
        "",
        AbilityInput.PASSIVE,
        AbilityType.Utility,
        ""
      ).setMultiAbility([
        new Ability(
          55,
          "Brother's Watchful Gaze",
          "When Brother is with Rahi, detects enemies that damage to Rahi. When Scouting Ahead, detects enemies in his LoS.",
          AbilityInput.PASSIVE,
          AbilityType.Utility,
          "/assets/characters/rahi/hero_bot_passive.svg"
        ),
        new Ability(
          55,
          "Brother's Shields",
          "Rahi has a 300 strength maximum capacity overshield.",
          AbilityInput.PASSIVE,
          AbilityType.Utility,
          "/assets/characters/rahi/hero_shield_passive.svg"
        ),
        new Ability(
          55,
          "Heroic Bound",
          "Hold to power up super jump when released.",
          AbilityInput.PASSIVE,
          AbilityType.Utility,
          "/assets/characters/rahi/hero_super_jump.svg"
        ),
      ]),
      new Ability(
        51,
        "SHOOT LASER BEAM",
        "Fires laser for piercing damage. Attack generates small amount of shields.",
        AbilityInput.LEFT_CLICK,
        AbilityType.Weapon,
        "/assets/characters/rahi/hero_primary.svg"
      )
        .addDamage("125 damage per second")
        .addRateOfFire("Continuous beam")
        .addNotes([
          "Range – 17 m",
          "Shield Generation – 15.125 shields per second",
          "Laz Beam has 5 seconds of firing time before needing to reset",
        ])
        .addSkillBonuses([
          new SkillBonus("Laser Precision – Available at Level 2", [
            "Rahi’s Laz Beam deals more damage the longer it remains connected to any target. Damage rate increases by 12.5% after 1.3 seconds, and an additional 25% (37.5 above base) after 2.6 seconds.",
          ]),
          new SkillBonus("Knuckleduster Charge-up – Available at Level 5", [
            "Laz Beam now generates additional shields, increasing the rate from 15.125 to 46.875 per second.",
          ]),
        ]),
      new Ability(
        52,
        "FORCE PUNCH",
        "Heavy melee attack. Drains personal shields to deal additional damage.",
        AbilityInput.RIGHT_CLICK,
        AbilityType.Weapon,
        "/assets/characters/rahi/hero_force_punch.svg"
      )
        .addDamage(
          "80 base damage. Deals an additional 1.3 damage per point of shield consumed, up to 100 shields (130 damage)"
        )
        .addCooldown("10 seconds")
        .addNotes(["Range – 6 m", "Width – 2 m"])
        .addSkillBonuses([
          new SkillBonus("Concussive Punch – Available at Level 1", [
            "Force Punch creates a projectile, increasing its range to 20 m.",
          ]),
          new SkillBonus("Pushing the Boundaries – Available at Level 3", [
            "Force Punch can spend up to 150 shields, increasing max damage output from 210 to 275.",
          ]),
        ]),

      new Ability(
        53,
        "",
        "",
        AbilityInput.LSHIFT,
        AbilityType.Utility,
        ""
      ).setMultiAbility([
        new Ability(
          53,
          "SCOUTING AHEAD",
          "Rahi sends Brother to a target location, gaining vision of that area.",
          AbilityInput.LSHIFT,
          AbilityType.Utility,
          "/assets/characters/rahi/hero_bot_teleport.svg"
        )
          .addCooldown("15 seconds")
          .addDetails(
            "Scouting Ahead disables the passive Brother’s Watchful Gaze"
          )
          .addNotes([
            "Max Range – Rahi can send Brother up to 90 m away horizontally, and 40 m vertically",
            "Scan Radius – 20 m",
          ]),
        new Ability(
          53,
          "TO THE RESCUE",
          "While Scouting ahead is active, tap again to have Rahi teleport to Brother's location.",
          AbilityInput.LSHIFT,
          AbilityType.Utility,
          "/assets/characters/rahi/hero_send_bot.svg"
        )
          .addCooldown("20 seconds")
          .addDetails(
            "Use the same button as Scouting Ahead to teleport to Brother’s location"
          )
          .addNotes(["Time to activate teleport – 2 seconds"])
          .addSkillBonuses([
            new SkillBonus("Save the Day! – Available at Level 5", [
              "When Rahi lands during To The Rescue, he knocks back nearby enemies within 4 m, dealing 50 damage and granting 100 shields to allies within 8 m.",
            ]),
          ]),
      ]),
      new Ability(
        54,
        "SHIELD OF JUSTICE",
        "Send projectile to shield allies, blinding enemies in path.",
        AbilityInput.E,
        AbilityType.Utility,
        "/assets/characters/rahi/hero_send_shield.svg"
      )
        .addDamage(
          "15 damage, can apply 4 times per second if target is within hit radius"
        )
        .addCooldown("15 seconds")
        .addNotes([
          "Range – 50 m",
          "Projectile Hit Radius – 4 m",
          "Projectile Max Speed – 9 m/s",
          "Projectile Lifetime – 4 seconds",
          "Shields – Grants 100 shields to allies, and degenerates at 10 shield per second",
        ])
        .addSkillBonuses([
          new SkillBonus("Justice for All – Available at Level 1", [
            "Shield of Justice duration increased from 4 to 6 seconds. It’s hit radius is increased from 4 m to 6 m, and max speed is increased from 9 m/s to 11 m/s.",
          ]),
          new SkillBonus("Shields up! – Available at Level 3", [
            "Shield of Justice grants allies 150 shields, increased from 100.",
          ]),
        ]),
      new Ability(
        55,
        "LAUGH IT OFF",
        "Gain personal shield which increases over time.",
        AbilityInput.Q,
        AbilityType.Utility,
        "/assets/characters/rahi/hero_shield_self.svg"
      )
        .addDamage(
          "15 damage, can apply 4 times per second if target is within hit radius"
        )
        .addCooldown("20 seconds")
        .addNotes([
          "Shields – Grants 100 shields on use, generates 100 shields per second while active",
          "Duration – 4 seconds",
          "Movement Speed – Slows Rahi’s movement speed to 3.5 m/s",
        ])
        .addSkillBonuses([
          new SkillBonus("All in the Timing – Available at Level 4", [
            "Laugh it Off movement speed is increased from 3.5 m/s to 4.5 m/s and shields granted are increased.",
          ]),
        ]),
    ];
  }
  static loadSkillTree(): SkillTree {
    let skillTree = new SkillTree();
    skillTree.tierOneSkills = [
      new Skill(
        51,
        1,
        "Continual Overshield",
        "Passive shield regeneration of 6 shields per second.",
        "/assets/characters/rahi/hero_shield_regen.svg"
      ),
      new Skill(
        52,
        1,
        "Justice for All",
        "Shield of Justice is larger and travels farther.",
        "/assets/characters/rahi/hero_improved_orb.svg"
      ),
      new Skill(
        53,
        1,
        "Concussive Punch",
        "Force Punch creates a projectile, increasing its range to 20 meters.",
        "/assets/characters/rahi/hero_punch_wave.svg"
      ),
    ];
    skillTree.selectedTierOneSkill = skillTree.tierOneSkills[0];

    skillTree.tierTwoSkills = [
      new Skill(
        54,
        2,
        "Laser Precision",
        "Knuckleduster deals more damage the longer it remains connected to any target.",
        "/assets/characters/rahi/hero_beam_focus.svg"
      ),
    ];
    skillTree.selectedTierTwoSkill = skillTree.tierTwoSkills[0];

    skillTree.tierThreeSkills = [
      new Skill(
        55,
        3,
        "Overshield Tune-up",
        "Brother's Shields maximum increased to 300.",
        "/assets/characters/rahi/hero_max_shield.svg"
      ),
      new Skill(
        56,
        3,
        "Shields up!",
        "Shield of Justice grants additional shields.",
        "/assets/characters/rahi/hero_shielding_ratio.svg"
      ),
      new Skill(
        57,
        3,
        "Pushing the Boundaries",
        "Force Punch can expend up to 150 shields, increasing damage output to a maximum of 300.",
        "/assets/characters/rahi/hero_punch_big.svg"
      ),
    ];
    skillTree.selectedTierThreeSkill = skillTree.tierThreeSkills[0];

    skillTree.tierFourSkills = [
      new Skill(
        58,
        4,
        "All in the Timing",
        "Laugh It Off movement speed and shields granted are increased.",
        "/assets/characters/rahi/hero_laugh_speed.svg"
      ),
    ];
    skillTree.selectedTierFourSkill = skillTree.tierFourSkills[0];

    skillTree.tierFiveSkills = [
      new Skill(
        59,
        5,
        "Knuckleduster Charge-up",
        "Knuckleduster Laser Beam hits now generates additional shields.",
        "/assets/characters/rahi/hero_beam_shield.svg"
      ),
      new Skill(
        60,
        5,
        "Save the Day!",
        "When Rahi lands during To the Rescue, he knocks back nearby enemies and grants nearby allies 150 strength shields.",
        "/assets/characters/rahi/hero_teleport_shield.svg"
      ),
    ];
    skillTree.selectedTierFiveSkill = skillTree.tierFiveSkills[0];

    return skillTree;
  }
}
