import { Component, OnInit, Input } from "@angular/core";
import { Ability } from "../models/ability";

@Component({
  selector: "app-ability-container",
  templateUrl: "./ability-container.component.html",
  styleUrls: ["./ability-container.component.scss"],
})
export class AbilityContainerComponent implements OnInit {
  @Input() ability: Ability;
  constructor() {}

  ngOnInit(): void {}

  currentIndex: number = 0;

  next() {
    this.currentIndex += 1;
    if (this.currentIndex >= this.ability.multiName.length) {
      this.currentIndex = 0;
    }
  }
  prev() {
    this.currentIndex -= 1;
    if (this.currentIndex < 0) {
      this.currentIndex = this.ability.multiName.length - 1;
    }
  }
}
