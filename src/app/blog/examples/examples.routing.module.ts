import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ExampleMainComponent } from "./example-main/example-main.component";

export const exampleRoutes: Routes = [
	{
		path: "",
		component: ExampleMainComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(exampleRoutes)],
	exports: [RouterModule]
})
export class ExamplesRoutingModule { }
