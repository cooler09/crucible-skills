import { Ability } from "../ability";
import { AbilityType } from "../ability-type.enum";
import { Skill } from "../skill";
import { SkillTree } from "../skill-tree";
import { AbilityInput } from "../ability-input.enum";
import { SkillBonus } from "../skill-bonus";

export default class DrakahlData {
  static loadAbilities(): Ability[] {
    return [
      new Ability(
        26,
        "Jink",
        "Jet quickly in your current direction.",
        AbilityInput.PASSIVE,
        AbilityType.Utility,
        "/assets/characters/drakahl/fighter_air_dash.svg"
      ),
      new Ability(
        21,
        "CHOP",
        "Strike with vibron axe.",
        AbilityInput.LEFT_CLICK,
        AbilityType.Weapon,
        "/assets/characters/drakahl/fighter_primary.svg"
      )
        .addDetails("Drakahl swings his vibron axe in a 4 part sequence.")
        .addRateOfFire("1.25 swings per second")
        .addDamage("85 damage")
        .addNotes(["Range – 3.5 m", "Width – 1.5 – 6 m"])
        .addSkillBonuses([
          new SkillBonus("Maiming Blow – Available at Level 1", [
            "Chop applies a DoT to targets under 50% health. Damage applied is 25 damage over 5 seconds.",
          ]),
          new SkillBonus("Second Wind – Available at Level 1", [
            "Chop attacks that hit reduce the cooldown of your Rush (1 second per successful hit).",
          ]),
        ]),
      new Ability(
        22,
        "SONIC PULSE",
        "Fire Sonic Pulse from vibron axe.",
        AbilityInput.RIGHT_CLICK,
        AbilityType.Weapon,
        "/assets/characters/drakahl/fighter_quiver_strike.svg"
      )
        .addCooldown("4 seconds")
        .addDamage("100 damage")
        .addNotes(["Max Range – 200 m", "Projectile Speed – 50 m/s"])
        .addSkillBonuses([
          new SkillBonus("Incoming! – Available at Level 3", [
            "Sonic Pulse destroys projectiles it comes into contact with.",
          ]),
          new SkillBonus("Sonic Shock – Available at Level 5", [
            "Sonic Pulse slows targets for 25% for 3 seconds.",
          ]),
        ]),
      new Ability(
        23,
        "RUSH",
        "Dash in the direction your camera is facing.",
        AbilityInput.LSHIFT,
        AbilityType.Utility,
        "/assets/characters/drakahl/fighter_rush.svg"
      ).addNotes(["Duration – 0.5 seconds"]),
      new Ability(
        24,
        "",
        "",
        AbilityInput.E,
        AbilityType.PowerUp,
        "/assets/characters/drakahl/fighter_resonate.svg"
      ).setMultiAbility([
        new Ability(
          24,
          "RESONATING SPIN",
          "Your axe hums with power. Choose between a spinning damage over time area attack or a stunning area attack.",
          AbilityInput.E,
          AbilityType.Weapon,
          "/assets/characters/drakahl/fighter_resonate.svg"
        )
          .addDamage(
            "8 Spins. Each spin deals 20 direct damage, and 30 damage over 10 seconds"
          )
          .addDetails("A spinning attack that bleeds enemies.")
          .addCooldown("12 seconds")
          .addNotes(["Duration – 2.5 seconds", "AoE Radius – 4 m"]),
        new Ability(
          24,
          "RESONATING QUAKE",
          "Your axe hums with power. Choose between a spinning damage over time area attack or a stunning area attack.",
          AbilityInput.E,
          AbilityType.Weapon,
          "/assets/characters/drakahl/fighter_resonate.svg"
        )
          .addCooldown("12 seconds")
          .addDetails(
            "Create a 360° ground shockwave in the area around you that stuns enemies."
          )
          .addDamage("25 – 50 damage")
          .addNotes([
            "Duration – 2.5 seconds",
            "AoE Radius – 5 m",
            "Stun Duration – 1.25 seconds",
          ]),
      ]),
      new Ability(
        25,
        "ENRAGED ROAR",
        "You become enraged. Choose between a life-stealing claw attack or a ranged grab attack.",
        AbilityInput.Q,
        AbilityType.PowerUp,
        "/assets/characters/drakahl/fighter_roar.svg"
      ).setMultiAbility([
        new Ability(
          25,
          "ENRAGED CLAW",
          "You become enraged. Choose between a life-stealing claw attack or a ranged grab attack.",
          AbilityInput.Q,
          AbilityType.Weapon,
          "/assets/characters/drakahl/fighter_roar.svg"
        )
          .addDetails(
            "Claw attack that grants a large heal on each successful attack."
          )
          .addCooldown("12 seconds")
          .addDamage("60 damage")
          .addNotes([
            "Range – 4.25 m",
            "Width – 2.5 m",
            "Duration – 2.5 seconds",
            "Healing – Enraged Claw grants healing based on the target attacked. Each individual heal is applied over 8 seconds.",
            "Heals 240 health vs players",
            "Heals 160 health vs creatures",
            "Heals 80 health vs plants",
          ])
          .addSkillBonuses([
            new SkillBonus("Abs of Plasteel – Available at Level 5", [
              "Enraged Roar makes you invulnerable for 1.5 seconds.",
            ]),
          ]),
        new Ability(
          25,
          "ENRAGED GRAB",
          "You become enraged. Choose between a life-stealing claw attack or a ranged grab attack.",
          AbilityInput.Q,
          AbilityType.Weapon,
          "/assets/characters/drakahl/fighter_roar.svg"
        )
          .addDamage("50 damage")
          .addCooldown("12 seconds")
          .addDetails("Short-range projectile that pulls one enemy to Drakahl.")
          .addNotes([
            "Range – 20 m",
            "Projectile Speed – 80 m/s",
            "Applies a 1 second silence on hit, before pull begins",
          ])
          .addSkillBonuses([
            new SkillBonus("Abs of Plasteel – Available at Level 5", [
              "Enraged Roar makes you invulnerable for 1.5 seconds.",
            ]),
          ]),
      ]),
    ];
  }
  static loadSkillTree(): SkillTree {
    let skillTree = new SkillTree();
    skillTree.tierOneSkills = [
      new Skill(
        21,
        1,
        "Second Wind",
        "Successful Chop attacks reduce the cooldown of your Rush by 1 second.",
        "/assets/characters/drakahl/rush_cooldown.svg"
      ),
      new Skill(
        22,
        1,
        "Maiming Blow",
        "Chop inflicts DoT against targets with <50% health.",
        "/assets/characters/drakahl/axe_bleed.svg"
      ),
      new Skill(
        23,
        1,
        "Get 'em Gutted",
        "Quick Melee causes Vulnerability for 3 seconds.",
        "/assets/characters/drakahl/quick_melee_vuln.svg"
      ),
    ];
    skillTree.selectedTierOneSkill = skillTree.tierOneSkills[0];

    skillTree.tierTwoSkills = [
      new Skill(
        24,
        2,
        "Tough It Out",
        "25% incoming normal damage to you becomes DoT.",
        "/assets/characters/drakahl/damage_dot_convert.svg"
      ),
    ];
    skillTree.selectedTierTwoSkill = skillTree.tierTwoSkills[0];

    skillTree.tierThreeSkills = [
      new Skill(
        25,
        3,
        "OK, Now I'm Mad",
        "Damage multiplier +15% when below 50% health.",
        "/assets/characters/drakahl/low_hp_damage.svg"
      ),
      new Skill(
        26,
        3,
        "Blood Tracker",
        "You detect targets with DoT within 80 meters.",
        "/assets/characters/drakahl/dot_detect.svg"
      ),
      new Skill(
        27,
        3,
        "Incoming!",
        "Sonic Pulse destroys enemy projectiles.",
        "/assets/characters/drakahl/quiver_strike_destroy.svg"
      ),
    ];
    skillTree.selectedTierThreeSkill = skillTree.tierThreeSkills[0];

    skillTree.tierFourSkills = [
      new Skill(
        28,
        4,
        "Push Through the Pain",
        "Damage does not interrupt med kit use.",
        "/assets/characters/drakahl/no_interrupt_heal.svg"
      ),
    ];
    skillTree.selectedTierFourSkill = skillTree.tierFourSkills[0];

    skillTree.tierFiveSkills = [
      new Skill(
        29,
        5,
        "Abs Of Plasteel",
        "Enraged makes you invulnerable for 1.5 seconds.",
        "/assets/characters/drakahl/frenzy_invuln.svg"
      ),
      new Skill(
        30,
        5,
        "Sonic Shock",
        "Sonic Pulse slows targets by 25% for 3 seconds.",
        "/assets/characters/drakahl/quiver_snare.svg"
      ),
    ];
    skillTree.selectedTierFiveSkill = skillTree.tierFiveSkills[0];

    return skillTree;
  }
}
