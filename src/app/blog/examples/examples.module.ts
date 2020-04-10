import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../../shared/shared.module";
import { ExamplesRoutingModule } from "./examples.routing.module";
import { ExampleMainComponent } from "./example-main/example-main.component";
import { LinkExampleComponent } from "./link-example/link-example.component";
import { GroupExampleComponent } from "./group-example/group-example.component";
import { FlowExampleComponent } from "./flow-example/flow-example.component";
import { BPMNExampleComponent } from "./bpmnexample/bpmnexample.component";

@NgModule({
  declarations: [
    ExampleMainComponent,
    LinkExampleComponent,
    GroupExampleComponent,
    FlowExampleComponent,
    BPMNExampleComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ExamplesRoutingModule
  ]
})
export class ExamplesModule { }
