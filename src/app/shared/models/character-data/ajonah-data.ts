import { Ability } from "../ability";
import { AbilityType } from "../ability-type.enum";
import { Skill } from "../skill";
import { SkillTree } from "../skill-tree";

export default class AjonahData {
  static loadAbilities(): Ability[] {
    return [
      new Ability(
        1,
        "HIP FIRE",
        "Fires harpoon.",
        AbilityType.LEFT_CLICK,
        "/assets/characters/ajonah/saboteur_primary.svg",
        false,
        [],
        [],
        []
      ),
      new Ability(
        2,
        "AIM DOWN SIGHTS",
        "Hold to improve harpoon accuracy and increase damage. Slows movement.",
        AbilityType.RIGHT_CLICK,
        "/assets/characters/ajonah/saboteur_ads.svg",
        false,
        [],
        [],
        []
      ),
      new Ability(
        3,
        "GRAPPLING HOOK",
        "Fires a retracting grappling hook. Hold to swing.",
        AbilityType.LSHIFT,
        "/assets/characters/ajonah/saboteur_grapple.svg",
        false,
        [],
        [],
        []
      ),
      new Ability(
        4,
        "JAMMING SHROUD",
        "Deploys device that jams detection in this area. Tap again to detonate.",
        AbilityType.Q,
        "/assets/characters/ajonah/saboteur_jammer.svg",
        false,
        [],
        [],
        []
      ),
      new Ability(
        5,
        "SQUID MINE",
        "Creates mine that follows target and explodes, slowing enemies.",
        AbilityType.E,
        "/assets/characters/ajonah/saboteur_mine.svg",
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
        1,
        1,
        "Expanded Quiver",
        "Increases maximum ammo by 2.",
        "/assets/characters/ajonah/sab_max_ammo.svg"
      ),
      new Skill(
        2,
        1,
        "Sea's Bounty",
        "Squid Mines are thrown at increased range. Number of Squid Mines increases by 1.",
        "/assets/characters/ajonah/mine_style.svg"
      ),
      new Skill(
        3,
        1,
        "Tidal Reach",
        "Grappling Hook gains an additional charge but reduces range. Increases cooldown by 2 seconds.",
        "/assets/characters/ajonah/grapple_style.svg"
      ),
    ];
    skillTree.selectedTierOneSkill = skillTree.tierOneSkills[0];

    skillTree.tierTwoSkills = [
      new Skill(
        4,
        2,
        "Deadly Shroud",
        "Detonating an active Jamming Shroud inflicts damage and knock back targets.",
        "/assets/characters/ajonah/jammer_ability.svg"
      ),
    ];
    skillTree.selectedTierTwoSkill = skillTree.tierTwoSkills[0];

    skillTree.tierThreeSkills = [
      new Skill(
        5,
        3,
        "Dazzling Burst",
        "Critical hits blind targets.",
        "/assets/characters/ajonah/headshot_blind.svg"
      ),
      new Skill(
        6,
        3,
        "Heal in Shadows",
        "Heal 20 health/second when cloaked.",
        "/assets/characters/ajonah/stealth_regen.svg"
      ),
      new Skill(
        7,
        3,
        "Safe Harbor",
        "Increases speed +10% when within Jamming Shroud, including allies.",
        "/assets/characters/ajonah/jammer_swiftness.svg"
      ),
    ];
    skillTree.selectedTierThreeSkill = skillTree.tierThreeSkills[0];

    skillTree.tierFourSkills = [
      new Skill(
        8,
        4,
        "Blend with the Reefs",
        "Gain cload for 1.5 seconds after using Grappling Hook.",
        "/assets/characters/ajonah/grapple_stealth.svg"
      ),
    ];
    skillTree.selectedTierFourSkill = skillTree.tierFourSkills[0];

    skillTree.tierFiveSkills = [
      new Skill(
        9,
        5,
        "Neurotoxic Venom",
        "Squid Mines have increased slow duration.",
        "/assets/characters/ajonah/mine_slow.svg"
      ),
      new Skill(
        10,
        5,
        "Strike to the Head",
        "Increases critical hit multiplier from 2.5 to 3.0.",
        "/assets/characters/ajonah/headshot_multiplier.svg"
      ),
    ];
    skillTree.selectedTierFiveSkill = skillTree.tierFiveSkills[0];

    return skillTree;
  }
}
