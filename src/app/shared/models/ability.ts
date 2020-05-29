import { AbilityType } from "./ability-type.enum";

export class Ability {
  id: number;
  name: string;
  multiName: string[];
  desc: string;
  multiDesc: string[];
  multiAbility: boolean;
  type: AbilityType;
  imagePath: string;
  multiImagePath: string[];
  constructor(
    id: number,
    name: string,
    desc: string,
    type: AbilityType,
    imagePath: string,
    multiAbility: boolean,
    multiDesc: string[],
    multiName: string[],
    multiImagePath: string[]
  ) {
    this.id = id;
    this.name = name;
    this.multiName = multiName;
    this.desc = desc;
    this.multiDesc = multiDesc;
    this.multiAbility = multiAbility;
    this.type = type;
    this.imagePath = imagePath;
    this.multiImagePath = multiImagePath;
  }
}
