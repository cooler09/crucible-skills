import { Ability } from "../ability";
import { AbilityType } from "../ability-type.enum";
import { Skill } from "../skill";
import { SkillTree } from "../skill-tree";

export default class SazanData {
  static loadAbilities(): Ability[] {
    return [
      new Ability(
        61,
        "ATTACK",
        "Attack with equipped weapon.",
        AbilityType.LEFT_CLICK,
        "/assets/characters/sazan/commando_primary.svg"
      ),
      new Ability(
        62,
        "ELECTROKNIFE",
        "Equip electroknife, which applies a long-lasting DoT upon hit. Recharges weapon energy.",
        AbilityType.RIGHT_CLICK,
        "/assets/characters/sazan/commando_knifeswap.svg"
      ),
      new Ability(
        63,
        "JET-DASH",
        "Dash in the direction of movement.",
        AbilityType.LSHIFT,
        "/assets/characters/sazan/commando_dash.svg"
      ),
      new Ability(
        64,
        "SHOTGUN",
        "Equip shotgun, which fires a powerful short-range burst. Recharges weapon energy.",
        AbilityType.E,
        "/assets/characters/sazan/commando_shotgunswap.svg"
      ),
      new Ability(
        65,
        "INERTIA GUN",
        "Equip inertia gun, which applies a stacking slow effect upon hit. Recharges weapon energy.",
        AbilityType.Q,
        "/assets/characters/sazan/commando_inertiagunswap.svg"
      ),
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
