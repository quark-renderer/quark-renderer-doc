import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Subject } from "rxjs";
import { debounceTime, distinctUntilChanged } from "rxjs/operators";
import { PostService } from "../post.service";

@Component({
	selector: "postlist",
	templateUrl: "./post-list.component.html",
	styleUrls: ["./post-list.component.scss"]
})
export class PostListComponent implements OnInit {
	public itemsPerPage = 10;
	public totalRecords = 11;
	public currentPage = 1;
	public offset = 0;
	public end = 0;

	public searchText: string;
	public searchTextStream: Subject<string> = new Subject<string>();

	public postList: Array<any>;

	constructor(
		public router: Router,
		public activeRoute: ActivatedRoute,
		public postService: PostService) {}

	ngOnInit() {
		// 从路由里面获取URL参数
		this.activeRoute.params.subscribe(params => {
			console.log(params);
			this.currentPage = params.page;
			this.loadData();
		});

		this.searchTextStream
			.pipe(
				debounceTime(500),
				distinctUntilChanged()
			)
			.subscribe(() => {
				console.log(this.searchText);
				this.loadData()
			});
	}

	public loadData() {
		this.offset = (this.currentPage - 1) * this.itemsPerPage;
		this.end = (this.currentPage) * this.itemsPerPage;
		return this.postService.getPostList().subscribe(
			res => {
				this.postList = res["items"].slice(this.offset, this.end > this.totalRecords ? this.totalRecords : this.end);
			},
			error => { console.log(error) },
			() => { }
		);
	}

	public pageChanged(event: any): void {
		let temp = parseInt(event.page) + 1;
		this.router.navigateByUrl("posts/page/" + temp);
	}

	public searchChanged(): void {
		this.searchTextStream.next(this.searchText);
	}
}
