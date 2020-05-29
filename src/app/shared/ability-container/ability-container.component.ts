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
    if (this.currentIndex >= this.ability.multiName.length) {
      this.currentIndex = 0;
    }
    this.displayAbility.emit({
      ability: this.ability,
      index: this.currentIndex,
    });
  }
  prev() {
    this.currentIndex -= 1;
    if (this.currentIndex < 0) {
      this.currentIndex = this.ability.multiName.length - 1;
    }
    this.displayAbility.emit({
      ability: this.ability,
      index: this.currentIndex,
    });
  }
  mouseEnter(ability: Ability, index: number) {
    this.displayAbility.emit({ ability, index });
  }
}
