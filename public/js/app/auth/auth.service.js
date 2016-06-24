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
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
require('rxjs/add/observable/throw');
var UserAuthService = (function () {
    function UserAuthService(_http) {
        this._http = _http;
        this.userUrl = 'http://localhost:3000/user';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    UserAuthService.prototype.signupUser = function (user) {
        return this._http.post(this.userUrl, JSON.stringify(user), { headers: this.headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
    };
    UserAuthService.prototype.signinUser = function (user) {
        return this._http.post(this.userUrl + '/' + 'signin', JSON.stringify(user), { headers: this.headers })
            .map(function (response) {
            var data = response.json().obj;
            return data;
        })
            .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
    };
    UserAuthService.prototype.getUsers = function () {
        return this._http.get(this.userUrl)
            .map(function (response) {
            var data = response.json().obj;
            return data;
        })
            .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
    };
    UserAuthService.prototype.getUser = function (userId) {
        return this._http.get(this.userUrl + '/' + userId)
            .map(function (response) {
            var data = response.json().obj;
            return data;
        });
    };
    UserAuthService.prototype.logoutUser = function () {
        localStorage.clear();
    };
    UserAuthService.prototype.updateUser = function (userid, user) {
        console.log("Sending this user" + user);
        var token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : ' ';
        return this._http.patch(this.userUrl + '/' + userid + token, JSON.stringify(user), { headers: this.headers })
            .map(function (response) {
            var data = response.json().obj;
            return data;
        });
    };
    UserAuthService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], UserAuthService);
    return UserAuthService;
}());
exports.UserAuthService = UserAuthService;

//# sourceMappingURL=data:application/json;base64,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LENBQUM7SUFFRCxvQ0FBVSxHQUFWLFVBQVcsTUFBTSxFQUFFLElBQVU7UUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsQ0FBQztRQUN4QyxJQUFJLEtBQUssR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLFNBQVMsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUM1RixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLEdBQUcsTUFBTSxHQUFHLEtBQUssRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUMsQ0FBQzthQUNsRyxHQUFHLENBQUMsVUFBQSxRQUFRO1lBQU0sSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQTtZQUM3QixNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2hCLENBQUMsQ0FBQyxDQUFDO0lBRS9CLENBQUM7SUF2REw7UUFBQyxpQkFBVSxFQUFFOzt1QkFBQTtJQTBEYixzQkFBQztBQUFELENBekRBLEFBeURDLElBQUE7QUF6RFksdUJBQWUsa0JBeUQzQixDQUFBIiwiZmlsZSI6ImF1dGgvYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtIdHRwLCBIZWFkZXJzfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2gnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvdGhyb3cnO1xyXG5cclxuaW1wb3J0IHtVc2VyfSBmcm9tICcuL3VzZXInOyBcclxuXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBVc2VyQXV0aFNlcnZpY2Uge1xyXG5cclxuICAgIHVzZXJVcmwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAwL3VzZXInO1xyXG4gICAgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSk7XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6IEh0dHApIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2lnbnVwVXNlcih1c2VyOiBVc2VyKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KHRoaXMudXNlclVybCwgSlNPTi5zdHJpbmdpZnkodXNlciksIHtoZWFkZXJzOiB0aGlzLmhlYWRlcnN9KVxyXG4gICAgICAgICAgICAubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2lnbmluVXNlcih1c2VyOiBVc2VyKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCh0aGlzLnVzZXJVcmwgKyAnLycgKyAnc2lnbmluJywgSlNPTi5zdHJpbmdpZnkodXNlciksIHtoZWFkZXJzOiB0aGlzLmhlYWRlcnN9KVxyXG4gICAgICAgICAgICAubWFwKHJlc3BvbnNlID0+IHsgdmFyIGRhdGEgPSByZXNwb25zZS5qc29uKCkub2JqXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VXNlcnMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KHRoaXMudXNlclVybClcclxuICAgICAgICAgICAgLm1hcChyZXNwb25zZSA9PiB7IHZhciBkYXRhID0gcmVzcG9uc2UuanNvbigpLm9ialxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpKSk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VXNlcih1c2VySWQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQodGhpcy51c2VyVXJsICsgJy8nICsgdXNlcklkKVxyXG4gICAgICAgICAgICAubWFwKHJlc3BvbnNlID0+ICB7IHZhciBkYXRhID0gcmVzcG9uc2UuanNvbigpLm9ialxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgbG9nb3V0VXNlcigpIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcclxuICAgIH0gXHJcblxyXG4gICAgdXBkYXRlVXNlcih1c2VyaWQsIHVzZXI6IFVzZXIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlNlbmRpbmcgdGhpcyB1c2VyXCIgKyB1c2VyKTtcclxuICAgICAgICB2YXIgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSA/ICc/dG9rZW49JyArIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpIDogJyAnO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLnBhdGNoKHRoaXMudXNlclVybCArICcvJyArIHVzZXJpZCArIHRva2VuLCBKU09OLnN0cmluZ2lmeSh1c2VyKSwge2hlYWRlcnM6IHRoaXMuaGVhZGVyc30pXHJcbiAgICAgICAgICAgICAgICAubWFwKHJlc3BvbnNlID0+IHsgdmFyIGRhdGEgPSByZXNwb25zZS5qc29uKCkub2JqIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
