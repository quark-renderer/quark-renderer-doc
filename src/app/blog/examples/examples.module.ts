import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../../shared/shared.module";
import { ExamplesRoutingModule } from "./examples.routing.module";
import { AccordionModule } from "primeng/accordion";
import { ExampleMainComponent } from "./example-main/example-main.component";

@NgModule({
  declarations: [
    ExampleMainComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ExamplesRoutingModule,
    AccordionModule
  ]
})
export class ExamplesModule { }
