import {Component} from '@angular/core';
import {FormBuilder,ControlGroup, Validators} from '@angular/common';

import {TabsComponent} from '../shared/tabs.component';
import {TabComponent} from '../shared/tab.component';

@Component({
  moduleId: module.id, 
  templateUrl: 'tab-data.template.html',
  directives: [TabsComponent, TabComponent]
})
export class TabDataComponent {
  clientForm: ControlGroup;

  constructor(private _fb: FormBuilder) {
    this.clientForm = this._fb.group({
      firstName: [],
      middleName: [],
      lastName: []
    });


  }
  
    onSubmit() {
      console.log(this.clientForm.value);
    }

}