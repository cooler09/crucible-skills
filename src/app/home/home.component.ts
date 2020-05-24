import { Component, OnInit, OnDestroy, Inject } from "@angular/core";
import { Character } from "../shared/models/character";
import MockData from "../shared/models/mock-data";
import { Skill } from "../shared/models/skill";
import { Subscription } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";
import { WINDOW } from "../app.module";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit, OnDestroy {
  characters: Character[];
  selectedCharacter: Character;
  displayedSkill: Skill;

  subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar,
    @Inject(WINDOW) private window: Window
  ) {
    this.characters = MockData.mockCharacters();
    this.selectedCharacter = this.characters[0];
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe((params) => {
      let preload = params["preload"];
      if (preload) {
        let data = preload.split(",");
        if (data.length > 0) {
          let characterId = data[0];
          this.selectedCharacter = this.characters.find((_) => {
            return _.id === characterId;
          });
          if (data.length > 1) {
            let selectedTierOne = this.getSkillData(
              +data[1],
              this.selectedCharacter.skillTree.tierOneSkills
            );
            if (selectedTierOne) {
              this.selectedCharacter.skillTree.selectedTierOneSkill = selectedTierOne;
            }
          }
          if (data.length > 2) {
            let selectedTierThree = this.getSkillData(
              +data[2],
              this.selectedCharacter.skillTree.tierThreeSkills
            );
            if (selectedTierThree) {
              this.selectedCharacter.skillTree.selectedTierThreeSkill = selectedTierThree;
            }
          }
          if (data.length > 3) {
            let selectedTierFive = this.getSkillData(
              +data[3],
              this.selectedCharacter.skillTree.tierFiveSkills
            );
            if (selectedTierFive) {
              this.selectedCharacter.skillTree.selectedTierFiveSkill = selectedTierFive;
            }
          }
        }
      }
    });
  }
  getSkillData(id: number, skills: Skill[]): Skill {
    return skills.find((_) => {
      return _.id == id;
    });
  }
  characterClick(character: Character) {
    this.selectedCharacter = character;
  }
  skillSelected(data: any) {
    if (data) {
      switch (data.tier) {
        case 1:
          this.selectedCharacter.skillTree.selectedTierOneSkill = data.skill;
          break;
        case 2:
          this.selectedCharacter.skillTree.selectedTierTwoSkill = data.skill;
          break;
        case 3:
          this.selectedCharacter.skillTree.selectedTierThreeSkill = data.skill;
          break;
        case 4:
          this.selectedCharacter.skillTree.selectedTierFourSkill = data.skill;
          break;
        case 5:
          this.selectedCharacter.skillTree.selectedTierFiveSkill = data.skill;
          break;
      }
    }
  }
  displaySkill(skill: Skill) {
    this.displayedSkill = skill;
  }
  generateUrl() {
    let skillTree = this.selectedCharacter.skillTree;
    return `${this.window.location.hostname}/${this.selectedCharacter.id},${skillTree.selectedTierOneSkill.id},${skillTree.selectedTierThreeSkill.id},${skillTree.selectedTierFiveSkill.id}`;
  }
  displaySnackBar() {
    this._snackBar.open("Copied to Clipboard", null, {
      duration: 3000,
      horizontalPosition: "center",
      verticalPosition: "bottom",
    });
  }
}
