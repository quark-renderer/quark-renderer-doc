(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"+jBO":function(e,t,i){"use strict";i.r(t),i.d(t,"ExamplesModule",(function(){return ve}));var n=i("tyNb"),s=i("ofXK"),a=i("PCNd"),o=i("iUtD"),r=i("fXoL"),c=i("tk/3");let l=(()=>{class e{constructor(e){this.httpClient=e,this.commentListURL="mock-data/flow-1.json"}loadFlow(){return this.httpClient.get(this.commentListURL)}}return e.\u0275fac=function(t){return new(t||e)(r.Wb(c.a))},e.\u0275prov=r.Ib({token:e,factory:e.\u0275fac}),e})();var d=i("R0Ic"),h=i("YyRF"),u=i("7zfz");let b=(()=>{let e=class{constructor(e){this.el=e}onkeydown(e){if(!0!==this.pFocusTrapDisabled){e.preventDefault();let t=h.a.getFocusableElements(this.el.nativeElement);if(t&&t.length>0)if(document.activeElement){let i=t.indexOf(document.activeElement);e.shiftKey?-1==i||0===i?t[t.length-1].focus():t[i-1].focus():-1==i||i===t.length-1?t[0].focus():t[i+1].focus()}else t[0].focus()}}};return e.\u0275fac=function(t){return new(t||e)(r.Mb(r.l))},e.\u0275dir=r.Hb({type:e,selectors:[["","pFocusTrap",""]],hostBindings:function(e,t){1&e&&r.ac("keydown.tab",(function(e){return t.onkeydown(e)}))("keydown.shift.tab",(function(e){return t.onkeydown(e)}))},inputs:{pFocusTrapDisabled:"pFocusTrapDisabled"}}),e})(),p=(()=>{let e=class{};return e.\u0275mod=r.Kb({type:e}),e.\u0275inj=r.Jb({factory:function(t){return new(t||e)},imports:[[s.b]]}),e})();const g=["titlebar"],m=["content"],f=["footer"];function v(e,t){if(1&e&&(r.Sb(0,"span",15),r.zc(1),r.Rb()),2&e){const e=r.cc(4);r.Cb("id",e.id+"-label"),r.Bb(1),r.Ac(e.header)}}function w(e,t){if(1&e&&(r.Sb(0,"span",15),r.fc(1,1),r.Rb()),2&e){const e=r.cc(4);r.Cb("id",e.id+"-label")}}const y=function(){return{"ui-dialog-titlebar-icon ui-dialog-titlebar-maximize ui-corner-all":!0}};function x(e,t){if(1&e){const e=r.Tb();r.Sb(0,"a",16),r.ac("click",(function(){return r.rc(e),r.cc(4).maximize()}))("keydown.enter",(function(){return r.rc(e),r.cc(4).maximize()})),r.Nb(1,"span",1),r.Rb()}if(2&e){const e=r.cc(4);r.hc("ngClass",r.ic(2,y)),r.Bb(1),r.hc("ngClass",e.maximized?e.minimizeIcon:e.maximizeIcon)}}const C=function(){return{"ui-dialog-titlebar-icon ui-dialog-titlebar-close ui-corner-all":!0}};function S(e,t){if(1&e){const e=r.Tb();r.Sb(0,"a",16),r.ac("click",(function(t){return r.rc(e),r.cc(4).close(t)}))("keydown.enter",(function(t){return r.rc(e),r.cc(4).close(t)})),r.Nb(1,"span"),r.Rb()}if(2&e){const e=r.cc(4);r.hc("ngClass",r.ic(3,C)),r.Bb(1),r.Db(e.closeIcon)}}function k(e,t){if(1&e){const e=r.Tb();r.Sb(0,"div",10,11),r.ac("mousedown",(function(t){return r.rc(e),r.cc(3).initDrag(t)})),r.xc(2,v,2,2,"span",12),r.xc(3,w,2,1,"span",12),r.Sb(4,"div",13),r.xc(5,x,2,3,"a",14),r.xc(6,S,2,4,"a",14),r.Rb(),r.Rb()}if(2&e){const e=r.cc(3);r.Bb(2),r.hc("ngIf",e.header),r.Bb(1),r.hc("ngIf",e.headerFacet&&e.headerFacet.first),r.Bb(2),r.hc("ngIf",e.maximizable),r.Bb(1),r.hc("ngIf",e.closable)}}function I(e,t){1&e&&(r.Sb(0,"div",17,18),r.fc(2,2),r.Rb())}function z(e,t){if(1&e){const e=r.Tb();r.Sb(0,"div",19),r.ac("mousedown",(function(t){return r.rc(e),r.cc(3).initResize(t)})),r.Rb()}}const O=function(e,t,i,n){return{"ui-dialog ui-widget ui-widget-content ui-corner-all ui-shadow":!0,"ui-dialog-rtl":e,"ui-dialog-draggable":t,"ui-dialog-resizable":i,"ui-dialog-maximized":n}},R=function(e,t){return{transform:e,transition:t}},L=function(e){return{value:"visible",params:e}};function D(e,t){if(1&e){const e=r.Tb();r.Sb(0,"div",3,4),r.ac("@animation.start",(function(t){return r.rc(e),r.cc(2).onAnimationStart(t)}))("@animation.done",(function(t){return r.rc(e),r.cc(2).onAnimationEnd(t)})),r.xc(2,k,7,4,"div",5),r.Sb(3,"div",6,7),r.fc(5),r.Rb(),r.xc(6,I,3,0,"div",8),r.xc(7,z,1,0,"div",9),r.Rb()}if(2&e){const e=r.cc(2);r.Db(e.styleClass),r.hc("ngClass",r.mc(11,O,e.rtl,e.draggable,e.resizable,e.maximized))("ngStyle",e.style)("pFocusTrapDisabled",!1===e.focusTrap)("@animation",r.jc(19,L,r.kc(16,R,e.transformOptions,e.transitionOptions))),r.Cb("aria-labelledby",e.id+"-label"),r.Bb(2),r.hc("ngIf",e.showHeader),r.Bb(1),r.hc("ngStyle",e.contentStyle),r.Bb(3),r.hc("ngIf",e.footerFacet&&e.footerFacet.first),r.Bb(1),r.hc("ngIf",e.resizable)}}function E(e,t){if(1&e&&(r.Sb(0,"div",1),r.xc(1,D,8,21,"div",2),r.Rb()),2&e){const e=r.cc();r.Db(e.maskStyleClass),r.hc("ngClass",e.getMaskClass()),r.Bb(1),r.hc("ngIf",e.visible)}}const T=["*",[["p-header"]],[["p-footer"]]],j=["*","p-header","p-footer"];let F=0;const B=Object(d.g)([Object(d.l)({transform:"{{transform}}",opacity:0}),Object(d.e)("{{transition}}",Object(d.l)({transform:"none",opacity:1}))]),P=Object(d.g)([Object(d.e)("{{transition}}",Object(d.l)({transform:"{{transform}}",opacity:0}))]);let M=(()=>{let e=class{constructor(e,t,i,n){this.el=e,this.renderer=t,this.zone=i,this.cd=n,this.draggable=!0,this.resizable=!0,this.closeOnEscape=!0,this.closable=!0,this.showHeader=!0,this.blockScroll=!1,this.autoZIndex=!0,this.baseZIndex=0,this.minX=0,this.minY=0,this.focusOnShow=!0,this.keepInViewport=!0,this.focusTrap=!0,this.transitionOptions="150ms cubic-bezier(0, 0, 0.2, 1)",this.closeIcon="pi pi-times",this.minimizeIcon="pi pi-window-minimize",this.maximizeIcon="pi pi-window-maximize",this.onShow=new r.n,this.onHide=new r.n,this.visibleChange=new r.n,this.onResizeInit=new r.n,this.onResizeEnd=new r.n,this.id=`ui-dialog-${F++}`,this._style={},this._position="center",this.transformOptions="scale(0.7)"}get positionLeft(){return 0}set positionLeft(e){console.log("positionLeft property is deprecated.")}get positionTop(){return 0}set positionTop(e){console.log("positionTop property is deprecated.")}get responsive(){return!1}set responsive(e){console.log("Responsive property is deprecated.")}get breakpoint(){return 649}set breakpoint(e){console.log("Breakpoint property is not utilized and deprecated, use CSS media queries instead.")}get visible(){return this._visible}set visible(e){this._visible=e,this._visible&&!this.maskVisible&&(this.maskVisible=!0)}get style(){return this._style}set style(e){e&&(this._style=Object.assign({},e),this.originalStyle=e)}get position(){return this._position}set position(e){switch(this._position=e,e){case"topleft":case"bottomleft":case"left":this.transformOptions="translate3d(-100%, 0px, 0px)";break;case"topright":case"bottomright":case"right":this.transformOptions="translate3d(100%, 0px, 0px)";break;case"bottom":this.transformOptions="translate3d(0px, 100%, 0px)";break;case"top":this.transformOptions="translate3d(0px, -100%, 0px)";break;default:this.transformOptions="scale(0.7)"}}focus(){let e=h.a.findSingle(this.container,"button");e&&this.zone.runOutsideAngular(()=>{setTimeout(()=>e.focus(),5)})}close(e){this.visibleChange.emit(!1),e.preventDefault()}enableModality(){this.closable&&this.dismissableMask&&(this.maskClickListener=this.renderer.listen(this.wrapper,"click",e=>{this.container.isSameNode(e.target)||this.container.contains(e.target)||this.close(e)})),this.modal&&h.a.addClass(document.body,"ui-overflow-hidden")}disableModality(){this.wrapper&&(this.dismissableMask&&this.unbindMaskClickListener(),this.modal&&h.a.removeClass(document.body,"ui-overflow-hidden"),this.cd.destroyed||this.cd.detectChanges())}maximize(){this.maximized=!this.maximized,this.modal||this.blockScroll||(this.maximized?h.a.addClass(document.body,"ui-overflow-hidden"):h.a.removeClass(document.body,"ui-overflow-hidden"))}unbindMaskClickListener(){this.maskClickListener&&(this.maskClickListener(),this.maskClickListener=null)}moveOnTop(){this.autoZIndex&&(this.container.style.zIndex=String(this.baseZIndex+ ++h.a.zindex),this.wrapper.style.zIndex=String(this.baseZIndex+(h.a.zindex-1)))}getMaskClass(){let e={"ui-dialog-mask":!0,"ui-widget-overlay":this.modal,"ui-dialog-visible":this.maskVisible,"ui-dialog-mask-scrollblocker":this.modal||this.blockScroll};return e[this.getPositionClass().toString()]=!0,e}getPositionClass(){const e=["left","right","top","topleft","topright","bottom","bottomleft","bottomright"].find(e=>e===this.position);return e?`ui-dialog-${e}`:""}initDrag(e){h.a.hasClass(e.target,"ui-dialog-titlebar-icon")||h.a.hasClass(e.target.parentElement,"ui-dialog-titlebar-icon")||this.draggable&&(this.dragging=!0,this.lastPageX=e.pageX,this.lastPageY=e.pageY,this.container.style.margin="0",h.a.addClass(document.body,"ui-unselectable-text"))}onKeydown(e){if(this.focusTrap&&9===e.which){e.preventDefault();let t=h.a.getFocusableElements(this.container);if(t&&t.length>0)if(document.activeElement){let i=t.indexOf(document.activeElement);e.shiftKey?-1==i||0===i?t[t.length-1].focus():t[i-1].focus():-1==i||i===t.length-1?t[0].focus():t[i+1].focus()}else t[0].focus()}}onDrag(e){if(this.dragging){let t=h.a.getOuterWidth(this.container),i=h.a.getOuterHeight(this.container),n=e.pageX-this.lastPageX,s=e.pageY-this.lastPageY,a=h.a.getOffset(this.container),o=a.left+n,r=a.top+s,c=h.a.getViewport();this.container.style.position="fixed",this.keepInViewport?(o>=this.minX&&o+t<c.width&&(this._style.left=o+"px",this.lastPageX=e.pageX,this.container.style.left=o+"px"),r>=this.minY&&r+i<c.height&&(this._style.top=r+"px",this.lastPageY=e.pageY,this.container.style.top=r+"px")):(this.lastPageX=e.pageX,this.container.style.left=o+"px",this.lastPageY=e.pageY,this.container.style.top=r+"px")}}endDrag(e){this.draggable&&(this.dragging=!1,h.a.removeClass(document.body,"ui-unselectable-text"),this.cd.detectChanges())}resetPosition(){this.container.style.position="",this.container.style.left="",this.container.style.top="",this.container.style.margin=""}initResize(e){this.resizable&&(this.resizing=!0,this.lastPageX=e.pageX,this.lastPageY=e.pageY,h.a.addClass(document.body,"ui-unselectable-text"),this.onResizeInit.emit(e))}onResize(e){if(this.resizing){let t=e.pageX-this.lastPageX,i=e.pageY-this.lastPageY,n=h.a.getOuterWidth(this.container),s=h.a.getOuterHeight(this.container),a=h.a.getOuterHeight(this.contentViewChild.nativeElement),o=n+t,r=s+i,c=this.container.style.minWidth,l=this.container.style.minHeight,d=h.a.getOffset(this.container),u=h.a.getViewport();(!c||o>parseInt(c))&&d.left+o<u.width&&(this._style.width=o+"px",this.container.style.width=this._style.width),(!l||r>parseInt(l))&&d.top+r<u.height&&(this.contentViewChild.nativeElement.style.height=a+i+"px"),this.lastPageX=e.pageX,this.lastPageY=e.pageY}}resizeEnd(e){this.resizing&&(this.resizing=!1,h.a.removeClass(document.body,"ui-unselectable-text"),this.onResizeEnd.emit(e))}bindGlobalListeners(){this.draggable&&(this.bindDocumentDragListener(),this.bindDocumentDragEndListener()),this.resizable&&this.bindDocumentResizeListeners(),this.closeOnEscape&&this.closable&&this.bindDocumentEscapeListener()}unbindGlobalListeners(){this.unbindDocumentDragListener(),this.unbindDocumentDragEndListener(),this.unbindDocumentResizeListeners(),this.unbindDocumentEscapeListener()}bindDocumentDragListener(){this.zone.runOutsideAngular(()=>{this.documentDragListener=this.onDrag.bind(this),window.document.addEventListener("mousemove",this.documentDragListener)})}unbindDocumentDragListener(){this.documentDragListener&&(window.document.removeEventListener("mousemove",this.documentDragListener),this.documentDragListener=null)}bindDocumentDragEndListener(){this.zone.runOutsideAngular(()=>{this.documentDragEndListener=this.endDrag.bind(this),window.document.addEventListener("mouseup",this.documentDragEndListener)})}unbindDocumentDragEndListener(){this.documentDragEndListener&&(window.document.removeEventListener("mouseup",this.documentDragEndListener),this.documentDragEndListener=null)}bindDocumentResizeListeners(){this.zone.runOutsideAngular(()=>{this.documentResizeListener=this.onResize.bind(this),this.documentResizeEndListener=this.resizeEnd.bind(this),window.document.addEventListener("mousemove",this.documentResizeListener),window.document.addEventListener("mouseup",this.documentResizeEndListener)})}unbindDocumentResizeListeners(){this.documentResizeListener&&this.documentResizeEndListener&&(window.document.removeEventListener("mousemove",this.documentResizeListener),window.document.removeEventListener("mouseup",this.documentResizeEndListener),this.documentResizeListener=null,this.documentResizeEndListener=null)}bindDocumentEscapeListener(){this.documentEscapeListener=this.renderer.listen("document","keydown",e=>{27==e.which&&parseInt(this.container.style.zIndex)===h.a.zindex+this.baseZIndex&&this.close(e)})}unbindDocumentEscapeListener(){this.documentEscapeListener&&(this.documentEscapeListener(),this.documentEscapeListener=null)}appendContainer(){this.appendTo&&("body"===this.appendTo?document.body.appendChild(this.wrapper):h.a.appendChild(this.wrapper,this.appendTo))}restoreAppend(){this.container&&this.appendTo&&this.el.nativeElement.appendChild(this.wrapper)}onAnimationStart(e){switch(e.toState){case"visible":this.container=e.element,this.wrapper=this.container.parentElement,this.onShow.emit({}),this.appendContainer(),this.moveOnTop(),this.bindGlobalListeners(),this.modal&&this.enableModality(),!this.modal&&this.blockScroll&&h.a.addClass(document.body,"ui-overflow-hidden"),this.focusOnShow&&this.focus()}}onAnimationEnd(e){switch(e.toState){case"void":this.onContainerDestroy(),this.onHide.emit({})}}onContainerDestroy(){this.unbindGlobalListeners(),this.dragging=!1,this.maskVisible=!1,this.maximized&&(h.a.removeClass(document.body,"ui-overflow-hidden"),this.maximized=!1),this.modal&&this.disableModality(),this.blockScroll&&h.a.removeClass(document.body,"ui-overflow-hidden"),this.container=null,this.wrapper=null,this._style=this.originalStyle?Object.assign({},this.originalStyle):{}}ngOnDestroy(){this.container&&(this.restoreAppend(),this.onContainerDestroy())}};return e.\u0275fac=function(t){return new(t||e)(r.Mb(r.l),r.Mb(r.E),r.Mb(r.A),r.Mb(r.h))},e.\u0275cmp=r.Gb({type:e,selectors:[["p-dialog"]],contentQueries:function(e,t,i){var n;1&e&&(r.Fb(i,u.b,!1),r.Fb(i,u.a,!1)),2&e&&(r.pc(n=r.bc())&&(t.headerFacet=n),r.pc(n=r.bc())&&(t.footerFacet=n))},viewQuery:function(e,t){var i;1&e&&(r.Cc(g,!0),r.Cc(m,!0),r.Cc(f,!0)),2&e&&(r.pc(i=r.bc())&&(t.headerViewChild=i.first),r.pc(i=r.bc())&&(t.contentViewChild=i.first),r.pc(i=r.bc())&&(t.footerViewChild=i.first))},inputs:{draggable:"draggable",resizable:"resizable",closeOnEscape:"closeOnEscape",closable:"closable",showHeader:"showHeader",blockScroll:"blockScroll",autoZIndex:"autoZIndex",baseZIndex:"baseZIndex",minX:"minX",minY:"minY",focusOnShow:"focusOnShow",keepInViewport:"keepInViewport",focusTrap:"focusTrap",transitionOptions:"transitionOptions",closeIcon:"closeIcon",minimizeIcon:"minimizeIcon",maximizeIcon:"maximizeIcon",positionLeft:"positionLeft",positionTop:"positionTop",responsive:"responsive",breakpoint:"breakpoint",visible:"visible",style:"style",position:"position",header:"header",contentStyle:"contentStyle",modal:"modal",dismissableMask:"dismissableMask",rtl:"rtl",appendTo:"appendTo",styleClass:"styleClass",maskStyleClass:"maskStyleClass",maximizable:"maximizable"},outputs:{onShow:"onShow",onHide:"onHide",visibleChange:"visibleChange",onResizeInit:"onResizeInit",onResizeEnd:"onResizeEnd"},ngContentSelectors:j,decls:1,vars:1,consts:[[3,"class","ngClass",4,"ngIf"],[3,"ngClass"],["pFocusTrap","","role","dialog",3,"ngClass","ngStyle","class","pFocusTrapDisabled",4,"ngIf"],["pFocusTrap","","role","dialog",3,"ngClass","ngStyle","pFocusTrapDisabled"],["container",""],["class","ui-dialog-titlebar ui-widget-header ui-helper-clearfix ui-corner-top",3,"mousedown",4,"ngIf"],[1,"ui-dialog-content","ui-widget-content",3,"ngStyle"],["content",""],["class","ui-dialog-footer ui-widget-content",4,"ngIf"],["class","ui-resizable-handle ui-resizable-se ui-icon ui-icon-gripsmall-diagonal-se","style","z-index: 90;",3,"mousedown",4,"ngIf"],[1,"ui-dialog-titlebar","ui-widget-header","ui-helper-clearfix","ui-corner-top",3,"mousedown"],["titlebar",""],["class","ui-dialog-title",4,"ngIf"],[1,"ui-dialog-titlebar-icons"],["tabindex","0","role","button",3,"ngClass","click","keydown.enter",4,"ngIf"],[1,"ui-dialog-title"],["tabindex","0","role","button",3,"ngClass","click","keydown.enter"],[1,"ui-dialog-footer","ui-widget-content"],["footer",""],[1,"ui-resizable-handle","ui-resizable-se","ui-icon","ui-icon-gripsmall-diagonal-se",2,"z-index","90",3,"mousedown"]],template:function(e,t){1&e&&(r.gc(T),r.xc(0,E,2,4,"div",0)),2&e&&r.hc("ngIf",t.maskVisible)},directives:[s.j,s.h,b,s.k],encapsulation:2,data:{animation:[Object(d.n)("animation",[Object(d.m)("void => visible",[Object(d.o)(B)]),Object(d.m)("visible => void",[Object(d.o)(P)])])]}}),e})(),A=(()=>{let e=class{};return e.\u0275mod=r.Kb({type:e}),e.\u0275inj=r.Jb({factory:function(t){return new(t||e)},imports:[[s.b,p],u.e]}),e})();function _(e,t){if(1&e&&(r.Sb(0,"span",7),r.zc(1),r.Rb()),2&e){const e=r.cc();r.Bb(1),r.Bc(" ",e.header," ")}}function X(e,t){1&e&&r.fc(0,1,["*ngIf","hasHeaderFacet"])}function Y(e,t){1&e&&r.Ob(0)}function N(e,t){if(1&e&&(r.Qb(0),r.xc(1,Y,1,0,"ng-container",8),r.Pb()),2&e){const e=r.cc();r.Bb(1),r.hc("ngTemplateOutlet",e.contentTemplate)}}const V=["*",[["p-header"]]],H=function(e,t){return{"ui-state-active":e,"ui-state-disabled":t}},Z=function(e){return{transitionParams:e,height:"*"}},Q=function(e){return{value:"visible",params:e}},J=function(e){return{transitionParams:e,height:"0"}},K=function(e){return{value:"hidden",params:e}},G=function(e){return{"ui-accordion-content-wrapper-overflown":e}},W=["*","p-header"],q=["*"];let U=0,$=(()=>{let e=class{constructor(e,t){this.changeDetector=t,this.cache=!0,this.selectedChange=new r.n,this.transitionOptions="400ms cubic-bezier(0.86, 0, 0.07, 1)",this.id=`ui-accordiontab-${U++}`,this.accordion=e}get selected(){return this._selected}set selected(e){this._selected=e,this.loaded||this.changeDetector.detectChanges()}get animating(){return this._animating}set animating(e){this._animating=e,this.changeDetector.destroyed||this.changeDetector.detectChanges()}ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"content":default:this.contentTemplate=e.template}})}toggle(e){if(this.disabled||this.animating)return!1;this.animating=!0;let t=this.findTabIndex();if(this.selected)this.selected=!1,this.accordion.onClose.emit({originalEvent:e,index:t});else{if(!this.accordion.multiple)for(var i=0;i<this.accordion.tabs.length;i++)this.accordion.tabs[i].selected=!1,this.accordion.tabs[i].selectedChange.emit(!1);this.selected=!0,this.loaded=!0,this.accordion.onOpen.emit({originalEvent:e,index:t})}this.selectedChange.emit(this.selected),this.accordion.updateActiveIndex(),e.preventDefault()}findTabIndex(){let e=-1;for(var t=0;t<this.accordion.tabs.length;t++)if(this.accordion.tabs[t]==this){e=t;break}return e}get hasHeaderFacet(){return this.headerFacet&&this.headerFacet.length>0}onToggleDone(e){this.animating=!1}onKeydown(e){32!==e.which&&13!==e.which||(this.toggle(e),e.preventDefault())}ngOnDestroy(){this.accordion.tabs.splice(this.findTabIndex(),1)}};return e.\u0275fac=function(t){return new(t||e)(r.Mb(Object(r.T)(()=>ee)),r.Mb(r.h))},e.\u0275cmp=r.Gb({type:e,selectors:[["p-accordionTab"]],contentQueries:function(e,t,i){var n;1&e&&(r.Fb(i,u.b,!1),r.Fb(i,u.d,!1)),2&e&&(r.pc(n=r.bc())&&(t.headerFacet=n),r.pc(n=r.bc())&&(t.templates=n))},inputs:{cache:"cache",transitionOptions:"transitionOptions",selected:"selected",header:"header",disabled:"disabled"},outputs:{selectedChange:"selectedChange"},ngContentSelectors:W,decls:9,vars:27,consts:[[1,"ui-accordion-header","ui-state-default","ui-corner-all",3,"ngClass"],["role","tab",3,"click","keydown"],[1,"ui-accordion-toggle-icon",3,"ngClass"],["class","ui-accordion-header-text",4,"ngIf"],[4,"ngIf"],["role","region",1,"ui-accordion-content-wrapper",3,"ngClass"],[1,"ui-accordion-content","ui-widget-content"],[1,"ui-accordion-header-text"],[4,"ngTemplateOutlet"]],template:function(e,t){1&e&&(r.gc(V),r.Sb(0,"div",0),r.Sb(1,"a",1),r.ac("click",(function(e){return t.toggle(e)}))("keydown",(function(e){return t.onKeydown(e)})),r.Nb(2,"span",2),r.xc(3,_,2,1,"span",3),r.xc(4,X,1,0,void 0,4),r.Rb(),r.Rb(),r.Sb(5,"div",5),r.ac("@tabContent.done",(function(e){return t.onToggleDone(e)})),r.Sb(6,"div",6),r.fc(7),r.xc(8,N,2,1,"ng-container",4),r.Rb(),r.Rb()),2&e&&(r.hc("ngClass",r.kc(14,H,t.selected,t.disabled)),r.Bb(1),r.Cb("tabindex",t.disabled?-1:0)("id",t.id)("aria-controls",t.id+"-content")("aria-expanded",t.selected),r.Bb(1),r.hc("ngClass",t.selected?t.accordion.collapseIcon:t.accordion.expandIcon),r.Bb(1),r.hc("ngIf",!t.hasHeaderFacet),r.Bb(1),r.hc("ngIf",t.hasHeaderFacet),r.Bb(1),r.hc("@tabContent",t.selected?r.jc(19,Q,r.jc(17,Z,t.animating?t.transitionOptions:"0ms")):r.jc(23,K,r.jc(21,J,t.transitionOptions)))("ngClass",r.jc(25,G,!t.selected||t.animating)),r.Cb("id",t.id+"-content")("aria-hidden",!t.selected)("aria-labelledby",t.id),r.Bb(3),r.hc("ngIf",t.contentTemplate&&(t.cache?t.loaded:t.selected)))},directives:[s.h,s.j,s.l],encapsulation:2,data:{animation:[Object(d.n)("tabContent",[Object(d.k)("hidden",Object(d.l)({height:"0"})),Object(d.k)("void",Object(d.l)({height:"{{height}}"}),{params:{height:"0"}}),Object(d.k)("visible",Object(d.l)({height:"*"})),Object(d.m)("visible <=> hidden",Object(d.e)("{{transitionParams}}")),Object(d.m)("void => hidden",Object(d.e)("{{transitionParams}}")),Object(d.m)("void => visible",Object(d.e)("{{transitionParams}}"))])]}}),e})(),ee=(()=>{let e=class{constructor(e,t){this.el=e,this.changeDetector=t,this.onClose=new r.n,this.onOpen=new r.n,this.expandIcon="pi pi-fw pi-chevron-right",this.collapseIcon="pi pi-fw pi-chevron-down",this.activeIndexChange=new r.n,this.tabs=[]}ngAfterContentInit(){this.initTabs(),this.tabListSubscription=this.tabList.changes.subscribe(e=>{this.initTabs(),this.changeDetector.markForCheck()})}initTabs(){this.tabs=this.tabList.toArray(),this.updateSelectionState()}getBlockableElement(){return this.el.nativeElement.children[0]}get activeIndex(){return this._activeIndex}set activeIndex(e){this._activeIndex=e,this.preventActiveIndexPropagation?this.preventActiveIndexPropagation=!1:this.updateSelectionState()}updateSelectionState(){if(this.tabs&&this.tabs.length&&null!=this._activeIndex)for(let e=0;e<this.tabs.length;e++){let t=this.multiple?this._activeIndex.includes(e):e===this._activeIndex;t!==this.tabs[e].selected&&(this.tabs[e].animating=!0,this.tabs[e].selected=t,this.tabs[e].selectedChange.emit(t))}}updateActiveIndex(){let e=this.multiple?[]:null;this.tabs.forEach((t,i)=>{if(t.selected){if(!this.multiple)return void(e=i);e.push(i)}}),this.preventActiveIndexPropagation=!0,this.activeIndexChange.emit(e)}ngOnDestroy(){this.tabListSubscription&&this.tabListSubscription.unsubscribe()}};return e.\u0275fac=function(t){return new(t||e)(r.Mb(r.l),r.Mb(r.h))},e.\u0275cmp=r.Gb({type:e,selectors:[["p-accordion"]],contentQueries:function(e,t,i){var n;1&e&&r.Fb(i,$,!1),2&e&&r.pc(n=r.bc())&&(t.tabList=n)},inputs:{expandIcon:"expandIcon",collapseIcon:"collapseIcon",activeIndex:"activeIndex",multiple:"multiple",style:"style",styleClass:"styleClass"},outputs:{onClose:"onClose",onOpen:"onOpen",activeIndexChange:"activeIndexChange"},ngContentSelectors:q,decls:2,vars:4,consts:[["role","tablist",3,"ngClass","ngStyle"]],template:function(e,t){1&e&&(r.gc(),r.Sb(0,"div",0),r.fc(1),r.Rb()),2&e&&(r.Db(t.styleClass),r.hc("ngClass","ui-accordion ui-widget ui-helper-reset")("ngStyle",t.style))},directives:[s.h,s.k],encapsulation:2}),e})(),te=(()=>{let e=class{};return e.\u0275mod=r.Kb({type:e}),e.\u0275inj=r.Jb({factory:function(t){return new(t||e)},imports:[[s.b],u.e]}),e})();const ie=function(){return{width:"50vw"}};let ne=null,se=0,ae=0,oe={visio:QuarkRenderer.VisioLink,line:QuarkRenderer.Line,image:QuarkRenderer.Image,start:QuarkRenderer.Circle,end:QuarkRenderer.Circle,process:QuarkRenderer.Rect},re={visio:{position:[0,0],draggable:!0,isCable:!0,style:{lineWidth:2,text:"This is Visio link."},shape:{points:[[10,10],[100,10]]}},line:{position:[0,0],draggable:!0,isCable:!0,style:{lineWidth:2,text:"text on line"},shape:{x1:0,y1:0,x2:100,y2:0,percent:1}},image:{position:[0,0],scale:[1,1],style:{x:0,y:0,image:null,width:64,height:64},draggable:!0,linkable:!0},start:{position:[0,0],shape:{cx:16,cy:16,r:16},style:{stroke:"#000",fill:"#fff",lineWidth:2},draggable:!0,linkable:!0},end:{position:[0,0],shape:{cx:16,cy:16,r:16},style:{stroke:"#000",fill:"#fff",lineWidth:4},draggable:!0,linkable:!0},process:{position:[0,0],shape:{r:5,width:64,height:32},style:{stroke:"#000",fill:"#fff",lineWidth:2},draggable:!0,linkable:!0}};const ce={dropZone:null,dragged:null};function le(e){let t=e.target;if(t&&"IMG"==t.nodeName){const i=t.src;ce.dragged=t,e.dataTransfer.effectAllowed="copy",e.dataTransfer.setData("text/uri-list",i),e.dataTransfer.setData("text/plain",i)}}function de(e){}function he(e){e.preventDefault()}function ue(e){}function be(e,t){for(let i=0;i<e.length;++i)if(e[i]===t)return!0;return!1}function pe(e){ce.dragged&&e.target&&be(e.dataTransfer.types,"text/uri-list")&&(e.preventDefault(),e.dataTransfer.dropEffect="copy")}function ge(e){const t=ce.dragged;if(t&&e.target&&be(e.dataTransfer.types,"text/uri-list")){if(e.preventDefault(),!t.dataset||!t.dataset.type)return;let i=oe[t.dataset.type],n=re[t.dataset.type];n.position=[e.clientX-ae,e.clientY-se],"image"===t.dataset.type&&(n.style.image=t.getAttribute("src"));let s=new i(n);ne.add(s)}}const me=[{path:"",component:(()=>{class e{constructor(e){this.examplesService=e,this.display=!1,this.content=""}ngOnInit(){}ngAfterContentInit(){ce.dropZone=document.querySelector("#dropZone");let e=function(e){let t=e.getBoundingClientRect(),i=window.pageXOffset||document.documentElement.scrollLeft,n=window.pageYOffset||document.documentElement.scrollTop;return{top:t.top+n,left:t.left+i}}(ce.dropZone);ae=e.left,se=e.top;const t=document.querySelector(".elements"),i=ce.dropZone;t.addEventListener("dragstart",le),t.addEventListener("dragend",de),i.addEventListener("dragenter",pe),i.addEventListener("dragleave",ue),i.addEventListener("dragover",he),i.addEventListener("drop",ge),ne=QuarkRenderer.init(document.getElementById("dropZone"))}saveFlow(){this.display=!0;let e=ne.toJSONObject();e=JSON.stringify(e),this.content=e}loadFlow(){this.examplesService.loadFlow().subscribe(e=>{ne.fromJSONObject(e)},e=>console.error(e))}}return e.\u0275fac=function(t){return new(t||e)(r.Mb(l))},e.\u0275cmp=r.Gb({type:e,selectors:[["example-main"]],decls:40,vars:8,consts:[["header","JSON",3,"visible","modal","visibleChange"],["draggable","false",1,"container"],["draggable","false",1,"row"],["draggable","false",1,"col-md-3"],[3,"multiple"],["header","\u6d41\u7a0b\u56fe"],[1,"elements"],[1,"row"],[1,"col-md-3"],["data-type","start","draggable","true","src","/assets/imgs/flow/start.png",1,"thumbnail",2,"width","64px","height","64px"],["data-type","end","draggable","true","src","/assets/imgs/flow/end.png",1,"thumbnail",2,"width","64px","height","64px"],["data-type","process","draggable","true","src","/assets/imgs/flow/process.jpg",1,"thumbnail",2,"width","64px","height","64px"],["data-type","image","draggable","true","src","/assets/imgs/flow/decision.png",1,"thumbnail",2,"width","64px","height","64px"],["data-type","image","draggable","true","src","/assets/imgs/flow/database.png",1,"thumbnail",2,"width","64px","height","64px"],["data-type","visio","draggable","true","src","/assets/imgs/flow/vector-curve-line.png",1,"thumbnail",2,"width","64px","height","64px"],["data-type","line","draggable","true","src","/assets/imgs/flow/line.png",1,"thumbnail",2,"width","64px","height","64px"],[1,"col-md-9"],[1,"col-md-12"],["role","group","aria-label","First group",1,"btn-group"],["type","button",1,"btn","btn-default",3,"click"],["draggable","false",1,"row",2,"padding-top","15px"],["draggable","false",1,"col-md-12"],["draggable","false","id","dropZone",2,"width","1000px","height","800px","background-color","#d0d0d0"]],template:function(e,t){1&e&&(r.Sb(0,"p-dialog",0),r.ac("visibleChange",(function(e){return t.display=e})),r.zc(1),r.Rb(),r.Sb(2,"div",1),r.Sb(3,"div",2),r.Sb(4,"div",3),r.Sb(5,"p-accordion",4),r.Sb(6,"p-accordionTab",5),r.Sb(7,"div",6),r.Sb(8,"div",7),r.Sb(9,"div",8),r.Nb(10,"img",9),r.Rb(),r.Rb(),r.Sb(11,"div",7),r.Sb(12,"div",8),r.Nb(13,"img",10),r.Rb(),r.Rb(),r.Sb(14,"div",7),r.Sb(15,"div",8),r.Nb(16,"img",11),r.Rb(),r.Rb(),r.Sb(17,"div",7),r.Sb(18,"div",8),r.Nb(19,"img",12),r.Rb(),r.Rb(),r.Sb(20,"div",7),r.Sb(21,"div",8),r.Nb(22,"img",13),r.Rb(),r.Rb(),r.Sb(23,"div",7),r.Sb(24,"div",8),r.Nb(25,"img",14),r.Rb(),r.Rb(),r.Sb(26,"div",7),r.Sb(27,"div",8),r.Nb(28,"img",15),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Sb(29,"div",16),r.Sb(30,"div",7),r.Sb(31,"div",17),r.Sb(32,"div",18),r.Sb(33,"button",19),r.ac("click",(function(){return t.loadFlow()})),r.zc(34,"\u52a0\u8f7d"),r.Rb(),r.Sb(35,"button",19),r.ac("click",(function(){return t.saveFlow()})),r.zc(36,"\u4fdd\u5b58"),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Sb(37,"div",20),r.Sb(38,"div",21),r.Nb(39,"div",22),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Rb()),2&e&&(r.vc(r.ic(7,ie)),r.hc("visible",t.display)("modal",!0),r.Bb(1),r.Bc(" ",t.content,"\n"),r.Bb(1),r.hc("@flyIn","active"),r.Bb(3),r.hc("multiple",!0))},directives:[M,ee,$],styles:[""],data:{animation:[o.a]}}),e})()}];let fe=(()=>{class e{}return e.\u0275mod=r.Kb({type:e}),e.\u0275inj=r.Jb({factory:function(t){return new(t||e)},imports:[[n.e.forChild(me)],n.e]}),e})(),ve=(()=>{class e{}return e.\u0275mod=r.Kb({type:e}),e.\u0275inj=r.Jb({factory:function(t){return new(t||e)},providers:[l],imports:[[s.b,a.a,n.e,A,fe,te]]}),e})()}}]);