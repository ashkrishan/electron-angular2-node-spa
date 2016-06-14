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
var message_component_1 = require('./message.component');
var message_service_1 = require('./message.service');
var message_input_component_1 = require('./message-input.component');
var MessageListComponent = (function () {
    function MessageListComponent(_messageService) {
        this._messageService = _messageService;
        this.messages = [];
    }
    MessageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._messageService.getMessages()
            .subscribe(function (result) {
            _this.messages = result;
            _this._messageService.messages = _this.messages;
        }, function (error) { return console.log(error); });
    };
    MessageListComponent = __decorate([
        core_1.Component({
            selector: 'message-list',
            template: "\n       <div>            \n            <my-message *ngFor=\"let message of messages\" [message]=\"message\" (messageChange)=\"message.content = $event\"></my-message>'\n       </div>\n    ",
            directives: [message_component_1.MessageComponent, message_input_component_1.MessageInputComponent]
        }), 
        __metadata('design:paramtypes', [message_service_1.MessageService])
    ], MessageListComponent);
    return MessageListComponent;
}());
exports.MessageListComponent = MessageListComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2UtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFnQyxlQUFlLENBQUMsQ0FBQTtBQUVoRCxrQ0FBK0IscUJBQXFCLENBQUMsQ0FBQTtBQUNyRCxnQ0FBNkIsbUJBQW1CLENBQUMsQ0FBQTtBQUNqRCx3Q0FBcUMsMkJBQTJCLENBQUMsQ0FBQTtBQWdCakU7SUFHSSw4QkFBb0IsZUFBK0I7UUFBL0Isb0JBQWUsR0FBZixlQUFlLENBQWdCO1FBRm5ELGFBQVEsR0FBYyxFQUFFLENBQUM7SUFJekIsQ0FBQztJQUVELHVDQUFRLEdBQVI7UUFBQSxpQkFRQztRQVBHLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxFQUFFO2FBQzdCLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDSyxLQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQztZQUN2QixLQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsR0FBRyxLQUFJLENBQUMsUUFBUSxDQUFDO1FBQy9DLENBQUMsRUFFVixVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQWxCLENBQWtCLENBQUMsQ0FBQTtJQUNoRCxDQUFDO0lBMUJMO1FBQUMsZ0JBQVMsQ0FBRTtZQUNSLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFFBQVEsRUFBRSwrTEFJVDtZQUNELFVBQVUsRUFBRSxDQUFDLG9DQUFnQixFQUFFLCtDQUFxQixDQUFDO1NBRXhELENBQUM7OzRCQUFBO0lBbUJGLDJCQUFDO0FBQUQsQ0FqQkEsQUFpQkMsSUFBQTtBQWpCWSw0QkFBb0IsdUJBaUJoQyxDQUFBIiwiZmlsZSI6Im1lc3NhZ2VzL21lc3NhZ2UtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7TWVzc2FnZUNvbXBvbmVudH0gZnJvbSAnLi9tZXNzYWdlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7TWVzc2FnZVNlcnZpY2V9IGZyb20gJy4vbWVzc2FnZS5zZXJ2aWNlJztcclxuaW1wb3J0ICB7TWVzc2FnZUlucHV0Q29tcG9uZW50fSBmcm9tICcuL21lc3NhZ2UtaW5wdXQuY29tcG9uZW50JztcclxuaW1wb3J0IHtNZXNzYWdlfSBmcm9tICcuL21lc3NhZ2UnO1xyXG5cclxuXHJcblxyXG5AQ29tcG9uZW50ICh7XHJcbiAgICBzZWxlY3RvcjogJ21lc3NhZ2UtbGlzdCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgPGRpdj4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPG15LW1lc3NhZ2UgKm5nRm9yPVwibGV0IG1lc3NhZ2Ugb2YgbWVzc2FnZXNcIiBbbWVzc2FnZV09XCJtZXNzYWdlXCIgKG1lc3NhZ2VDaGFuZ2UpPVwibWVzc2FnZS5jb250ZW50ID0gJGV2ZW50XCI+PC9teS1tZXNzYWdlPidcclxuICAgICAgIDwvZGl2PlxyXG4gICAgYCxcclxuICAgIGRpcmVjdGl2ZXM6IFtNZXNzYWdlQ29tcG9uZW50LCBNZXNzYWdlSW5wdXRDb21wb25lbnRdXHJcbiAgICAvLyBwcm92aWRlcnM6IFtNZXNzYWdlU2VydmljZV0gXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTWVzc2FnZUxpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XHJcbiAgICBtZXNzYWdlczogTWVzc2FnZVtdID0gW107XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX21lc3NhZ2VTZXJ2aWNlOiBNZXNzYWdlU2VydmljZSkgeyAgICAgICBcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5fbWVzc2FnZVNlcnZpY2UuZ2V0TWVzc2FnZXMoKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHJlc3VsdCA9PiB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlcyA9IHJlc3VsdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX21lc3NhZ2VTZXJ2aWNlLm1lc3NhZ2VzID0gdGhpcy5tZXNzYWdlcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpXHJcbiAgICB9XHJcbiAgICBcclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
