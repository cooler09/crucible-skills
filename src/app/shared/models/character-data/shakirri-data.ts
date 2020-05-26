import { Ability } from "../ability";
import { AbilityType } from "../ability-type.enum";
import { Skill } from "../skill";
import { SkillTree } from "../skill-tree";

export default class ShakirriData {
  static loadAbilities(): Ability[] {
    return [
      new Ability(
        76,
        "STARLOCK ENERGY",
        "Pistol energy regenerates over time.",
        AbilityType.PASSIVE,
        "/assets/characters/shakirri/duelist_passive.svg",
        false,
        [],
        [],
        []
      ),
      new Ability(
        71,
        "SHOOT / SWING",
        "Pistol stance: Fire your pistol. Sword stance: Attack with your sword.",
        AbilityType.LEFT_CLICK,
        "/assets/characters/shakirri/duelist_pistol_fire.svg",
        false,
        [],
        [],
        []
      ),
      new Ability(
        72,
        "DISRUPTING STRIKE / AIM DOWN SIGHTS",
        "In sword stance, unleash an energy wave that disrupts opponents. In pistol stance, hold to improve weapon accuracy.",
        AbilityType.RIGHT_CLICK,
        "/assets/characters/shakirri/duelist_disarming_strike.svg",
        false,
        [],
        [],
        []
      ),
      new Ability(
        73,
        "WEAPON SWAP",
        "Toggle between sword and pistol as your primary weapon. Sword stance moves faster.",
        AbilityType.LSHIFT,
        "/assets/characters/shakirri/duelist_weapon_swap_sword.svg",
        false,
        [],
        [],
        []
      ),
      new Ability(
        74,
        "HOLO-SHIELD",
        "Deploys a force shield that deflects projectiles and blocks melee attacks.",
        AbilityType.E,
        "/assets/characters/shakirri/duelist_deflect.svg",
        false,
        [],
        [],
        []
      ),
      new Ability(
        75,
        "FORCE DOME",
        "Creates dome that blocks enemy attacks and prevents enemies from crossing.",
        AbilityType.Q,
        "/assets/characters/shakirri/duelist_bubble.svg",
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
