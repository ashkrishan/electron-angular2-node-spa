///<reference path="../../typings.d.ts"/>
import { bootstrap } from '@angular/platform-browser-dynamic';
import {ROUTER_PROVIDERS} from '@angular/router';
import {provide} from '@angular/core';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {HTTP_PROVIDERS} from '@angular/http';

import { AppComponent } from "./app.component";
import {UserAuthService} from './auth/auth.service';
import {ClientDataService} from './dbapp/client-data.service';

bootstrap(AppComponent, [ROUTER_PROVIDERS, HTTP_PROVIDERS, UserAuthService, ClientDataService , provide(LocationStrategy, { useClass: HashLocationStrategy })]);