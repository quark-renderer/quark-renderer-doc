import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PostListComponent } from "./post-list/post-list.component";

export const postRoutes: Routes = [
	{
		path: "",
		redirectTo: "page/1",
		pathMatch: "full"
	},
	{
		path: "page/:page",
		component: PostListComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(postRoutes)],
	exports: [RouterModule]
})
export class PostRoutingModule { }
