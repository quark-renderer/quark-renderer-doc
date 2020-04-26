import { NgModule } from "@angular/core";
import {TableModule} from "primeng/table";
import { CalendarModule } from "primeng/calendar";
import { SharedModule } from "./shared.module";

@NgModule({
  imports: [
    SharedModule,
    TableModule,
    CalendarModule
  ],
  declarations: [],
  exports: []
})

export class PostSharedModule {

}
