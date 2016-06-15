import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {CollapseDirective} from 'ng2-bootstrap/components/collapse';

@Component({
    selector: 'my-header',
    template: `
    <nav class="navbar navbar-default app-navbar-setting" style="display: block;">
    <div class="container pull-left">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
            <button (click)="isCollapsed = !isCollapsed" type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"
            aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span> 
                <span class="icon-bar"></span>
            </button>
            <!-- <li><a href="#">Projects</a></li> -->
        </div>
        <!-- Collect the nav links, forms, and other content for toggling -->
        <div [collapse]="isCollapsed" class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav" style="display: block; ">
               <!-- <li><a [routerLink]="['/']">Messages</a></li> -->
                <li><a [routerLink]="['/auth']">Authentication</a></li>
                <li><a [routerLink]="['/dbapp']">Add Client</a></li>
                <li><a [routerLink]="['/clients']">Clients</a></li>
            </ul>
        </div>
        <!-- /.navbar-collapse -->
    </div>
    <!-- /.container-fluid -->
</nav>

    `,
    directives: [ROUTER_DIRECTIVES, CollapseDirective],
    styles: [`
        .router-link-active {
            font-weight: bold;
            background-color:  #717B81;        
        };

        
    `],


})

export class NavbarComponent {
    public isCollapsed:boolean = true;
    // constructor() {

    // }

    // isCurrentRoute (routeUrl) {
    //     this._router.urlTree.contains(this._router.createUrlTree(['/', this._routeSegment]))

    // }


//   onClick() {
//     console.log(this.segment);
//   }
}