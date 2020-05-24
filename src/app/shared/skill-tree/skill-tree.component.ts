import { Component, OnInit, Output, Input, EventEmitter } from "@angular/core";
import { SkillTree } from "../models/skill-tree";
import { Skill } from "../models/skill";

@Component({
  selector: "app-skill-tree",
  templateUrl: "./skill-tree.component.html",
  styleUrls: ["./skill-tree.component.scss"],
})
export class SkillTreeComponent implements OnInit {
  @Input() selectedCss: string;
  @Input() selectedSvgCss: string;
  @Input() skillTree: SkillTree;

  @Output() skillSelected = new EventEmitter();
  @Output() displaySkill = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  selectSkill(tier: number, skill: Skill) {
    this.skillSelected.emit({
      tier,
      skill,
    });
  }
  mouseEnter(skill: Skill) {
    this.displaySkill.emit(skill);
  }
}
