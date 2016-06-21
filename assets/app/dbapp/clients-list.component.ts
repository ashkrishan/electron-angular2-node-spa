import {Component, OnInit} from '@angular/core';
import {ControlGroup, FormBuilder, Validators} from '@angular/common';

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
    clients = [];
    searchForm: ControlGroup;

    constructor(private _clientDataService: ClientDataService, private _fb: FormBuilder) {

    }    

    ngOnInit(){
        this.searchForm = this._fb.group({
            searchbox: []
        });

        this._clientDataService.getData()
            .subscribe(response =>  this.clients = response
                                    ,error => console.log(error)
                                   

            );
    }

    onSearch() {
        var search = this.searchForm.value.searchbox;
        console.log(search);
        this._clientDataService.searchData(search)
            .subscribe(response => console.log(response),
                        error => console.log(error))
    }

}