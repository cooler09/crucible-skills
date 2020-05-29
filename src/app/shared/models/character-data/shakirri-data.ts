import { Ability } from "../ability";
import { AbilityType } from "../ability-type.enum";
import { Skill } from "../skill";
import { SkillTree } from "../skill-tree";
import { AbilityInput } from "../ability-input.enum";
import { SkillBonus } from "../skill-bonus";

export default class ShakirriData {
  static loadAbilities(): Ability[] {
    return [
      new Ability(
        76,
        "STARLOCK ENERGY",
        "Pistol energy regenerates over time.",
        AbilityInput.PASSIVE,
        AbilityType.Utility,
        "/assets/characters/shakirri/duelist_passive.svg"
      ),
      new Ability(
        71,
        "SHOOT / SWING",
        "Pistol stance: Fire your pistol. Sword stance: Attack with your sword.",
        AbilityInput.LEFT_CLICK,
        AbilityType.Weapon,
        "/assets/characters/shakirri/duelist_pistol_fire.svg"
      ).setMultiAbility([
        new Ability(
          71,
          "SHOOT",
          "Fire your pistol.",
          AbilityInput.LEFT_CLICK,
          AbilityType.Weapon,
          "/assets/characters/shakirri/duelist_pistol_fire.svg"
        )
          .addDamage("55 (2x 110 crit)")
          .addRateOfFire("2.2 per second")
          .addDetails(
            "The starlock pistol fires from a pool of energy which constantly regenerates"
          )
          .addNotes([
            "Range – 250 m",
            "Damage Falloff Begins – 40 m",
            "Damage Falloff Ends – 100 m",
            "Energy Pool Size – 6, regenerates every 2.5 seconds",
          ])
          .addSkillBonuses([
            new SkillBonus("Starlock Capacitor – Available at Level 1", [
              "Pistol energy is increased from 6 to 8.",
            ]),
            new SkillBonus("Freezelock Pistol – Available at Level 3", [
              "Pistol shots slow opponents by 10% for 1.5 seconds, to a maximum of 30%.",
            ]),
          ]),
        new Ability(
          71,
          "Slash",
          "Slash two times, dealing damage with each swing.",
          AbilityInput.LEFT_CLICK,
          AbilityType.Weapon,
          "/assets/characters/shakirri/duelist_pistol_fire.svg"
        )
          .addDamage("65 per swing")
          .addRateOfFire("Two swings in 1.2 seconds")
          .addNotes(["Range – 3 m", "Slash Width – 0 – 4.6 m"])
          .addSkillBonuses([
            new SkillBonus("Extended Lunge – Available at Level 1", [
              "Sword range is increased by 25% for Slash and Disrupting Strike.",
            ]),
            new SkillBonus("Synergistic Blade – Available at Level 3", [
              "Your sword deals 3% extra damage for each pistol energy you have.",
            ]),
          ]),
      ]),
      new Ability(
        72,
        "DISRUPTING STRIKE / AIM DOWN SIGHTS",
        "In sword stance, unleash an energy wave that disrupts opponents. In pistol stance, hold to improve weapon accuracy.",
        AbilityInput.RIGHT_CLICK,
        AbilityType.Weapon,
        "/assets/characters/shakirri/duelist_disarming_strike.svg"
      ).setMultiAbility([
        new Ability(
          72,
          "DISRUPTING STRIKE",
          "A powerful long range wave attack that disrupts enemies.",
          AbilityInput.RIGHT_CLICK,
          AbilityType.Weapon,
          "/assets/characters/shakirri/duelist_disarming_strike.svg"
        )
          .addDetails(
            "Disrupting strike stops attacked enemy’s interact and abilities"
          )
          .addCooldown("14 seconds")
          .addDamage("80")
          .addNotes(["Range – 8 m", "Width – 3.5 m", "Silence – 1.5 seconds"])
          .addSkillBonuses([
            new SkillBonus("Extended Lunge – Available at Level 1", [
              "Sword range is increased by 25% for Slash and Disrupting Strike.",
            ]),
            new SkillBonus("Synergistic Blade – Available at Level 3", [
              "Your sword deals 3% extra damage for each pistol energy you have.",
            ]),
            new SkillBonus("Strike to the Heart – Available at Level 5", [
              "Disrupting Strike applies a power damage over time effect of 1500 damage over 3 minutes.",
            ]),
          ]),
        new Ability(
          72,
          "AIM DOWN SIGHTS",
          "Slows movement but greatly increases accuracy.",
          AbilityInput.RIGHT_CLICK,
          AbilityType.Weapon,
          "/assets/characters/shakirri/duelist_disarming_strike.svg"
        )
          .addDamage("55 (2x 110 crit)")
          .addDetails(
            "The starlock pistol fires from a pool of energy which constantly regenerates"
          )
          .addRateOfFire("2.2 per second")
          .addNotes(["Movement speed – 2.5 m/s"])
          .addSkillBonuses([
            new SkillBonus("Starlock Capacitor – Available at Level 1", [
              "Pistol energy is increased from 6 to 8.",
            ]),
            new SkillBonus("Freezelock Pistol – Available at Level 3", [
              "Pistol shots slow opponents by 10% for 1.5 seconds, to a maximum of 30%.",
            ]),
          ]),
      ]),
      new Ability(
        73,
        "WEAPON SWAP",
        "Toggle between sword and pistol as your primary weapon. Sword stance moves faster.",
        AbilityInput.LSHIFT,
        AbilityType.Utility,
        "/assets/characters/shakirri/duelist_weapon_swap_sword.svg"
      )
        .addCooldown("0.5 seconds")
        .addDetails("Sword stance moves faster."),
      new Ability(
        74,
        "HOLO-SHIELD",
        "Deploys a force shield that deflects projectiles and blocks melee attacks.",
        AbilityInput.E,
        AbilityType.Utility,
        "/assets/characters/shakirri/duelist_deflect.svg"
      )
        .addCooldown("6 seconds")
        .addDetails("Projectiles deflected return to where player is aiming")
        .addNotes(["Shield Duration – 2 seconds"])
        .addSkillBonuses([
          new SkillBonus("Shield of Honor – Available at Level 1", [
            "Your holo-shield width is extended to cover a wider area.",
          ]),
          new SkillBonus("Empowered Deflect – Available at Level 2", [
            "Deflected attacks deal 50% more damage.",
          ]),
        ]),
      new Ability(
        75,
        "FORCE DOME",
        "Creates dome that blocks enemy attacks and prevents enemies from crossing.",
        AbilityInput.Q,
        AbilityType.Utility,
        "/assets/characters/shakirri/duelist_bubble.svg"
      )
        .addCooldown("25 seconds")
        .addDetails(
          "Force dome blocks incoming enemy attacks and prevents enemies from leaving or entering"
        )
        .addNotes([
          "AoE Radius – 5 m",
          "Health – 800",
          "Shield Degeneration – 160 per second",
          "Duration – 5 seconds",
        ])
        .addSkillBonuses([
          new SkillBonus("Force Dome Overcharge – Available at Level 4", [
            "Force Dome lasts longer (7.5 seconds) and has more health (800 health).",
          ]),
          new SkillBonus("Restorative Dome – Available at Level 5", [
            "Force Dome heals you and allies inside it, for 10 health 4 times per second.",
          ]),
        ]),
    ];
  }
  static loadSkillTree(): SkillTree {
    let skillTree = new SkillTree();
    skillTree.tierOneSkills = [
      new Skill(
        71,
        1,
        "Extended Lunge",
        "Increases sword attack range by 25%.",
        "/assets/characters/shakirri/duelist_sword_range.svg"
      ),
      new Skill(
        72,
        1,
        "Starlock Capacitator",
        "Increases maximum pistol energy from 6 to 8 shots.",
        "/assets/characters/shakirri/duelist_pistol_energy.svg"
      ),
      new Skill(
        73,
        1,
        "Noble Shield",
        "Holo-Shield width increased.",
        "/assets/characters/shakirri/duelist_deflect_size.svg"
      ),
    ];
    skillTree.selectedTierOneSkill = skillTree.tierOneSkills[0];

    skillTree.tierTwoSkills = [
      new Skill(
        74,
        2,
        "Empowered Deflect",
        "Deflected shots inflict 50% more damage.",
        "/assets/characters/shakirri/duelist_deflect_damage.svg"
      ),
    ];
    skillTree.selectedTierTwoSkill = skillTree.tierTwoSkills[0];

    skillTree.tierThreeSkills = [
      new Skill(
        75,
        3,
        "Synergistic Blade",
        "Increases sword damage +3% for each remaining shot of pistol energy.",
        "/assets/characters/shakirri/duelist_energy_sword_damage.svg"
      ),
      new Skill(
        76,
        3,
        "Freezelock Pistol",
        "Pistol shots slow opponents by 10% for 1.5 seconds, to a maximum of 30%.",
        "/assets/characters/shakirri/duelist_freeze_pistol.svg"
      ),
      new Skill(
        77,
        3,
        "Healthy Gambit",
        "Abilities recharge +15% when health is above 70%.",
        "/assets/characters/shakirri/duelist_high_health.svg"
      ),
    ];
    skillTree.selectedTierThreeSkill = skillTree.tierThreeSkills[0];

    skillTree.tierFourSkills = [
      new Skill(
        78,
        4,
        "Force Dome Overcharge",
        "Force Dome's health and duraction increased by 50%.",
        "/assets/characters/shakirri/duelist_bubble_health.svg"
      ),
    ];
    skillTree.selectedTierFourSkill = skillTree.tierFourSkills[0];

    skillTree.tierFiveSkills = [
      new Skill(
        79,
        5,
        "Strike to the Heart",
        "Disrupting Strike inflicts 1500 damage over 3 minutes.",
        "/assets/characters/shakirri/duelist_disrupt_bleed.svg"
      ),
      new Skill(
        80,
        5,
        "Restoratice Dome",
        "Force Dome heals you and allies within it.",
        "/assets/characters/shakirri/duelist_heal_bubble.svg"
      ),
    ];
    skillTree.selectedTierFiveSkill = skillTree.tierFiveSkills[0];

    return skillTree;
  }
}
