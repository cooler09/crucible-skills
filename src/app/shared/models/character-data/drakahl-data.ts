import { Ability } from "../ability";
import { AbilityType } from "../ability-type.enum";
import { Skill } from "../skill";
import { SkillTree } from "../skill-tree";

export default class DrakahlData {
  static loadAbilities(): Ability[] {
    return [
      new Ability(
        21,
        "CHOP",
        "Strike with vibron axe.",
        AbilityType.LEFT_CLICK,
        "/assets/characters/drakahl/fighter_primary.svg"
      ),
      new Ability(
        22,
        "SONIC PULSE",
        "Fire Sonic Pulse from vibron axe.",
        AbilityType.RIGHT_CLICK,
        "/assets/characters/drakahl/fighter_quiver_strike.svg"
      ),
      new Ability(
        23,
        "RUSH",
        "Dash in the direction your camera is facing.",
        AbilityType.LSHIFT,
        "/assets/characters/drakahl/fighter_rush.svg"
      ),
      new Ability(
        24,
        "RESONATING AXE",
        "Your axe hums with power. Choose between a spinning damage over time area attack or a stunning area attack. While resonating, Chop becomes Resonating Spin: Spinning attack that bleeds all enemies. While resonating, Sonic Pulse becomes Resonating Quake: Shockwave attack that stuns and damages nearby opponents.",
        AbilityType.E,
        "/assets/characters/drakahl/fighter_resonate.svg"
      ),
      new Ability(
        25,
        "ENRAGED ROAR",
        "You become enraged. Choose between a life-stealing claw attack or a ranged grab attack. While enraged, Chop becomes Enraged Claw: Claw attack that generates healing over time. While enraged, Sonic Pulse becomes Enraged Grab: Short-range attack that pulls one enemy towards you.",
        AbilityType.Q,
        "/assets/characters/drakahl/fighter_roar.svg"
      ),
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
