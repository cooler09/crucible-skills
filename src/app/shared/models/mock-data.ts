import { Character } from "./character";
import { Ability } from "./ability";
import { SkillTree } from "./skill-tree";
import AjonahData from "./character-data/ajonah-data";
import MendozaData from "./character-data/mendoza-data";
import BuggData from "./character-data/bugg-data";
import DrakahlData from "./character-data/drakahl-data";
import EarlData from "./character-data/earl-data";
import RahiData from "./character-data/rahi-data";
import SazanData from "./character-data/sazan-data";
import ShakirriData from "./character-data/shakirri-data";
import ToscaData from "./character-data/tosca-data";
import SummerData from "./character-data/summer-data";

export default class MockData {
  static loadSkillTree(characterId: string): SkillTree {
    switch (characterId) {
      case "1":
        return AjonahData.loadSkillTree();
      case "2":
        return BuggData.loadSkillTree();
      case "3":
        return MendozaData.loadSkillTree();
      case "4":
        return DrakahlData.loadSkillTree();
      case "5":
        return EarlData.loadSkillTree();
      case "6":
        return RahiData.loadSkillTree();
      case "7":
        return SazanData.loadSkillTree();
      case "8":
        return ShakirriData.loadSkillTree();
      case "9":
        return SummerData.loadSkillTree();
      case "10":
        return ToscaData.loadSkillTree();
      default:
        return null;
    }
  }
  static loadAbilities(characterId: string): Ability[] {
    switch (characterId) {
      case "1":
        return AjonahData.loadAbilities();
      case "2":
        return BuggData.loadAbilities();
      case "3":
        return MendozaData.loadAbilities();
      case "4":
        return DrakahlData.loadAbilities();
      case "5":
        return EarlData.loadAbilities();
      case "6":
        return RahiData.loadAbilities();
      case "7":
        return SazanData.loadAbilities();
      case "8":
        return ShakirriData.loadAbilities();
      case "9":
        return SummerData.loadAbilities();
      case "10":
        return ToscaData.loadAbilities();
      default:
        return [];
    }
  }

  static mockCharacters(): Character[] {
    let characters = [];
    let chr = new Character(
      "1",
      "Ajonah",
      "/assets/characters/ajonah/ajonah.jpg",
      "bg-ajonah",
      "bg-ajonah-alt",
      "svg-ajonah"
    );
    chr.abilities = this.loadAbilities(chr.id);
    chr.skillTree = this.loadSkillTree(chr.id);
    characters.push(chr);
    chr = new Character(
      "2",
      "Bugg",
      "/assets/characters/bugg.jpg",
      "bg-bugg",
      "bg-bugg-alt",
      "svg-bugg"
    );
    chr.abilities = this.loadAbilities(chr.id);
    chr.skillTree = this.loadSkillTree(chr.id);
    characters.push(chr);
    chr = new Character(
      "3",
      "Captain Mendoza",
      "/assets/characters/cpt_mendoza.jpg",
      "bg-mendoza",
      "bg-mendoza-alt",
      "svg-mendoza"
    );
    chr.abilities = this.loadAbilities(chr.id);
    chr.skillTree = this.loadSkillTree(chr.id);
    characters.push(chr);
    chr = new Character(
      "4",
      "Drakahl",
      "/assets/characters/drakahl.jpg",
      "bg-drakahl",
      "bg-drakahl-alt",
      "svg-drakahl"
    );
    chr.abilities = this.loadAbilities(chr.id);
    chr.skillTree = this.loadSkillTree(chr.id);
    characters.push(chr);
    chr = new Character(
      "5",
      "Earl",
      "/assets/characters/earl.jpg",
      "bg-earl",
      "bg-earl-alt",
      "svg-earl"
    );
    chr.abilities = this.loadAbilities(chr.id);
    chr.skillTree = this.loadSkillTree(chr.id);
    characters.push(chr);
    chr = new Character(
      "6",
      "Rahi and Brother",
      "/assets/characters/rahi.jpg",
      "bg-rahi",
      "bg-rahi-alt",
      "svg-rahi"
    );
    chr.abilities = this.loadAbilities(chr.id);
    chr.skillTree = this.loadSkillTree(chr.id);
    characters.push(chr);
    chr = new Character(
      "7",
      "Sazan",
      "/assets/characters/sazan.jpg",
      "bg-sazan",
      "bg-sazan-alt",
      "svg-sazan"
    );
    chr.abilities = this.loadAbilities(chr.id);
    chr.skillTree = this.loadSkillTree(chr.id);
    characters.push(chr);
    chr = new Character(
      "8",
      "Shakirri",
      "/assets/characters/shakirri.jpg",
      "bg-shakirri",
      "bg-shakirri-alt",
      "svg-shakirri"
    );
    chr.abilities = this.loadAbilities(chr.id);
    chr.skillTree = this.loadSkillTree(chr.id);
    characters.push(chr);
    chr = new Character(
      "9",
      "Summer",
      "/assets/characters/summer.jpg",
      "bg-summer",
      "bg-summer-alt",
      "svg-summer"
    );
    chr.abilities = this.loadAbilities(chr.id);
    chr.skillTree = this.loadSkillTree(chr.id);
    characters.push(chr);
    chr = new Character(
      "10",
      "Tosca",
      "/assets/characters/tosca.jpg",
      "bg-tosca",
      "bg-tosca-alt",
      "svg-tosca"
    );
    chr.abilities = this.loadAbilities(chr.id);
    chr.skillTree = this.loadSkillTree(chr.id);
    characters.push(chr);
    return characters;
  }
}
