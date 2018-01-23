import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { DdeListComponent } from './dde-list/dde-list.component';

import { environment } from './../environments/environment';
import { FormsModule } from '@angular/forms';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { ModalModule } from 'ngx-bootstrap/modal';

import { DdeSessionComponent } from './dde-session/dde-session.component';
import { DdeCodeExplorerComponent } from './dde-code-explorer/dde-code-explorer.component';
import { DdeDashboardComponent } from './dde-dashboard/dde-dashboard.component';
import { DdeToasterComponent } from './dde-toaster/dde-toaster.component';

import { DdeApiService } from './services/dde-api.service';
import { EncryptService } from './services/encrypt.service';
import { CodeSnippetsRepoService } from './services/code-snippets-repo.service';
import { DdeDialogComponent } from './dde-dialog/dde-dialog.component';
import { DdeReferencesComponent } from './dde-references/dde-references.component';
/*
// Define the routes
const ROUTES = [
  {
    path: '',
    redirectTo: 'dde',
    pathMatch: 'full'
  },
  {
    path: 'dde',
    component: DdeListComponent
  }
];*/

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    DdeListComponent,
    DdeSessionComponent,
    DdeCodeExplorerComponent,
    DdeDashboardComponent,
    DdeToasterComponent,
    DdeDialogComponent,
    DdeReferencesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BsDropdownModule.forRoot(),
    AccordionModule.forRoot(),
    ModalModule.forRoot(),
    FormsModule    
    //RouterModule.forRoot(ROUTES), // Add routes to the app
    //AngularFireModule.initializeApp(environment.firebase),
    //AngularFireDatabaseModule,
    //AngularFireAuthModule,
    //NgbModule.forRoot()
  ],
  providers: [
    DdeApiService,
    EncryptService,
    CodeSnippetsRepoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
