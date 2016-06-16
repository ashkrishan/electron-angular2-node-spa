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
var common_1 = require('@angular/common');
var tabs_component_1 = require('../shared/tabs.component');
var tab_component_1 = require('../shared/tab.component');
var TabDataComponent = (function () {
    function TabDataComponent(_fb) {
        this._fb = _fb;
        this.clientForm = this._fb.group({
            cl_firstName: [],
            cl_middleName: [],
            cl_lastName: []
        });
    }
    TabDataComponent.prototype.onSubmit = function () {
        console.log(this.clientForm.value);
    };
    TabDataComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'tab-data.template.html',
            directives: [tabs_component_1.TabsComponent, tab_component_1.TabComponent]
        }), 
        __metadata('design:paramtypes', [common_1.FormBuilder])
    ], TabDataComponent);
    return TabDataComponent;
}());
exports.TabDataComponent = TabDataComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRiYXBwL3RhYi1kYXRhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXdCLGVBQWUsQ0FBQyxDQUFBO0FBQ3hDLHVCQUFtRCxpQkFBaUIsQ0FBQyxDQUFBO0FBRXJFLCtCQUE0QiwwQkFBMEIsQ0FBQyxDQUFBO0FBQ3ZELDhCQUEyQix5QkFBeUIsQ0FBQyxDQUFBO0FBT3JEO0lBR0UsMEJBQW9CLEdBQWdCO1FBQWhCLFFBQUcsR0FBSCxHQUFHLENBQWE7UUFDbEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztZQUMvQixZQUFZLEVBQUUsRUFBRTtZQUNoQixhQUFhLEVBQUUsRUFBRTtZQUNqQixXQUFXLEVBQUUsRUFBRTtTQUNoQixDQUFDLENBQUM7SUFHTCxDQUFDO0lBRUMsbUNBQVEsR0FBUjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBcEJMO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFVBQVUsRUFBRSxDQUFDLDhCQUFhLEVBQUUsNEJBQVksQ0FBQztTQUMxQyxDQUFDOzt3QkFBQTtJQWtCRix1QkFBQztBQUFELENBakJBLEFBaUJDLElBQUE7QUFqQlksd0JBQWdCLG1CQWlCNUIsQ0FBQSIsImZpbGUiOiJkYmFwcC90YWItZGF0YS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Rm9ybUJ1aWxkZXIsQ29udHJvbEdyb3VwLCBWYWxpZGF0b3JzfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW1wb3J0IHtUYWJzQ29tcG9uZW50fSBmcm9tICcuLi9zaGFyZWQvdGFicy5jb21wb25lbnQnO1xyXG5pbXBvcnQge1RhYkNvbXBvbmVudH0gZnJvbSAnLi4vc2hhcmVkL3RhYi5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCwgXHJcbiAgdGVtcGxhdGVVcmw6ICd0YWItZGF0YS50ZW1wbGF0ZS5odG1sJyxcclxuICBkaXJlY3RpdmVzOiBbVGFic0NvbXBvbmVudCwgVGFiQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGFiRGF0YUNvbXBvbmVudCB7XHJcbiAgY2xpZW50Rm9ybTogQ29udHJvbEdyb3VwO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9mYjogRm9ybUJ1aWxkZXIpIHtcclxuICAgIHRoaXMuY2xpZW50Rm9ybSA9IHRoaXMuX2ZiLmdyb3VwKHtcclxuICAgICAgY2xfZmlyc3ROYW1lOiBbXSxcclxuICAgICAgY2xfbWlkZGxlTmFtZTogW10sXHJcbiAgICAgIGNsX2xhc3ROYW1lOiBbXVxyXG4gICAgfSk7XHJcblxyXG5cclxuICB9XHJcbiAgXHJcbiAgICBvblN1Ym1pdCgpIHtcclxuICAgICAgY29uc29sZS5sb2codGhpcy5jbGllbnRGb3JtLnZhbHVlKTtcclxuICAgIH1cclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
