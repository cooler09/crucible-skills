import { Ability } from "../ability";
import { AbilityType } from "../ability-type.enum";
import { Skill } from "../skill";
import { SkillTree } from "../skill-tree";

export default class RahiData {
  static loadAbilities(): Ability[] {
    return [
      new Ability(
        55,
        "",
        "",
        AbilityType.PASSIVE,
        "",
        true,
        [
          "When Brother is with Rahi, detects enemies that damage to Rahi. When Scouting Ahead, detects enemies in his LoS.",
          "Rahi has a 300 strength maximum capacity overshield.",
          "Hold to power up super jump when released.",
        ],
        ["Brother's Watchful Gaze", "Brother's Shields", "Heroic Bound"],
        [
          "/assets/characters/rahi/hero_bot_passive.svg",
          "/assets/characters/rahi/hero_shield_passive.svg",
          "/assets/characters/rahi/hero_super_jump.svg",
        ]
      ),
      new Ability(
        51,
        "SHOOT LASER BEAM",
        "Fires laser for piercing damage. Attack generates small amount of shields.",
        AbilityType.LEFT_CLICK,
        "/assets/characters/rahi/hero_primary.svg",
        false,
        [],
        [],
        []
      ),
      new Ability(
        52,
        "FORCE PUNCH",
        "Heavy melee attack. Drains personal shields to deal additional damage.",
        AbilityType.RIGHT_CLICK,
        "/assets/characters/rahi/hero_force_punch.svg",
        false,
        [],
        [],
        []
      ),
      new Ability(
        53,
        "",
        "",
        AbilityType.LSHIFT,
        "",
        true,
        [
          "Brother moves to target location. Tap again to have Rahi teleport to Brother's location.",
          "While Scouting ahead is active, tap again to have Rahi teleport to Brother's location.",
        ],
        ["SCOUTING AHEAD", "TO THE RESCUE"],
        [
          "/assets/characters/rahi/hero_bot_teleport.svg",
          "/assets/characters/rahi/hero_send_bot.svg",
        ]
      ),
      new Ability(
        54,
        "SHIELD OF JUSTICE",
        "Send projectile to shield allies, blinding enemies in path.",
        AbilityType.E,
        "/assets/characters/rahi/hero_send_shield.svg",
        false,
        [],
        [],
        []
      ),
      new Ability(
        55,
        "LAUGH IT OFF",
        "Gain personal shield which increases over time.",
        AbilityType.Q,
        "/assets/characters/rahi/hero_shield_self.svg",
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
