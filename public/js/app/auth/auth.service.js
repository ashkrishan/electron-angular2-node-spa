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
            .map(function (response) {
            var data = response.json().obj;
            return data;
        })
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
        sessionStorage.clear();
    };
    UserAuthService.prototype.updateUser = function (userid, user) {
        console.log("Sending this user" + user);
        var token = sessionStorage.getItem('token') ? '?token=' + sessionStorage.getItem('token') : ' ';
        return this._http.patch(this.userUrl + '/' + userid + token, JSON.stringify(user), { headers: this.headers })
            .map(function (response) {
            var data = response.json().obj;
            return data;
        });
    };
    UserAuthService.prototype.isLoggedIn = function () {
        if (sessionStorage.getItem('token') && sessionStorage.getItem('token') != null) {
            return true;
        }
        return false;
    };
    UserAuthService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], UserAuthService);
    return UserAuthService;
}());
exports.UserAuthService = UserAuthService;

//# sourceMappingURL=data:application/json;base64,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IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7SHR0cCwgSGVhZGVyc30gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2NhdGNoJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL3Rocm93JztcclxuXHJcbmltcG9ydCB7VXNlcn0gZnJvbSAnLi91c2VyJzsgXHJcblxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVXNlckF1dGhTZXJ2aWNlIHtcclxuXHJcbiAgICB1c2VyVXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC91c2VyJztcclxuICAgIGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30pO1xyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNpZ251cFVzZXIodXNlcjogVXNlcil7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCh0aGlzLnVzZXJVcmwsIEpTT04uc3RyaW5naWZ5KHVzZXIpLCB7aGVhZGVyczogdGhpcy5oZWFkZXJzfSlcclxuICAgICAgICAgICAgLm1hcChyZXNwb25zZSA9PiB7IHZhciBkYXRhID0gcmVzcG9uc2UuanNvbigpLm9iaiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkpKTtcclxuICAgIH1cclxuXHJcbiAgICBzaWduaW5Vc2VyKHVzZXI6IFVzZXIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KHRoaXMudXNlclVybCArICcvJyArICdzaWduaW4nLCBKU09OLnN0cmluZ2lmeSh1c2VyKSwge2hlYWRlcnM6IHRoaXMuaGVhZGVyc30pXHJcbiAgICAgICAgICAgIC5tYXAocmVzcG9uc2UgPT4geyB2YXIgZGF0YSA9IHJlc3BvbnNlLmpzb24oKS5vYmpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkpKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRVc2VycygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQodGhpcy51c2VyVXJsKVxyXG4gICAgICAgICAgICAubWFwKHJlc3BvbnNlID0+IHsgdmFyIGRhdGEgPSByZXNwb25zZS5qc29uKCkub2JqXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkpKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBnZXRVc2VyKHVzZXJJZCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldCh0aGlzLnVzZXJVcmwgKyAnLycgKyB1c2VySWQpXHJcbiAgICAgICAgICAgIC5tYXAocmVzcG9uc2UgPT4gIHsgdmFyIGRhdGEgPSByZXNwb25zZS5qc29uKCkub2JqXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBsb2dvdXRVc2VyKCkge1xyXG4gICAgICAgIHNlc3Npb25TdG9yYWdlLmNsZWFyKCk7XHJcbiAgICAgICAgXHJcbiAgICB9IFxyXG5cclxuICAgIHVwZGF0ZVVzZXIodXNlcmlkLCB1c2VyOiBVc2VyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTZW5kaW5nIHRoaXMgdXNlclwiICsgdXNlcik7XHJcbiAgICAgICAgdmFyIHRva2VuID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSA/ICc/dG9rZW49JyArIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykgOiAnICc7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucGF0Y2godGhpcy51c2VyVXJsICsgJy8nICsgdXNlcmlkICsgdG9rZW4sIEpTT04uc3RyaW5naWZ5KHVzZXIpLCB7aGVhZGVyczogdGhpcy5oZWFkZXJzfSlcclxuICAgICAgICAgICAgICAgIC5tYXAocmVzcG9uc2UgPT4geyB2YXIgZGF0YSA9IHJlc3BvbnNlLmpzb24oKS5vYmogXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGlzTG9nZ2VkSW4oKSB7XHJcbiAgICAgICAgaWYoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSAmJiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpICE9IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcblxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
