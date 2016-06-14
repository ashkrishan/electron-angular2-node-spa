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
var tabs_component_1 = require('./tabs.component');
var tab_component_1 = require('./tab.component');
var TabDataComponent = (function () {
    function TabDataComponent() {
        // this.name = 'Angular2'
    }
    TabDataComponent = __decorate([
        core_1.Component({
            template: "\n    <tabs>\n      <tab [tabTitle]=\"'Tab 1'\">Tab 1 Content</tab>\n      <tab [tabTitle]=\"'Tab 2'\">Tab 2 Content</tab>\n    </tabs>\n  ",
            directives: [tabs_component_1.TabsComponent, tab_component_1.TabComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], TabDataComponent);
    return TabDataComponent;
}());
exports.TabDataComponent = TabDataComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC90YWItZGF0YS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF3QixlQUV4QixDQUFDLENBRnNDO0FBRXZDLCtCQUE0QixrQkFBa0IsQ0FBQyxDQUFBO0FBQy9DLDhCQUEyQixpQkFBaUIsQ0FBQyxDQUFBO0FBVzdDO0lBQ0U7UUFDRSx5QkFBeUI7SUFDM0IsQ0FBQztJQVpIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSw2SUFLVDtZQUNELFVBQVUsRUFBRSxDQUFDLDhCQUFhLEVBQUUsNEJBQVksQ0FBQztTQUMxQyxDQUFDOzt3QkFBQTtJQUtGLHVCQUFDO0FBQUQsQ0FKQSxBQUlDLElBQUE7QUFKWSx3QkFBZ0IsbUJBSTVCLENBQUEiLCJmaWxlIjoic2hhcmVkL3RhYi1kYXRhLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJ1xyXG5cclxuaW1wb3J0IHtUYWJzQ29tcG9uZW50fSBmcm9tICcuL3RhYnMuY29tcG9uZW50JztcclxuaW1wb3J0IHtUYWJDb21wb25lbnR9IGZyb20gJy4vdGFiLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPHRhYnM+XHJcbiAgICAgIDx0YWIgW3RhYlRpdGxlXT1cIidUYWIgMSdcIj5UYWIgMSBDb250ZW50PC90YWI+XHJcbiAgICAgIDx0YWIgW3RhYlRpdGxlXT1cIidUYWIgMidcIj5UYWIgMiBDb250ZW50PC90YWI+XHJcbiAgICA8L3RhYnM+XHJcbiAgYCxcclxuICBkaXJlY3RpdmVzOiBbVGFic0NvbXBvbmVudCwgVGFiQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGFiRGF0YUNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAvLyB0aGlzLm5hbWUgPSAnQW5ndWxhcjInXHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
