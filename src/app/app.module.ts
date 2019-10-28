import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatTableModule} from '@angular/material/table';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckLoginComponent } from './check-login/check-login.component';
import { IndexComponent } from './index/index.component';
import { UserComponent } from './user/user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoExportExcelComponent } from './demo-export-excel/demo-export-excel.component';
import { DemoExportPdfComponent } from './demo-export-pdf/demo-export-pdf.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CheckLoginComponent,
    IndexComponent,
    UserComponent,
    DemoExportExcelComponent,
    DemoExportPdfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
