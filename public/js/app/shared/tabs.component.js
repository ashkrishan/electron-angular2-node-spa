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
var tab_component_1 = require('./tab.component');
var TabsComponent = (function () {
    function TabsComponent() {
    }
    // contentChildren are set
    TabsComponent.prototype.ngAfterContentInit = function () {
        // get all active tabs
        var activeTabs = this.tabs.filter(function (tab) { return tab.active; });
        // if there is no active tab set, activate the first
        if (activeTabs.length === 0) {
            this.selectTab(this.tabs.first);
        }
    };
    TabsComponent.prototype.selectTab = function (tab) {
        // deactivate all tabs
        this.tabs.toArray().forEach(function (tab) { return tab.active = false; });
        // activate the tab the user has clicked on.
        tab.active = true;
    };
    __decorate([
        core_1.ContentChildren(tab_component_1.TabComponent), 
        __metadata('design:type', core_1.QueryList)
    ], TabsComponent.prototype, "tabs", void 0);
    TabsComponent = __decorate([
        core_1.Component({
            selector: 'tabs',
            template: "\n    <ul class=\"nav nav-tabs\">\n      <li *ngFor=\"let tab of tabs\" (click)=\"selectTab(tab)\" [class.active]=\"tab.active\">\n        <a>{{tab.title}}</a>\n      </li>\n    </ul>\n    <ng-content></ng-content>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], TabsComponent);
    return TabsComponent;
}());
exports.TabsComponent = TabsComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC90YWJzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXdFLGVBQWUsQ0FBQyxDQUFBO0FBQ3hGLDhCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBYS9DO0lBQUE7SUF1QkEsQ0FBQztJQW5CQywwQkFBMEI7SUFDMUIsMENBQWtCLEdBQWxCO1FBQ0Usc0JBQXNCO1FBQ3RCLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQUMsR0FBRyxJQUFHLE9BQUEsR0FBRyxDQUFDLE1BQU0sRUFBVixDQUFVLENBQUMsQ0FBQztRQUVyRCxvREFBb0Q7UUFDcEQsRUFBRSxDQUFBLENBQUMsVUFBVSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzNCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsQyxDQUFDO0lBQ0gsQ0FBQztJQUVELGlDQUFTLEdBQVQsVUFBVSxHQUFpQjtRQUN6QixzQkFBc0I7UUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxPQUFPLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsTUFBTSxHQUFHLEtBQUssRUFBbEIsQ0FBa0IsQ0FBQyxDQUFDO1FBRXZELDRDQUE0QztRQUM1QyxHQUFHLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztJQUNwQixDQUFDO0lBbkJEO1FBQUMsc0JBQWUsQ0FBQyw0QkFBWSxDQUFDOzsrQ0FBQTtJQWJoQztRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTTtZQUNoQixRQUFRLEVBQUMsNE5BT1I7U0FDRixDQUFDOztxQkFBQTtJQXdCRixvQkFBQztBQUFELENBdkJBLEFBdUJDLElBQUE7QUF2QlkscUJBQWEsZ0JBdUJ6QixDQUFBIiwiZmlsZSI6InNoYXJlZC90YWJzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ29udGVudENoaWxkcmVuLCBRdWVyeUxpc3QsIEFmdGVyQ29udGVudEluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVGFiQ29tcG9uZW50IH0gZnJvbSAnLi90YWIuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAndGFicycsXHJcbiAgdGVtcGxhdGU6YFxyXG4gICAgPHVsIGNsYXNzPVwibmF2IG5hdi10YWJzXCI+XHJcbiAgICAgIDxsaSAqbmdGb3I9XCJsZXQgdGFiIG9mIHRhYnNcIiAoY2xpY2spPVwic2VsZWN0VGFiKHRhYilcIiBbY2xhc3MuYWN0aXZlXT1cInRhYi5hY3RpdmVcIj5cclxuICAgICAgICA8YT57e3RhYi50aXRsZX19PC9hPlxyXG4gICAgICA8L2xpPlxyXG4gICAgPC91bD5cclxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUYWJzQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XHJcbiAgXHJcbiAgQENvbnRlbnRDaGlsZHJlbihUYWJDb21wb25lbnQpIHRhYnM6IFF1ZXJ5TGlzdDxUYWJDb21wb25lbnQ+O1xyXG4gIFxyXG4gIC8vIGNvbnRlbnRDaGlsZHJlbiBhcmUgc2V0XHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xyXG4gICAgLy8gZ2V0IGFsbCBhY3RpdmUgdGFic1xyXG4gICAgbGV0IGFjdGl2ZVRhYnMgPSB0aGlzLnRhYnMuZmlsdGVyKCh0YWIpPT50YWIuYWN0aXZlKTtcclxuICAgIFxyXG4gICAgLy8gaWYgdGhlcmUgaXMgbm8gYWN0aXZlIHRhYiBzZXQsIGFjdGl2YXRlIHRoZSBmaXJzdFxyXG4gICAgaWYoYWN0aXZlVGFicy5sZW5ndGggPT09IDApIHtcclxuICAgICAgdGhpcy5zZWxlY3RUYWIodGhpcy50YWJzLmZpcnN0KTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgc2VsZWN0VGFiKHRhYjogVGFiQ29tcG9uZW50KXtcclxuICAgIC8vIGRlYWN0aXZhdGUgYWxsIHRhYnNcclxuICAgIHRoaXMudGFicy50b0FycmF5KCkuZm9yRWFjaCh0YWIgPT4gdGFiLmFjdGl2ZSA9IGZhbHNlKTtcclxuICAgIFxyXG4gICAgLy8gYWN0aXZhdGUgdGhlIHRhYiB0aGUgdXNlciBoYXMgY2xpY2tlZCBvbi5cclxuICAgIHRhYi5hY3RpdmUgPSB0cnVlO1xyXG4gIH1cclxuXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
