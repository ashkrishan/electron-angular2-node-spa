import {Component, OnInit} from '@angular/core';
import {ControlGroup, FormBuilder, Validators} from '@angular/common';
import {Observable} from 'rxjs/Observable';
//import 'rxjs/Rx';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/mergeAll';



import {ClientDataService} from './client-data.service';

@Component({
    moduleId: module.id,
    templateUrl: 'clients-list.template.html',
    styles: [`
            .searchbox {
                width: 50%;
                margin: auto 0 ;
                padding-bottom: 20px;
            }
            `]
})

export class ClientsListComponent implements OnInit {
    clients: Observable<any>;
    searchForm: ControlGroup;

    constructor(private _clientDataService: ClientDataService, private _fb: FormBuilder) {

    }    

    ngOnInit(){
        this.searchForm = this._fb.group({
            searchbox: []
        });        

        this.searchForm.controls.searchbox.valueChanges
            .filter(text => text.length > 2)
            .debounceTime(400)
            .distinctUntilChanged()
            .subscribe(data => this._clientDataService.searchData(this.searchForm.value)            
                                .subscribe(response =>  { this.clients = response 
                                      console.log(response);
                                    }
                                    ,error => console.log(error))
            )
    
            //.subscribe(response => console.log(response));


        // this._clientDataService.getData()            
        //     .subscribe(response =>  { this.clients = response 
        //                               console.log(response);
        //                             }
        //                             ,error => console.log(error)
                                   

            // );
    }

    // onSearch() {
    //    this.clients$ = this.searchForm.controls.searchbox.valueChanges
    //                     .subscribe(response => console.log(response));

        // var search = this.searchForm.find('searchbox');
        // let searchStream = search.valueChanges
        //     .filter(text => text.length > 2)
        //     .debounceTime(500)
        //     .distinctUntilChanged()

        // searchStream.subscribe(data => this._clientDataService.getData()            
        //                         .subscribe(response =>  { this.clients = response 
        //                               console.log(response);
        //                             }
        //                             ,error => console.log(error))
        //     );

        // searchStream.

            
        // console.log(search);
        // this._clientDataService.searchData(search)
        //     .subscribe(response => console.log(response),
        //                 error => console.log(error))
    }

