import {Control} from '@angular/common';

import {ClientDataService} from './client-data.service';

interface IValidation {
    [key: string]: boolean;
}

export class CustomValidators {

    constructor(private _clientService: ClientDataService) {

    }

  static clientIdExists(control: Control) {
    const q = new Promise<IValidation>((resolve, reject) => {

        if(control.value === 'john.doe@gmail.com') {
          resolve({'duplicated': true});
        } else {
          resolve(null);
        }

    });
    return q;
  }
}
