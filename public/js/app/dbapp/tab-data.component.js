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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRiYXBwL3RhYi1kYXRhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXdCLGVBQWUsQ0FBQyxDQUFBO0FBQ3hDLHVCQUFtRCxpQkFBaUIsQ0FBQyxDQUFBO0FBRXJFLCtCQUE0QiwwQkFBMEIsQ0FBQyxDQUFBO0FBQ3ZELDhCQUEyQix5QkFBeUIsQ0FBQyxDQUFBO0FBT3JEO0lBR0UsMEJBQW9CLEdBQWdCO1FBQWhCLFFBQUcsR0FBSCxHQUFHLENBQWE7UUFDbEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztZQUMvQixTQUFTLEVBQUUsRUFBRTtZQUNiLFFBQVEsRUFBRSxFQUFFO1NBQ2IsQ0FBQyxDQUFDO0lBR0wsQ0FBQztJQUVDLG1DQUFRLEdBQVI7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQW5CTDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxVQUFVLEVBQUUsQ0FBQyw4QkFBYSxFQUFFLDRCQUFZLENBQUM7U0FDMUMsQ0FBQzs7d0JBQUE7SUFpQkYsdUJBQUM7QUFBRCxDQWhCQSxBQWdCQyxJQUFBO0FBaEJZLHdCQUFnQixtQkFnQjVCLENBQUEiLCJmaWxlIjoiZGJhcHAvdGFiLWRhdGEuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0Zvcm1CdWlsZGVyLENvbnRyb2xHcm91cCwgVmFsaWRhdG9yc30gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbmltcG9ydCB7VGFic0NvbXBvbmVudH0gZnJvbSAnLi4vc2hhcmVkL3RhYnMuY29tcG9uZW50JztcclxuaW1wb3J0IHtUYWJDb21wb25lbnR9IGZyb20gJy4uL3NoYXJlZC90YWIuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsIFxyXG4gIHRlbXBsYXRlVXJsOiAndGFiLWRhdGEudGVtcGxhdGUuaHRtbCcsXHJcbiAgZGlyZWN0aXZlczogW1RhYnNDb21wb25lbnQsIFRhYkNvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFRhYkRhdGFDb21wb25lbnQge1xyXG4gIGNsaWVudEZvcm06IENvbnRyb2xHcm91cDtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZmI6IEZvcm1CdWlsZGVyKSB7XHJcbiAgICB0aGlzLmNsaWVudEZvcm0gPSB0aGlzLl9mYi5ncm91cCh7XHJcbiAgICAgIGZpcnN0TmFtZTogW10sXHJcbiAgICAgIGxhc3ROYW1lOiBbXVxyXG4gICAgfSk7XHJcblxyXG5cclxuICB9XHJcbiAgXHJcbiAgICBvblN1Ym1pdCgpIHtcclxuICAgICAgY29uc29sZS5sb2codGhpcy5jbGllbnRGb3JtLnZhbHVlKTtcclxuICAgIH1cclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
