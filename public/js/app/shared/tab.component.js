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
var TabComponent = (function () {
    function TabComponent() {
        this.active = false;
    }
    __decorate([
        core_1.Input('tabTitle'), 
        __metadata('design:type', String)
    ], TabComponent.prototype, "title", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], TabComponent.prototype, "active", void 0);
    TabComponent = __decorate([
        core_1.Component({
            selector: 'tab',
            styles: ["\n    .pane{\n      padding: 1em;\n    }\n  "],
            template: "\n    <div [hidden]=\"!active\" class=\"pane\">\n      <ng-content></ng-content>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], TabComponent);
    return TabComponent;
}());
exports.TabComponent = TabComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC90YWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBaUMsZUFBZSxDQUFDLENBQUE7QUFlakQ7SUFBQTtRQUVXLFdBQU0sR0FBRyxLQUFLLENBQUM7SUFDMUIsQ0FBQztJQUZDO1FBQUMsWUFBSyxDQUFDLFVBQVUsQ0FBQzs7K0NBQUE7SUFDbEI7UUFBQyxZQUFLLEVBQUU7O2dEQUFBO0lBZlY7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLEtBQUs7WUFDZixNQUFNLEVBQUUsQ0FBQyw4Q0FJUixDQUFDO1lBQ0YsUUFBUSxFQUFFLGtHQUlUO1NBQ0YsQ0FBQzs7b0JBQUE7SUFJRixtQkFBQztBQUFELENBSEEsQUFHQyxJQUFBO0FBSFksb0JBQVksZUFHeEIsQ0FBQSIsImZpbGUiOiJzaGFyZWQvdGFiLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAndGFiJyxcclxuICBzdHlsZXM6IFtgXHJcbiAgICAucGFuZXtcclxuICAgICAgcGFkZGluZzogMWVtO1xyXG4gICAgfVxyXG4gIGBdLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2IFtoaWRkZW5dPVwiIWFjdGl2ZVwiIGNsYXNzPVwicGFuZVwiPlxyXG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICA8L2Rpdj5cclxuICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUYWJDb21wb25lbnQge1xyXG4gIEBJbnB1dCgndGFiVGl0bGUnKSB0aXRsZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGFjdGl2ZSA9IGZhbHNlO1xyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
