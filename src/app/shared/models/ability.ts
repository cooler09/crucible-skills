import { AbilityType } from "./ability-type.enum";
import { SkillBonus } from "./skill-bonus";
import { AbilityInput } from "./ability-input.enum";

export class Ability {
  id: number;
  name: string;
  desc: string;
  damage: string;
  cooldown: string;
  rateOfFire: string;
  heatGenerated: string;
  details: string;
  input: AbilityInput;
  type: AbilityType;
  imagePath: string;
  additionalNotes: string[];
  skillBonuses: SkillBonus[];
  multiAbility: boolean;
  abilities: Ability[];
  constructor(
    id: number,
    name: string,
    desc: string,
    input: AbilityInput,
    type: AbilityType,
    imagePath: string
  ) {
    this.id = id;
    this.name = name;
    this.desc = desc;
    this.imagePath = imagePath;
    this.input = input;
    this.type = type;
    this.multiAbility = false;
    this.skillBonuses = [];
    this.additionalNotes = [];
    this.abilities = [];
  }
  setMultiAbility(abilities: Ability[]): Ability {
    this.multiAbility = true;
    this.abilities = abilities;
    return this;
  }
  addNotes(additionalNotes: string[]): Ability {
    this.additionalNotes = additionalNotes;
    return this;
  }
  addHeatGenerated(heat: string) {
    this.heatGenerated = heat;
    return this;
  }
  addSkillBonuses(skillBonuses: SkillBonus[]): Ability {
    this.skillBonuses = skillBonuses;
    return this;
  }
  addDamage(damage: string) {
    this.damage = damage;
    return this;
  }
  addCooldown(cooldown: string) {
    this.cooldown = cooldown;
    return this;
  }
  addDetails(details: string) {
    this.details = details;
    return this;
  }
  addRateOfFire(rateOfFire: string) {
    this.rateOfFire = rateOfFire;
    return this;
  }
}
