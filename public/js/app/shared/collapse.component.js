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
var ng2_bootstrap_1 = require('ng2-bootstrap');
// webpack html imports
var template = require('./collapse-demo.html');
var CollapseAppComponent = (function () {
    function CollapseAppComponent() {
        this.isCollapsed = false;
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], CollapseAppComponent.prototype, "isCollapsed", void 0);
    CollapseAppComponent = __decorate([
        core_1.Component({
            selector: 'collapse-demo',
            directives: [ng2_bootstrap_1.CollapseDirective],
            template: template
        }), 
        __metadata('design:paramtypes', [])
    ], CollapseAppComponent);
    return CollapseAppComponent;
}());
exports.CollapseAppComponent = CollapseAppComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9jb2xsYXBzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUE4QixlQUFlLENBQUMsQ0FBQTtBQUM5Qyw4QkFBZ0MsZUFBZSxDQUFDLENBQUE7QUFFaEQsdUJBQXVCO0FBQ3ZCLElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0FBTy9DO0lBQUE7UUFDVSxnQkFBVyxHQUFXLEtBQUssQ0FBQztJQUN0QyxDQUFDO0lBREE7UUFBQyxZQUFLLEVBQUU7OzZEQUFBO0lBTlQ7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGVBQWU7WUFDekIsVUFBVSxFQUFFLENBQUMsaUNBQWlCLENBQUM7WUFDL0IsUUFBUSxFQUFFLFFBQVE7U0FDbkIsQ0FBQzs7NEJBQUE7SUFHRiwyQkFBQztBQUFELENBRkEsQUFFQyxJQUFBO0FBRlksNEJBQW9CLHVCQUVoQyxDQUFBIiwiZmlsZSI6InNoYXJlZC9jb2xsYXBzZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCxJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Q29sbGFwc2VEaXJlY3RpdmV9IGZyb20gJ25nMi1ib290c3RyYXAnO1xyXG5cclxuLy8gd2VicGFjayBodG1sIGltcG9ydHNcclxubGV0IHRlbXBsYXRlID0gcmVxdWlyZSgnLi9jb2xsYXBzZS1kZW1vLmh0bWwnKTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY29sbGFwc2UtZGVtbycsXHJcbiAgZGlyZWN0aXZlczogW0NvbGxhcHNlRGlyZWN0aXZlXSxcclxuICB0ZW1wbGF0ZTogdGVtcGxhdGVcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbGxhcHNlQXBwQ29tcG9uZW50IHtcclxuIEBJbnB1dCgpIGlzQ29sbGFwc2VkOmJvb2xlYW4gPSBmYWxzZTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
