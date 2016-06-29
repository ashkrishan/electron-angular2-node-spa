import {Component, OnInit} from '@angular/core';
import {FormBuilder,ControlGroup, Validators} from '@angular/common';
import {RouteSegment} from '@angular/router';

import * as moment from 'moment';

import {TabsComponent} from '../shared/tabs.component';
import {TabComponent} from '../shared/tab.component';
import {ClientDataService} from './client-data.service';

@Component({
  moduleId: module.id, 
  templateUrl: 'tab-data.template.html',
  directives: [TabsComponent, TabComponent],
  styles: [`
   footer {
   position:fixed;
   left:0px;
   bottom:0px;
   height:30px;
   width:100%;
   background:#2c3e50;
   color:#fff;

    }

    .footer-list {
      float: right;
    }
  `]

})




export class TabDataComponent implements OnInit{
  clientForm: ControlGroup;
  client = {};
  btnTitle: String;
  created_date: string;  
  modified_date: string;  

  constructor(private _fb: FormBuilder, private _clientDataService: ClientDataService, private _routeSegment: RouteSegment) {


  }

  ngOnInit() {
      this.clientForm = this._fb.group({
      cl_firstName: ['', Validators.required],
      cl_middleName: [],
      cl_lastName: []
    });

    // let now = moment().format('LLLL');
    // console.log(now);

    var id = this._routeSegment.getParam('id');
    this.btnTitle = id ? 'Edit client': 'Save Client';
    console.log(id);
    if(id) {
      this._clientDataService.getClient(id)
        .subscribe(response => { this.client = response;
                                console.log(this.client);
                                this.created_date = moment(response.created_date).format('DD/MM/YYYY HH:mm');
                                this.modified_date = moment(response.modified_date).format('DD/MM/YYYY HH:mm');
                                } );
    }


  }

  
    onSubmit() {
      var id = this._routeSegment.getParam('id');
      if(id) {
        this._clientDataService.updateClient(id, this.clientForm.value)
          .subscribe(response => console.log(response));
          
      } else {
      console.log(this.clientForm.value);
      this._clientDataService.createClient(this.clientForm.value)
        .subscribe(response => console.log(response));
        }
    }

}