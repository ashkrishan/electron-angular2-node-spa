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
//import {Observable} from 'rxjs/Observable';
var message_1 = require('./message');
var message_service_1 = require('./message.service');
var MessageInputComponent = (function () {
    function MessageInputComponent(_messageService) {
        this._messageService = _messageService;
        this.message = null;
    }
    MessageInputComponent.prototype.onSubmit = function (form) {
        var _this = this;
        if (this.message) {
            this.message.content = form.content;
            this._messageService.updateMessage(this.message)
                .subscribe(function (response) {
                console.log(response);
            }, function (error) { return console.log(error); });
            this.message = null;
        }
        else {
            var message = new message_1.Message(form.content, null, 'Amax');
            this._messageService.addMessage(message)
                .subscribe(function (response) { return _this._messageService.messages.push(response); }, function (error) { return console.log(error); });
        }
    };
    MessageInputComponent.prototype.onCancel = function () {
        this.message = null;
    };
    MessageInputComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._messageService.messageIsEdited.subscribe(function (message) {
            _this.message = message;
        });
    };
    MessageInputComponent = __decorate([
        core_1.Component({
            selector: 'my-message-input',
            template: "\n   <form (ngSubmit)=\"onSubmit(f.value)\" #f=\"ngForm\">\n        <div class=\"form-group\">\n            <input ngControl=\"content\" type=\"text\" class=\"form-control\" #inputVar [value]=\"message?.content\">\n        </div>\n        <button type=\"submit\" class=\"btn btn-primary\">{{ !message ? 'Sent message' : 'Edit message'}}</button>\n\n        <button type=\"button\" class=\"btn btn-danger\" *ngIf=\"message\" (click)=\"onCancel()\">Cancel</button>   \n   </form>\n    ",
        }), 
        __metadata('design:paramtypes', [message_service_1.MessageService])
    ], MessageInputComponent);
    return MessageInputComponent;
}());
exports.MessageInputComponent = MessageInputComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2UtaW5wdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBZ0MsZUFBZSxDQUFDLENBQUE7QUFDaEQsNkNBQTZDO0FBRTdDLHdCQUFzQixXQUFXLENBQUMsQ0FBQTtBQUNsQyxnQ0FBNkIsbUJBQW1CLENBQUMsQ0FBQTtBQW1CakQ7SUFFSSwrQkFBcUIsZUFBK0I7UUFBL0Isb0JBQWUsR0FBZixlQUFlLENBQWdCO1FBRHBELFlBQU8sR0FBWSxJQUFJLENBQUM7SUFHeEIsQ0FBQztJQUVELHdDQUFRLEdBQVIsVUFBUyxJQUFRO1FBQWpCLGlCQXVCQztRQXRCRyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNmLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7WUFFcEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztpQkFDM0MsU0FBUyxDQUFDLFVBQUEsUUFBUTtnQkFDSyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3ZCLENBQUMsRUFDRCxVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQWxCLENBQWtCLENBQ2pELENBQUE7WUFFTCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUd4QixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDUixJQUFNLE9BQU8sR0FBWSxJQUFJLGlCQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDakUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDO2lCQUNuQyxTQUFTLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxLQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQTVDLENBQTRDLEVBQ3ZELFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBbEIsQ0FBa0IsQ0FBQyxDQUFBO1FBRTVDLENBQUM7SUFHTCxDQUFDO0lBRUQsd0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ3hCLENBQUM7SUFHRCx3Q0FBUSxHQUFSO1FBQUEsaUJBTUM7UUFMRyxJQUFJLENBQUMsZUFBZSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQzFDLFVBQUEsT0FBTztZQUNILEtBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQzNCLENBQUMsQ0FDSixDQUFBO0lBQ0wsQ0FBQztJQXpETDtRQUFDLGdCQUFTLENBQUU7WUFDUixRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLFFBQVEsRUFBRSxxZUFTVDtTQUVKLENBQUM7OzZCQUFBO0lBOENGLDRCQUFDO0FBQUQsQ0E1Q0EsQUE0Q0MsSUFBQTtBQTVDWSw2QkFBcUIsd0JBNENqQyxDQUFBIiwiZmlsZSI6Im1lc3NhZ2VzL21lc3NhZ2UtaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbi8vaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5cclxuaW1wb3J0IHtNZXNzYWdlfSBmcm9tICcuL21lc3NhZ2UnO1xyXG5pbXBvcnQge01lc3NhZ2VTZXJ2aWNlfSBmcm9tICcuL21lc3NhZ2Uuc2VydmljZSc7XHJcblxyXG5cclxuXHJcbkBDb21wb25lbnQgKHtcclxuICAgIHNlbGVjdG9yOiAnbXktbWVzc2FnZS1pbnB1dCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICA8Zm9ybSAobmdTdWJtaXQpPVwib25TdWJtaXQoZi52YWx1ZSlcIiAjZj1cIm5nRm9ybVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dCBuZ0NvbnRyb2w9XCJjb250ZW50XCIgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiICNpbnB1dFZhciBbdmFsdWVdPVwibWVzc2FnZT8uY29udGVudFwiPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCI+e3sgIW1lc3NhZ2UgPyAnU2VudCBtZXNzYWdlJyA6ICdFZGl0IG1lc3NhZ2UnfX08L2J1dHRvbj5cclxuXHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRhbmdlclwiICpuZ0lmPVwibWVzc2FnZVwiIChjbGljayk9XCJvbkNhbmNlbCgpXCI+Q2FuY2VsPC9idXR0b24+ICAgXHJcbiAgIDwvZm9ybT5cclxuICAgIGAsXHJcbiAgICAvLyBwcm92aWRlcnM6IFtNZXNzYWdlU2VydmljZV1cclxufSkgXHJcblxyXG5leHBvcnQgY2xhc3MgTWVzc2FnZUlucHV0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0eyAgIFxyXG4gICAgbWVzc2FnZTogTWVzc2FnZSA9IG51bGw7XHJcbiAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBfbWVzc2FnZVNlcnZpY2U6IE1lc3NhZ2VTZXJ2aWNlKSB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgb25TdWJtaXQoZm9ybTphbnkpIHtcclxuICAgICAgICBpZiAodGhpcy5tZXNzYWdlKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZS5jb250ZW50ID0gZm9ybS5jb250ZW50O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5fbWVzc2FnZVNlcnZpY2UudXBkYXRlTWVzc2FnZSh0aGlzLm1lc3NhZ2UpXHJcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSAgXHJcbiAgICAgICAgICAgICAgICApXHJcblxyXG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSBudWxsO1xyXG5cclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBtZXNzYWdlOiBNZXNzYWdlID0gbmV3IE1lc3NhZ2UoZm9ybS5jb250ZW50LCBudWxsLCAnQW1heCcpO1xyXG4gICAgICAgIHRoaXMuX21lc3NhZ2VTZXJ2aWNlLmFkZE1lc3NhZ2UobWVzc2FnZSlcclxuICAgICAgICAgICAgLnN1YnNjcmliZShyZXNwb25zZSA9PiB0aGlzLl9tZXNzYWdlU2VydmljZS5tZXNzYWdlcy5wdXNoKHJlc3BvbnNlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIG9uQ2FuY2VsKCkge1xyXG4gICAgICAgIHRoaXMubWVzc2FnZSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuX21lc3NhZ2VTZXJ2aWNlLm1lc3NhZ2VJc0VkaXRlZC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIG1lc3NhZ2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
