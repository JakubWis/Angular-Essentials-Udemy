import { Component } from "@angular/core";
import { random } from "lodash";

declare var _: any;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "angular-essentials";
  rootName = "Maximilian";
  rootItems = ["apples", "bananas", "cherries"];

  onNameChanged(newName) {
    this.rootName = newName;
  }

  onItemWasAdded(newItem) {
    this.rootItems.push(newItem);
    console.log(this.rootItems, random(1, 10));
  }
}
