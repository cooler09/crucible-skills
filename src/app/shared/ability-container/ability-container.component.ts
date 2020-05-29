import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Ability } from "../models/ability";

@Component({
  selector: "app-ability-container",
  templateUrl: "./ability-container.component.html",
  styleUrls: ["./ability-container.component.scss"],
})
export class AbilityContainerComponent implements OnInit {
  @Input() ability: Ability;
  @Output() displayAbility = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  currentIndex: number = 0;

  next() {
    this.currentIndex += 1;
    if (this.currentIndex >= this.ability.abilities.length) {
      this.currentIndex = 0;
    }
    if (this.ability.multiAbility) {
      this.displayAbility.emit(this.ability.abilities[this.currentIndex]);
    } else {
      this.displayAbility.emit(this.ability);
    }
  }
  prev() {
    this.currentIndex -= 1;
    if (this.currentIndex < 0) {
      this.currentIndex = this.ability.abilities.length - 1;
    }
    if (this.ability.multiAbility) {
      this.displayAbility.emit(this.ability.abilities[this.currentIndex]);
    } else {
      this.displayAbility.emit(this.ability);
    }
  }
  mouseEnter(ability: Ability) {
    this.displayAbility.emit(ability);
  }
}
