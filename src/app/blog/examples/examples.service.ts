import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class ExamplesService {
    public commentListURL = "mock-data/flow-1.json";

    constructor(public httpClient: HttpClient) {
    }

    public loadFlow(): Observable<any> {
        return this.httpClient.get(this.commentListURL);
    }
}
