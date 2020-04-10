import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ExampleMainComponent } from "./example-main/example-main.component";
import { LinkExampleComponent } from "./link-example/link-example.component";
import { GroupExampleComponent } from "./group-example/group-example.component";
import { FlowExampleComponent } from "./flow-example/flow-example.component";
import { BPMNExampleComponent } from "./bpmnexample/bpmnexample.component";

export const exampleRoutes: Routes = [
	{
		path: "",
		component: ExampleMainComponent,
		children: [
			{ path: "", redirectTo: "link", pathMatch: "full" },
			{ path: "link", component: LinkExampleComponent },
			{ path: "group", component: GroupExampleComponent },
			{ path: "flow", component: FlowExampleComponent },
			{ path: "bpmn", component: BPMNExampleComponent },
			{ path: "**", redirectTo: "link" }
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(exampleRoutes)],
	exports: [RouterModule]
})
export class ExamplesRoutingModule { }
