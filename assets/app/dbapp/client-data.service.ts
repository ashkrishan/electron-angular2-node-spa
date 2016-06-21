import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ClientDataService {

    private _url = "http://127.0.0.1:3000/client";
    headers = new Headers({'Content-Type': 'application/json'});

    constructor(private _http: Http) {

    }
        
    getData() {
        return this._http.get(this._url)
            .map(response => response.json() )
            .catch(error => Observable.throw(error.json()));

    }

    createClient(client) {
        var token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : ' ';
        return this._http.post(this._url + token, JSON.stringify(client), {headers : this.headers})
            .map(response => { var data = response.json().obj;
                               return data;
                             }
            )
            .catch(error => Observable.throw(console.log(error)));

    }

    searchData(searchString: string) {
        var token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : ' ';
        return this._http.post(this._url + token, JSON.stringify(searchString), {headers : this.headers})
                .map(response => response.json())
                .catch(error => Observable.throw(console.log(error)));
    }
}