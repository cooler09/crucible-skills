import { Component, OnInit, Input } from "@angular/core";
import { Skill } from "../models/skill";
import { Ability } from "../models/ability";

@Component({
  selector: "app-detailed-view",
  templateUrl: "./detailed-view.component.html",
  styleUrls: ["./detailed-view.component.scss"],
})
export class DetailedViewComponent implements OnInit {
  @Input() displayedSkill: Skill;
  @Input() displayedAbility: Ability;
  @Input() multiAbilityIndex: number = 0;
  constructor() {}

  ngOnInit(): void {}
}
