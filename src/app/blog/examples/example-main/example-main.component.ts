import { Component, OnInit } from "@angular/core";
import { flyIn } from "../../../shared/animations/fly-in";

@Component({
  selector: "example-main",
  templateUrl: "./example-main.component.html",
  styleUrls: ["./example-main.component.scss"],
  animations: [
    flyIn
  ]
})
export class ExampleMainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
