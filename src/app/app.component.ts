import { Component, ElementRef, Renderer2 } from "@angular/core";
import { ActivatedRoute, Router, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import { MessageService } from "primeng/api";

@Component({
	selector: "root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"]
})
export class AppComponent {
	public showToggleMenu = false;
	public currentUser: any;
	private globalClickCallbackFn: Function;

	constructor(
		public elementRef: ElementRef,
		public renderer: Renderer2,
		public router: Router,
		public activatedRoute: ActivatedRoute,
		public translate: TranslateService,
		private messageService: MessageService
	) {

	}

	ngOnInit() {
		this.globalClickCallbackFn = this.renderer.listen(this.elementRef.nativeElement, "click", (event: any) => {
			console.log("全局监听点击事件>" + event);
		});

		// ngx-translate国际化服务相关的配置
		this.translate.addLangs(["zh", "en"]);
		this.translate.setDefaultLang("zh");
		const browserLang = this.translate.getBrowserLang();
		console.log("获取到浏览器的语言>" + browserLang);
		this.translate.use(browserLang.match(/zh|en/) ? browserLang : "zh");
	}

	ngOnDestroy() {
		if (this.globalClickCallbackFn) {
			this.globalClickCallbackFn();
		}
	}

	onMenuToggle() {
		this.showToggleMenu = !this.showToggleMenu;
	}

	public doLogout(): void {
		this.showToggleMenu = false;
		this.messageService.add({ severity: "success", summary: "Success Message", detail: "退出成功", life: 500 });
		this.router.navigateByUrl("");
	}
}
