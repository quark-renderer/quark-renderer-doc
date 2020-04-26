import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../../shared/shared.module";
import { ExamplesRoutingModule } from "./examples.routing.module";
import { AccordionModule } from "primeng/accordion";
import { DialogModule } from "primeng/dialog";
import { ExampleMainComponent } from "./example-main/example-main.component";
import { ExamplesService } from "./examples.service";

@NgModule({
  declarations: [
    ExampleMainComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    DialogModule,
    ExamplesRoutingModule,
    AccordionModule
  ],
  providers: [
    ExamplesService
  ]
})
export class ExamplesModule { }
