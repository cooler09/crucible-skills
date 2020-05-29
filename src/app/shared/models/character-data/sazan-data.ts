import { Ability } from "../ability";
import { AbilityType } from "../ability-type.enum";
import { Skill } from "../skill";
import { SkillTree } from "../skill-tree";
import { AbilityInput } from "../ability-input.enum";
import { SkillBonus } from "../skill-bonus";

export default class SazanData {
  static loadAbilities(): Ability[] {
    return [
      new Ability(
        66,
        "GUERRILLA WARFARE",
        "Move faster when crouching, including when in detect mode and when using med kits.",
        AbilityInput.PASSIVE,
        AbilityType.Utility,
        "/assets/characters/sazan/commando_passive.svg"
      ),
      new Ability(
        61,
        "ATTACK",
        "Attack with equipped weapon.",
        AbilityInput.LEFT_CLICK,
        AbilityType.Weapon,
        "/assets/characters/sazan/commando_primary.svg"
      ).setMultiAbility([
        new Ability(
          61,
          "Throw Electroknife",
          "Throws a knife, inflicting a heavy but slow DoT.",
          AbilityInput.LEFT_CLICK,
          AbilityType.Weapon,
          "/assets/characters/sazan/commando_primary.svg"
        )
          .addDamage(
            "30 direct damage (2x crit – 60). Applies DoT of 210 (over 20 seconds)"
          )
          .addDetails(
            "Electroknife cannot reload, energy is when the weapon is equipped. Electroknife travels in a noticeable arc."
          )
          .addNotes([
            "Energy Capacity – 1 knife",
            "Max Range – 156 m",
            "Projectile Speed – 70 m/s",
            "Projectile Lifetime – 10 seconds",
          ])
          .addSkillBonuses([
            new SkillBonus("Stalker’s Knife – Available at Level 1", [
              "Sazan’s Electroknife tracks targets within 25 m of where it hits.",
            ]),
            new SkillBonus("Fully Engaged – Available at Level 2", [
              "Equipping Electroknife confers a 1 second cloak.",
            ]),
          ]),
        new Ability(
          61,
          "Fire Shotgun",
          "Fires a single blast of energy pellets.",
          AbilityInput.LEFT_CLICK,
          AbilityType.Weapon,
          "/assets/characters/sazan/commando_primary.svg"
        )
          .addRateOfFire("1.5 per second")
          .addDamage("9 damage per pellet (2x crit – 18). 7 pellets per shot")
          .addDetails(
            "Shotgun cannot reload, energy is when the weapon is equipped"
          )
          .addNotes([
            "Energy Capacity – 3 rounds",
            "Range – 150 m",
            "Damage Falloff Starts – 7.8 m",
            "Damage Falloff Ends – 30 m",
            "Projectile Speed – 780 m/s",
          ])
          .addSkillBonuses([
            new SkillBonus("Fully Engaged – Available at Level 2", [
              "Equipping Shotgun confers a 33% speed boost for 3.25 seconds.",
            ]),
            new SkillBonus("Full Blast Shot – Available at Level 3", [
              "Your Shotgun is now more accurate and knocks targets back. Pellet spread is reduced by 50%.",
            ]),
          ]),
        new Ability(
          61,
          "Fire Inertia Gun",
          "Fires mid-range, low damage rounds that slow enemies.",
          AbilityInput.LEFT_CLICK,
          AbilityType.Weapon,
          "/assets/characters/sazan/commando_primary.svg"
        )
          .addRateOfFire("5 per second")
          .addDamage("8 damage (2x crit - 16)")
          .addDetails(
            "Inertia Gun cannot reload, energy is when the weapon is equipped"
          )
          .addNotes([
            "Energy Capacity – 18 rounds",
            "Max Distance – 240 m",
            "Damage Falloff Starts – 30 m",
            "Damage Falloff Ends – 90 m",
            "Projectile Speed – 300 m/s",
            "Slow Effect – 5% per hit up to 25%",
          ])
          .addSkillBonuses([
            new SkillBonus("Fully Engaged – Available at Level 2", [
              "Equipping Inertia Gun confers a 150 shields, which degenerates over 5 seconds.",
            ]),
            new SkillBonus("Disruptor Charge – Available at Level 5", [
              "Inertia gun silences enemies for 0.5 seconds with its first shot.",
            ]),
          ]),
      ]),
      new Ability(
        62,
        "ELECTROKNIFE",
        "Equip electroknife, which applies a long-lasting DoT upon hit. Recharges weapon energy.",
        AbilityInput.RIGHT_CLICK,
        AbilityType.WeaponSwap,
        "/assets/characters/sazan/commando_knifeswap.svg"
      ).addCooldown("6 seconds"),
      new Ability(
        63,
        "JET-DASH",
        "Dash in the direction of movement.",
        AbilityInput.LSHIFT,
        AbilityType.Utility,
        "/assets/characters/sazan/commando_dash.svg"
      )
        .addCooldown("3 seconds")
        .addSkillBonuses([
          new SkillBonus("Cut and Run – Available at Level 3", [
            "Sazan applies damage to targets she touches while dashing. 60 direct damage is applied, and 60 DoT is applied, over 4 seconds.",
          ]),
          new SkillBonus("Go the Extra Mile – Available at Level 4", [
            "Jet-Dash has 2 charges",
          ]),
        ]),
      new Ability(
        64,
        "SHOTGUN",
        "Equip shotgun, which fires a powerful short-range burst. Recharges weapon energy.",
        AbilityInput.E,
        AbilityType.WeaponSwap,
        "/assets/characters/sazan/commando_shotgunswap.svg"
      ).addCooldown("6 seconds"),
      new Ability(
        65,
        "INERTIA GUN",
        "Equip inertia gun, which applies a stacking slow effect upon hit. Recharges weapon energy.",
        AbilityInput.Q,
        AbilityType.WeaponSwap,
        "/assets/characters/sazan/commando_inertiagunswap.svg"
      ).addCooldown("6 seconds"),
    ];
  }
  static loadSkillTree(): SkillTree {
    let skillTree = new SkillTree();
    skillTree.tierOneSkills = [
      new Skill(
        61,
        1,
        "Restorative Exchange",
        "Swapping weapons heals 20 health.",
        "/assets/characters/sazan/swap_heal.svg"
      ),
      new Skill(
        62,
        1,
        "Stalker's Knife",
        "Electroknife defects targets within 25 meters on impact.",
        "/assets/characters/sazan/knife_tracking.svg"
      ),
      new Skill(
        63,
        1,
        "Taking Cover",
        "Completing interaction or using a med kit cloaks for 5 seconds.",
        "/assets/characters/sazan/tech_camo.svg"
      ),
    ];
    skillTree.selectedTierOneSkill = skillTree.tierOneSkills[0];

    skillTree.tierTwoSkills = [
      new Skill(
        64,
        2,
        "Fully Engaged",
        "Swapping weapons grant short-term passive abilities: ElectroKnife gains cloak, Shotgun gains speed boost, Inertia Gun grants 150 shields.",
        "/assets/characters/sazan/swap_bonus.svg"
      ),
    ];
    skillTree.selectedTierTwoSkill = skillTree.tierTwoSkills[0];

    skillTree.tierThreeSkills = [
      new Skill(
        65,
        3,
        "Capacitor Overflow",
        "Swapping weapons grants 6% damage boost for 10 seconds.",
        "/assets/characters/sazan/swap_damage_boost.svg"
      ),
      new Skill(
        66,
        3,
        "Full Blast Shot",
        "Shotgun knocks target back and is more accurate.",
        "/assets/characters/sazan/shotgun_choke.svg"
      ),
      new Skill(
        67,
        3,
        "Cut and Run",
        "Jet-Dash inflicts 60 damage and 60 DoT to opponents.",
        "/assets/characters/sazan/offensive_roll.svg"
      ),
    ];
    skillTree.selectedTierThreeSkill = skillTree.tierThreeSkills[0];

    skillTree.tierFourSkills = [
      new Skill(
        68,
        4,
        "Go the Extra Mile",
        "Number of dashes increases from 1 to 2.",
        "/assets/characters/sazan/double_dash.svg"
      ),
    ];
    skillTree.selectedTierFourSkill = skillTree.tierFourSkills[0];

    skillTree.tierFiveSkills = [
      new Skill(
        69,
        5,
        "Upping the Voltage",
        "Gain 33% extra energy per weapon. Increases ElectroKnife damage +33%.",
        "/assets/characters/sazan/increased_energy.svg"
      ),
      new Skill(
        70,
        5,
        "Disruptor Charge",
        "First shot with Inertia Gun disrupts target abilities for 1/2 second.",
        "/assets/characters/sazan/inertia_silence.svg"
      ),
    ];
    skillTree.selectedTierFiveSkill = skillTree.tierFiveSkills[0];

    return skillTree;
  }
}
