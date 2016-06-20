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
var client_data_service_1 = require('./client-data.service');
var ClientsListComponent = (function () {
    function ClientsListComponent(_clientDataService) {
        this._clientDataService = _clientDataService;
        this.clients = [];
    }
    ClientsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._clientDataService.getData()
            .subscribe(function (response) { return _this.clients = response; }, function (error) { return console.log(error); });
    };
    ClientsListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'clients-list.template.html',
            styles: ["\n            .searchbox {\n                width: 50%;\n                margin: auto 0 ;\n                padding-bottom: 20px;\n            }\n            "]
        }), 
        __metadata('design:paramtypes', [client_data_service_1.ClientDataService])
    ], ClientsListComponent);
    return ClientsListComponent;
}());
exports.ClientsListComponent = ClientsListComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRiYXBwL2NsaWVudHMtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFnQyxlQUFlLENBQUMsQ0FBQTtBQUVoRCxvQ0FBZ0MsdUJBQXVCLENBQUMsQ0FBQTtBQWN4RDtJQUVJLDhCQUFvQixrQkFBcUM7UUFBckMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQUR6RCxZQUFPLEdBQUcsRUFBRSxDQUFDO0lBR2IsQ0FBQztJQUVELHVDQUFRLEdBQVI7UUFBQSxpQkFPQztRQU5HLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLEVBQUU7YUFDNUIsU0FBUyxDQUFDLFVBQUEsUUFBUSxJQUFLLE9BQUEsS0FBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLEVBQXZCLENBQXVCLEVBQ3RCLFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBbEIsQ0FBa0IsQ0FHbkQsQ0FBQztJQUNWLENBQUM7SUF6Qkw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSw0QkFBNEI7WUFDekMsTUFBTSxFQUFFLENBQUMsK0pBTUEsQ0FBQztTQUNiLENBQUM7OzRCQUFBO0lBaUJGLDJCQUFDO0FBQUQsQ0FmQSxBQWVDLElBQUE7QUFmWSw0QkFBb0IsdUJBZWhDLENBQUEiLCJmaWxlIjoiZGJhcHAvY2xpZW50cy1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHtDbGllbnREYXRhU2VydmljZX0gZnJvbSAnLi9jbGllbnQtZGF0YS5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiAnY2xpZW50cy1saXN0LnRlbXBsYXRlLmh0bWwnLFxyXG4gICAgc3R5bGVzOiBbYFxyXG4gICAgICAgICAgICAuc2VhcmNoYm94IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG8gMCA7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIENsaWVudHNMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGNsaWVudHMgPSBbXTtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NsaWVudERhdGFTZXJ2aWNlOiBDbGllbnREYXRhU2VydmljZSkge1xyXG5cclxuICAgIH0gICAgXHJcblxyXG4gICAgbmdPbkluaXQoKXtcclxuICAgICAgICB0aGlzLl9jbGllbnREYXRhU2VydmljZS5nZXREYXRhKClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShyZXNwb25zZSA9PiAgdGhpcy5jbGllbnRzID0gcmVzcG9uc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
