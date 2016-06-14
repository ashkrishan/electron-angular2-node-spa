"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var RouterActiveClass = (function () {
    function RouterActiveClass(routeSegment, router) {
        var _this = this;
        this.routeSegment = routeSegment;
        this.router = router;
        this.router.changes.subscribe(function () { return _this.updateCurrentUrl(); });
    }
    RouterActiveClass.prototype.updateCurrentUrl = function () {
        this.currentUrl = this.router.createUrlTree(this.routerLink, this.routeSegment);
    };
    Object.defineProperty(RouterActiveClass.prototype, "isRouteActive", {
        get: function () {
            return this.currentUrl ? this.router.urlTree.contains(this.currentUrl) : null;
        },
        enumerable: true,
        configurable: true
    });
    RouterActiveClass.prototype.ngOnInit = function () {
        this.updateCurrentUrl();
    };
    __decorate([
        core_1.Input('routerLink'), 
        __metadata('design:type', Array)
    ], RouterActiveClass.prototype, "routerLink", void 0);
    __decorate([
        core_1.HostBinding('class.active'), 
        __metadata('design:type', Boolean)
    ], RouterActiveClass.prototype, "isRouteActive", null);
    RouterActiveClass = __decorate([
        core_1.Directive({
            selector: '[my-routerLink]'
        }), 
        __metadata('design:paramtypes', [router_1.RouteSegment, router_1.Router])
    ], RouterActiveClass);
    return RouterActiveClass;
}());
exports.RouterActiveClass = RouterActiveClass;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9teS1yb3V0ZXJMaW5rLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXNELGVBQWUsQ0FBQyxDQUFBO0FBQ3RFLHVCQUE4QyxpQkFBaUIsQ0FBQyxDQUFBO0FBS2hFO0lBSUksMkJBQW9CLFlBQTBCLEVBQVUsTUFBYztRQUoxRSxpQkFvQkM7UUFoQnVCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNsRSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxnQkFBZ0IsRUFBRSxFQUF2QixDQUF1QixDQUFDLENBQUM7SUFDakUsQ0FBQztJQUVPLDRDQUFnQixHQUF4QjtRQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDcEYsQ0FBQztJQUdELHNCQUFJLDRDQUFhO2FBQWpCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDbEYsQ0FBQzs7O09BQUE7SUFFRCxvQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDNUIsQ0FBQztJQWpCRDtRQUFDLFlBQUssQ0FBQyxZQUFZLENBQUM7O3lEQUFBO0lBVXBCO1FBQUMsa0JBQVcsQ0FBQyxjQUFjLENBQUM7OzBEQUFBO0lBZmhDO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxpQkFBaUI7U0FDOUIsQ0FBQzs7eUJBQUE7SUFxQkYsd0JBQUM7QUFBRCxDQXBCQSxBQW9CQyxJQUFBO0FBcEJZLHlCQUFpQixvQkFvQjdCLENBQUEiLCJmaWxlIjoic2hhcmVkL215LXJvdXRlckxpbmsuZGlyZWN0aXZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgSG9zdEJpbmRpbmcsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIFJvdXRlU2VnbWVudCwgVXJsVHJlZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAgIHNlbGVjdG9yOiAnW215LXJvdXRlckxpbmtdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUm91dGVyQWN0aXZlQ2xhc3MgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50VXJsOiBVcmxUcmVlO1xyXG4gICAgQElucHV0KCdyb3V0ZXJMaW5rJykgcHJpdmF0ZSByb3V0ZXJMaW5rOiBhbnlbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlU2VnbWVudDogUm91dGVTZWdtZW50LCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIuY2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4gdGhpcy51cGRhdGVDdXJyZW50VXJsKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdXBkYXRlQ3VycmVudFVybCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRVcmwgPSB0aGlzLnJvdXRlci5jcmVhdGVVcmxUcmVlKHRoaXMucm91dGVyTGluaywgdGhpcy5yb3V0ZVNlZ21lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIEBIb3N0QmluZGluZygnY2xhc3MuYWN0aXZlJylcclxuICAgIGdldCBpc1JvdXRlQWN0aXZlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRVcmwgPyB0aGlzLnJvdXRlci51cmxUcmVlLmNvbnRhaW5zKHRoaXMuY3VycmVudFVybCkgOiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlQ3VycmVudFVybCgpO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
