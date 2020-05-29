import { Component, OnInit, Input } from "@angular/core";
import { AbilityInput } from "../models/ability-input.enum";

@Component({
  selector: "app-ability",
  templateUrl: "./ability.component.html",
  styleUrls: ["./ability.component.scss"],
})
export class AbilityComponent implements OnInit {
  @Input() name: string;
  @Input() desc: string;
  @Input() imagePath: string;
  @Input() input: AbilityInput;
  showMore: boolean;
  constructor() {
    this.showMore = false;
  }

  ngOnInit(): void {}
  toggleShow() {
    this.showMore = !this.showMore;
  }
}
