"use strict";(self.webpackChunkngx_bootstrap_docs=self.webpackChunkngx_bootstrap_docs||[]).push([[294],{5963:(x,P,f)=>{f.d(P,{H:()=>B});var c=f(68306),d=f(34986),b=f(93532);function B(g=0,O,T=d.P){let m=-1;return null!=O&&((0,b.K)(O)?T=O:m=O),new c.y(C=>{let S=function(g){return g instanceof Date&&!isNaN(g)}(g)?+g-T.now():g;S<0&&(S=0);let M=0;return T.schedule(function(){C.closed||(C.next(M++),0<=m?this.schedule(void 0,m):C.complete())},S)})}},34986:(x,P,f)=>{f.d(P,{z:()=>b,P:()=>D});var c=f(84408);const b=new(f(640).v)(c.o),D=b},70655:(x,P,f)=>{function B(t,e,n,o){var a,r=arguments.length,i=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var u=t.length-1;u>=0;u--)(a=t[u])&&(i=(r<3?a(i):r>3?a(e,n,i):a(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i}function O(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}f.d(P,{gn:()=>B,w6:()=>O})},59294:(x,P,f)=>{f.d(P,{DS:()=>m,i9:()=>M,z8:()=>R});var c=f(14893),d=f(70033),b=f(15197),D=f(70655),B=f(5963),g=f(29062),O=f(69808);const T=["*"];let m=(()=>{class p{constructor(){this.adaptivePosition=!0,this.placement="top",this.triggers="hover focus",this.delay=0}}return p.\u0275fac=function(s){return new(s||p)},p.\u0275prov=c.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),p})(),C=(()=>{class p{constructor(s){Object.assign(this,s)}get _bsVersions(){return(0,d.Wl)()}ngAfterViewInit(){this.classMap={in:!1,fade:!1},this.placement&&(this._bsVersions.isBs5&&(this.placement=b.Bz[this.placement]),this.classMap[this.placement]=!0),this.classMap[`tooltip-${this.placement}`]=!0,this.classMap.in=!0,this.animation&&(this.classMap.fade=!0),this.containerClass&&(this.classMap[this.containerClass]=!0)}}return p.\u0275fac=function(s){return new(s||p)(c.Y36(m))},p.\u0275cmp=c.Xpm({type:p,selectors:[["bs-tooltip-container"]],hostAttrs:["role","tooltip"],hostVars:7,hostBindings:function(s,h){2&s&&(c.uIk("id",h.id),c.Tol("tooltip in tooltip-"+h.placement+" bs-tooltip-"+h.placement+" "+h.placement+" "+h.containerClass),c.ekj("show",!h._bsVersions.isBs3)("bs3",h._bsVersions.isBs3))},ngContentSelectors:T,decls:3,vars:0,consts:[[1,"tooltip-arrow","arrow"],[1,"tooltip-inner"]],template:function(s,h){1&s&&(c.F$t(),c._UZ(0,"div",0),c.TgZ(1,"div",1),c.Hsn(2),c.qZA())},styles:[".tooltip[_nghost-%COMP%]{display:block;pointer-events:none}.bs3.tooltip.top[_nghost-%COMP%] > .arrow[_ngcontent-%COMP%]{margin-left:-2px}.bs3.tooltip.bottom[_nghost-%COMP%]{margin-top:0}.bs3.bs-tooltip-left[_nghost-%COMP%], .bs3.bs-tooltip-right[_nghost-%COMP%]{margin:0}.bs3.bs-tooltip-right[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%], .bs3.bs-tooltip-left[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%]{margin:.3rem 0}"],changeDetection:0}),p})(),S=0,M=(()=>{class p{constructor(s,h,E,A,H,L){this._elementRef=A,this._renderer=H,this._positionService=L,this.tooltipId=S++,this.adaptivePosition=!0,this.tooltipChange=new c.vpe,this.placement="top",this.triggers="hover focus",this.containerClass="",this.isDisabled=!1,this.delay=0,this.tooltipAnimation=!0,this.tooltipFadeDuration=150,this.tooltipStateChanged=new c.vpe,this._tooltip=h.createLoader(this._elementRef,s,this._renderer).provide({provide:m,useValue:E}),Object.assign(this,E),this.onShown=this._tooltip.onShown,this.onHidden=this._tooltip.onHidden}get isOpen(){return this._tooltip.isShown}set isOpen(s){s?this.show():this.hide()}set htmlContent(s){(0,d.O4)("tooltipHtml was deprecated, please use `tooltip` instead"),this.tooltip=s}set _placement(s){(0,d.O4)("tooltipPlacement was deprecated, please use `placement` instead"),this.placement=s}set _isOpen(s){(0,d.O4)("tooltipIsOpen was deprecated, please use `isOpen` instead"),this.isOpen=s}get _isOpen(){return(0,d.O4)("tooltipIsOpen was deprecated, please use `isOpen` instead"),this.isOpen}set _enable(s){(0,d.O4)("tooltipEnable was deprecated, please use `isDisabled` instead"),this.isDisabled=!s}get _enable(){return(0,d.O4)("tooltipEnable was deprecated, please use `isDisabled` instead"),this.isDisabled}set _appendToBody(s){(0,d.O4)('tooltipAppendToBody was deprecated, please use `container="body"` instead'),this.container=s?"body":this.container}get _appendToBody(){return(0,d.O4)('tooltipAppendToBody was deprecated, please use `container="body"` instead'),"body"===this.container}set _popupClass(s){(0,d.O4)("tooltipClass deprecated")}set _tooltipContext(s){(0,d.O4)("tooltipContext deprecated")}set _tooltipPopupDelay(s){(0,d.O4)("tooltipPopupDelay is deprecated, use `delay` instead"),this.delay=s}get _tooltipTrigger(){return(0,d.O4)("tooltipTrigger was deprecated, please use `triggers` instead"),this.triggers}set _tooltipTrigger(s){(0,d.O4)("tooltipTrigger was deprecated, please use `triggers` instead"),this.triggers=(s||"").toString()}ngOnInit(){this._tooltip.listen({triggers:this.triggers,show:()=>this.show()}),this.tooltipChange.subscribe(s=>{s||this._tooltip.hide()}),this.onShown.subscribe(()=>{this.setAriaDescribedBy()}),this.onHidden.subscribe(()=>{this.setAriaDescribedBy()})}setAriaDescribedBy(){this._ariaDescribedby=this.isOpen?`tooltip-${this.tooltipId}`:void 0,this._ariaDescribedby?this._renderer.setAttribute(this._elementRef.nativeElement,"aria-describedby",this._ariaDescribedby):this._renderer.removeAttribute(this._elementRef.nativeElement,"aria-describedby")}toggle(){if(this.isOpen)return this.hide();this.show()}show(){if(this._positionService.setOptions({modifiers:{flip:{enabled:this.adaptivePosition},preventOverflow:{enabled:this.adaptivePosition,boundariesElement:this.boundariesElement||"scrollParent"}}}),this.isOpen||this.isDisabled||this._delayTimeoutId||!this.tooltip)return;const s=()=>{this._delayTimeoutId&&(this._delayTimeoutId=void 0),this._tooltip.attach(C).to(this.container).position({attachment:this.placement}).show({content:this.tooltip,placement:this.placement,containerClass:this.containerClass,id:`tooltip-${this.tooltipId}`})},h=()=>{this._tooltipCancelShowFn&&this._tooltipCancelShowFn()};this.delay?(this._delaySubscription&&this._delaySubscription.unsubscribe(),this._delaySubscription=(0,B.H)(this.delay).subscribe(()=>{s(),h()}),this.triggers&&(0,d.AL)(this.triggers).forEach(E=>{!E.close||(this._tooltipCancelShowFn=this._renderer.listen(this._elementRef.nativeElement,E.close,()=>{var A;null===(A=this._delaySubscription)||void 0===A||A.unsubscribe(),h()}))})):s()}hide(){var s;this._delayTimeoutId&&(clearTimeout(this._delayTimeoutId),this._delayTimeoutId=void 0),this._tooltip.isShown&&((null===(s=this._tooltip.instance)||void 0===s?void 0:s.classMap)&&(this._tooltip.instance.classMap.in=!1),setTimeout(()=>{this._tooltip.hide()},this.tooltipFadeDuration))}ngOnDestroy(){this._tooltip.dispose(),this.tooltipChange.unsubscribe(),this._delaySubscription&&this._delaySubscription.unsubscribe(),this.onShown.unsubscribe(),this.onHidden.unsubscribe()}}return p.\u0275fac=function(s){return new(s||p)(c.Y36(c.s_b),c.Y36(g.oj),c.Y36(m),c.Y36(c.SBq),c.Y36(c.Qsj),c.Y36(b.sA))},p.\u0275dir=c.lG2({type:p,selectors:[["","tooltip",""],["","tooltipHtml",""]],inputs:{adaptivePosition:"adaptivePosition",tooltip:"tooltip",placement:"placement",triggers:"triggers",container:"container",containerClass:"containerClass",boundariesElement:"boundariesElement",isOpen:"isOpen",isDisabled:"isDisabled",delay:"delay",htmlContent:["tooltipHtml","htmlContent"],_placement:["tooltipPlacement","_placement"],_isOpen:["tooltipIsOpen","_isOpen"],_enable:["tooltipEnable","_enable"],_appendToBody:["tooltipAppendToBody","_appendToBody"],tooltipAnimation:"tooltipAnimation",_popupClass:["tooltipClass","_popupClass"],_tooltipContext:["tooltipContext","_tooltipContext"],_tooltipPopupDelay:["tooltipPopupDelay","_tooltipPopupDelay"],tooltipFadeDuration:"tooltipFadeDuration",_tooltipTrigger:["tooltipTrigger","_tooltipTrigger"]},outputs:{tooltipChange:"tooltipChange",onShown:"onShown",onHidden:"onHidden",tooltipStateChanged:"tooltipStateChanged"},exportAs:["bs-tooltip"]}),(0,D.gn)([(0,d.GU)(),(0,D.w6)("design:type",Object)],p.prototype,"tooltip",void 0),p})(),R=(()=>{class p{static forRoot(){return{ngModule:p,providers:[g.oj,b.sA]}}}return p.\u0275fac=function(s){return new(s||p)},p.\u0275mod=c.oAB({type:p}),p.\u0275inj=c.cJS({imports:[[O.ez]]}),p})()}}]);