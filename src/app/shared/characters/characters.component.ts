import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Character } from "../models/character";

@Component({
  selector: "app-characters",
  templateUrl: "./characters.component.html",
  styleUrls: ["./characters.component.scss"],
})
export class CharactersComponent implements OnInit {
  @Input() character: Character;
  @Input() isSelected: boolean;

  @Output() chrClick = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  characterClick(character: Character) {
    if (character) {
      this.chrClick.emit(character);
    }
  }
}
