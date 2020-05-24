export class Skill {
  id: number;
  levelReq: number;
  name: string;
  desc: string;
  imagePath: string;
  constructor(
    id: number,
    levelReq: number,
    name: string,
    desc: string,
    imagePath: string
  ) {
    this.id = id;
    this.levelReq = levelReq;
    this.name = name;
    this.desc = desc;
    this.imagePath = imagePath;
  }
}
