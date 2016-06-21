import {Component, OnInit} from '@angular/core';
import {FormBuilder,ControlGroup, Validators} from '@angular/common';

import {TabsComponent} from '../shared/tabs.component';
import {TabComponent} from '../shared/tab.component';
import {ClientDataService} from './client-data.service';

@Component({
  moduleId: module.id, 
  templateUrl: 'tab-data.template.html',
  directives: [TabsComponent, TabComponent]
})
export class TabDataComponent implements OnInit{
  clientForm: ControlGroup;

  constructor(private _fb: FormBuilder, private _clientDataService: ClientDataService) {


  }

  ngOnInit() {
      this.clientForm = this._fb.group({
      cl_firstName: [],
      cl_middleName: [],
      cl_lastName: []
    });


  }

  
    onSubmit() {
      this._clientDataService.createClient(this.clientForm.value)
        .subscribe(response => console.log(response));
    }

}