import {Component,Input} from '@angular/core';
import {CollapseDirective} from 'ng2-bootstrap';

// webpack html imports
let template = require('./collapse-demo.html');

@Component({
  selector: 'collapse-demo',
  directives: [CollapseDirective],
  template: template
})
export class CollapseAppComponent {
 @Input() isCollapsed:boolean = false;
}
