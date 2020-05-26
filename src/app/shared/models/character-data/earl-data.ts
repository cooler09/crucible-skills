import { Ability } from "../ability";
import { AbilityType } from "../ability-type.enum";
import { Skill } from "../skill";
import { SkillTree } from "../skill-tree";

export default class EarlData {
  static loadAbilities(): Ability[] {
    return [
      new Ability(
        36,
        "Turbofire",
        "Firing weapons creates Turbofire, increasing rate of fire.",
        AbilityType.PASSIVE,
        "/assets/characters/earl/minigunner_passive.svg",
        false,
        [],
        [],
        []
      ),
      new Ability(
        31,
        "FIRE",
        "Fires Misty, increasing Turbofire. Turbofire increases fire rate over time.",
        AbilityType.LEFT_CLICK,
        "/assets/characters/earl/minigunner_primary.svg",
        false,
        [],
        [],
        []
      ),
      new Ability(
        32,
        "UPSHIFT",
        "Fires a burst of explosive rounds and increases Turbofire.",
        AbilityType.RIGHT_CLICK,
        "/assets/characters/earl/minigunner_upshift.svg",
        false,
        [],
        [],
        []
      ),
      new Ability(
        33,
        "AFTERBURNER",
        "Rocket forward at high speed.",
        AbilityType.LSHIFT,
        "/assets/characters/earl/minigunner_afterburner.svg",
        false,
        [],
        [],
        []
      ),
      new Ability(
        34,
        "BLOWBACK VENTS",
        "Knock enemies back and block projectiles in immediate area.",
        AbilityType.E,
        "/assets/characters/earl/minigunner_airhorn.svg",
        false,
        [],
        [],
        []
      ),
      new Ability(
        35,
        "TANKING UP",
        "Drink a refreshing beverage to immediately restore health.",
        AbilityType.Q,
        "/assets/characters/earl/minigunner_drink.svg",
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
        31,
        1,
        "Big Rig",
        "Increases maximum health by 300.",
        "/assets/characters/earl/max_health.svg"
      ),
      new Skill(
        32,
        1,
        "High Idle",
        "Turbofire does not deplete below 25%.",
        "/assets/characters/earl/high_idle.svg"
      ),
      new Skill(
        33,
        1,
        "Packing a Spare",
        "Increases maximum ammo by 30 (10 per piston).",
        "/assets/characters/earl/max_ammo.svg"
      ),
    ];
    skillTree.selectedTierOneSkill = skillTree.tierOneSkills[0];

    skillTree.tierTwoSkills = [
      new Skill(
        34,
        2,
        "Nothing Wasted",
        "Increases amount healed by med kits +50%.",
        "/assets/characters/earl/medpack_bonus.svg"
      ),
    ];
    skillTree.selectedTierTwoSkill = skillTree.tierTwoSkills[0];

    skillTree.tierThreeSkills = [
      new Skill(
        35,
        3,
        "Directional Vents",
        "Doubles movement speed when using Blowback Vents and increases duration from 2.5 to 3 seconds.",
        "/assets/characters/earl/turbo_vents.svg"
      ),
      new Skill(
        36,
        3,
        "Scatterblast Shot",
        "Upshift AoE increases +50% and inflicts +50% damage as DoT.",
        "/assets/characters/earl/upshift_aoe.svg"
      ),
      new Skill(
        37,
        3,
        "X-Turbo Draft",
        "Tanking Up fully charges Turbofire.",
        "/assets/characters/earl/drink_gun.svg"
      ),
    ];
    skillTree.selectedTierThreeSkill = skillTree.tierThreeSkills[0];

    skillTree.tierFourSkills = [
      new Skill(
        38,
        4,
        "Full Throttle",
        "Afterburner knocks opponents back and stuns them.",
        "/assets/characters/earl/afterburner_knockback.svg"
      ),
    ];
    skillTree.selectedTierFourSkill = skillTree.tierFourSkills[0];

    skillTree.tierFiveSkills = [
      new Skill(
        39,
        5,
        "Star-Ball Energy Drink",
        "Tanking Up heals +50% and purges negative conditions.",
        "/assets/characters/earl/drink_cleanse.svg"
      ),
      new Skill(
        40,
        5,
        "Red Line That Sucker",
        "At maximum Turbofire, increases RoF +25% and projectile speed +33%. Opponents do not block Line of Fire at maximum Turbofire.",
        "/assets/characters/earl/red_line.svg"
      ),
    ];
    skillTree.selectedTierFiveSkill = skillTree.tierFiveSkills[0];

    return skillTree;
  }
}
