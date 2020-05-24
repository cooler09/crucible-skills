import { Component, OnInit, Input } from "@angular/core";
import { Skill } from "../models/skill";

@Component({
  selector: "app-skill",
  templateUrl: "./skill.component.html",
  styleUrls: ["./skill.component.scss"],
})
export class SkillComponent implements OnInit {
  @Input() selectedCss: string;
  @Input() selectedSvgCss: string;
  @Input() skill: Skill;
  @Input() selected: boolean;
  constructor() {}

  ngOnInit(): void {}
}
