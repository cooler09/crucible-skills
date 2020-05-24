import { Ability } from "./ability";
import { SkillTree } from "./skill-tree";

export class Character {
  id: string;
  name: string;
  imagePath: string;
  selectedCss: string;
  selectedCssAlt: string;
  selectedSvgCss: string;
  abilities: Ability[];
  skillTree: SkillTree;
  constructor(
    id: string,
    name: string,
    imagePath: string,
    selectedCss: string,
    selectedCssAlt: string,
    selectedSvgCss: string
  ) {
    this.id = id;
    this.name = name;
    this.imagePath = imagePath;
    this.selectedCss = selectedCss;
    this.selectedCssAlt = selectedCssAlt;
    this.selectedSvgCss = selectedSvgCss;
  }
}
