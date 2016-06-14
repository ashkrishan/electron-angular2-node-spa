import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, Router, RouteSegment} from '@angular/router';

@Component({
    selector: 'my-header',
    template: `
    <nav class="navbar navbar-default navbar-static-top">
    <div class="container pull-left">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"
            aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span> 
                <span class="icon-bar"></span>
            </button>
            <li><a href="#">Projects</a></li>
        </div>
        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
                <li><a [routerLink]="['/']">Messages</a></li>
                <li><a [routerLink]="['/auth']">Authentication</a></li>
                <li><a [routerLink]="['/dbapp']">DB App</a></li>
            </ul>
        </div>
        <!-- /.navbar-collapse -->
    </div>
    <!-- /.container-fluid -->
</nav>

    `,
    directives: [ROUTER_DIRECTIVES],
    styles: [`
        .router-link-active {
            font-weight: bold;
            color: white;
        }
    `],


})

export class NavbarComponent {
    
    constructor(private _router: Router) {

    }

    // isCurrentRoute (routeUrl) {
    //     this._router.urlTree.contains(this._router.createUrlTree(['/', this._routeSegment]))

    // }


//   onClick() {
//     console.log(this.segment);
//   }
}