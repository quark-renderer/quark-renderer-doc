import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
const routes: Routes = [
	{
		path: "",
		redirectTo: "posts",
		pathMatch: "full"
	},
	{
		path: "home",
		loadChildren: () => import("./blog/home/home.module").then(m => m.HomeModule)
	},
	{
		path: "examples",
		loadChildren: () => import("./blog/examples/examples.module").then(m => m.ExamplesModule)
	},
	{
		path: "posts",
		loadChildren: () => import("./blog/home/home.module").then(m => m.HomeModule)
	},
	{
		path: "**",
		loadChildren: () => import("./blog/home/home.module").then(m => m.HomeModule)
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
