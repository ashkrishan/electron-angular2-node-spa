import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import {User} from './user'; 


@Injectable()
export class UserAuthService {

    userUrl = 'http://localhost:3000/user';
    headers = new Headers({'Content-Type': 'application/json'});


    constructor(private _http: Http) {

    }

    signupUser(user: User){
        return this._http.post(this.userUrl, JSON.stringify(user), {headers: this.headers})
            .map(response => { var data = response.json().obj 
                                return data;
                             })
            .catch(error => Observable.throw(error.json()));
    }

    signinUser(user: User) {
        return this._http.post(this.userUrl + '/' + 'signin', JSON.stringify(user), {headers: this.headers})
            .map(response => { var data = response.json().obj
                               return data;
                             }
            )
            .catch(error => Observable.throw(error.json()));
    }

    getUsers() {
        return this._http.get(this.userUrl)
            .map(response => { var data = response.json().obj
                               return data;
                             })
            .catch(error => Observable.throw(error.json()));
        
    }

    getUser(userId) {
        return this._http.get(this.userUrl + '/' + userId)
            .map(response =>  { var data = response.json().obj
                               return data;
                             })
    }


    logoutUser() {
        sessionStorage.clear();
        
    } 

    updateUser(userid, user: User) {
        console.log("Sending this user" + user);
        var token = sessionStorage.getItem('token') ? '?token=' + sessionStorage.getItem('token') : ' ';
        return this._http.patch(this.userUrl + '/' + userid + token, JSON.stringify(user), {headers: this.headers})
                .map(response => { var data = response.json().obj 
                                    return data;
                                });
        
    }

    isLoggedIn() {
        if(sessionStorage.getItem('token') && sessionStorage.getItem('token') != null) {
            return true;
        }
        return false;
    }



}