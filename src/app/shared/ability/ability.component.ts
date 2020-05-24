import { Component, OnInit, Input } from "@angular/core";
import { Ability } from "../models/ability";

@Component({
  selector: "app-ability",
  templateUrl: "./ability.component.html",
  styleUrls: ["./ability.component.scss"],
})
export class AbilityComponent implements OnInit {
  @Input() ability: Ability;
  showMore: boolean;
  constructor() {
    this.showMore = false;
  }

  ngOnInit(): void {}
  toggleShow() {
    this.showMore = !this.showMore;
  }
}
