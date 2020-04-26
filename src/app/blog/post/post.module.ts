import { NgModule } from "@angular/core";
import { SharedModule } from "../../shared/shared.module";
import { RouterModule } from "@angular/router";
import { CKEditorModule } from "@ckeditor/ckeditor5-angular";

import { PaginatorModule } from "primeng/paginator";
import { PostListComponent } from "./post-list/post-list.component";
import { PostHeadlineComponent } from "./post-headline/post-headline.component";
import { PostService } from "./post.service";
import { BooleanPipe } from "../../shared/pipes/boolean-pipe";

import { PostRoutingModule } from "./post.routing.module";

@NgModule({
    imports: [
        SharedModule,
        RouterModule,
        PaginatorModule,
        CKEditorModule,
        PostRoutingModule
    ],
    exports: [BooleanPipe],
    declarations: [
        PostListComponent,
        BooleanPipe,
        PostHeadlineComponent
    ],
    providers: [
        PostService
    ]
})
export class PostModule { }
