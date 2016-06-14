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
            firstName: [],
            lastName: []
        });
    }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRiYXBwL3RhYi1kYXRhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXdCLGVBQWUsQ0FBQyxDQUFBO0FBQ3hDLHVCQUFtRCxpQkFBaUIsQ0FBQyxDQUFBO0FBRXJFLCtCQUE0QiwwQkFBMEIsQ0FBQyxDQUFBO0FBQ3ZELDhCQUEyQix5QkFBeUIsQ0FBQyxDQUFBO0FBT3JEO0lBR0UsMEJBQW9CLEdBQWdCO1FBQWhCLFFBQUcsR0FBSCxHQUFHLENBQWE7UUFDbEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztZQUMvQixTQUFTLEVBQUUsRUFBRTtZQUNiLFFBQVEsRUFBRSxFQUFFO1NBQ2IsQ0FBQyxDQUFDO0lBSUwsQ0FBQztJQWhCSDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxVQUFVLEVBQUUsQ0FBQyw4QkFBYSxFQUFFLDRCQUFZLENBQUM7U0FDMUMsQ0FBQzs7d0JBQUE7SUFhRix1QkFBQztBQUFELENBWkEsQUFZQyxJQUFBO0FBWlksd0JBQWdCLG1CQVk1QixDQUFBIiwiZmlsZSI6ImRiYXBwL3RhYi1kYXRhLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtGb3JtQnVpbGRlcixDb250cm9sR3JvdXAsIFZhbGlkYXRvcnN9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQge1RhYnNDb21wb25lbnR9IGZyb20gJy4uL3NoYXJlZC90YWJzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7VGFiQ29tcG9uZW50fSBmcm9tICcuLi9zaGFyZWQvdGFiLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLCBcclxuICB0ZW1wbGF0ZVVybDogJ3RhYi1kYXRhLnRlbXBsYXRlLmh0bWwnLFxyXG4gIGRpcmVjdGl2ZXM6IFtUYWJzQ29tcG9uZW50LCBUYWJDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUYWJEYXRhQ29tcG9uZW50IHtcclxuICBjbGllbnRGb3JtOiBDb250cm9sR3JvdXA7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2ZiOiBGb3JtQnVpbGRlcikge1xyXG4gICAgdGhpcy5jbGllbnRGb3JtID0gdGhpcy5fZmIuZ3JvdXAoe1xyXG4gICAgICBmaXJzdE5hbWU6IFtdLFxyXG4gICAgICBsYXN0TmFtZTogW11cclxuICAgIH0pO1xyXG5cclxuXHJcblxyXG4gIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
