import { AbilityType } from "./ability-type.enum";

export class Ability {
  id: number;
  name: string;
  desc: string;
  type: AbilityType;
  imagePath: string;
  constructor(
    id: number,
    name: string,
    desc: string,
    type: AbilityType,
    imagePath: string
  ) {
    this.id = id;
    this.name = name;
    this.desc = desc;
    this.type = type;
    this.imagePath = imagePath;
  }
}
