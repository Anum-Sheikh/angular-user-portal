import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';

import { SharedDataService } from './services/data.service'
import {ToastrModule} from "ngx-toastr";
import {FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LayoutModule } from './layout/layout.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    LayoutModule,
    AppRoutingModule,
    ToastrModule.forRoot({
      preventDuplicates: true
    }),
  ],
  providers: [SharedDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
