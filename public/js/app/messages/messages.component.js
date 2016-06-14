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
var message_list_component_1 = require('./message-list.component');
var message_input_component_1 = require('./message-input.component');
var MessagesComponent = (function () {
    function MessagesComponent() {
    }
    MessagesComponent = __decorate([
        core_1.Component({
            template: "\n    <div>\n        <my-message-input></my-message-input>\n    </div>    \n    <div>\n        <message-list></message-list> \n    </div>\n    ",
            directives: [message_list_component_1.MessageListComponent, message_input_component_1.MessageInputComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], MessagesComponent);
    return MessagesComponent;
}());
exports.MessagesComponent = MessagesComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2VzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXdCLGVBQWUsQ0FBQyxDQUFBO0FBRXhDLHVDQUFtQywwQkFBMEIsQ0FBQyxDQUFBO0FBQzlELHdDQUFvQywyQkFBMkIsQ0FBQyxDQUFBO0FBY2hFO0lBQUE7SUFFQSxDQUFDO0lBZEQ7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGlKQU9UO1lBQ0EsVUFBVSxFQUFFLENBQUMsNkNBQW9CLEVBQUMsK0NBQXFCLENBQUM7U0FDNUQsQ0FBQzs7eUJBQUE7SUFJRix3QkFBQztBQUFELENBRkEsQUFFQyxJQUFBO0FBRlkseUJBQWlCLG9CQUU3QixDQUFBIiwiZmlsZSI6Im1lc3NhZ2VzL21lc3NhZ2VzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7TWVzc2FnZUxpc3RDb21wb25lbnR9IGZyb20gJy4vbWVzc2FnZS1saXN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7TWVzc2FnZUlucHV0Q29tcG9uZW50fSBmcm9tICcuL21lc3NhZ2UtaW5wdXQuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXY+XHJcbiAgICAgICAgPG15LW1lc3NhZ2UtaW5wdXQ+PC9teS1tZXNzYWdlLWlucHV0PlxyXG4gICAgPC9kaXY+ICAgIFxyXG4gICAgPGRpdj5cclxuICAgICAgICA8bWVzc2FnZS1saXN0PjwvbWVzc2FnZS1saXN0PiBcclxuICAgIDwvZGl2PlxyXG4gICAgYCwgICAgIFxyXG4gICAgIGRpcmVjdGl2ZXM6IFtNZXNzYWdlTGlzdENvbXBvbmVudCxNZXNzYWdlSW5wdXRDb21wb25lbnRdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTWVzc2FnZXNDb21wb25lbnQge1xyXG5cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
