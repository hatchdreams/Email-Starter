import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component'
import { SelectedEmailComponent } from './email/selected-email/selected-email.component';
import { EmailMainComponent } from './email/email-main/email-main.component';
import { EmailListComponent } from './email/email-list/email-list.component';
import { SendEmailComponent } from './email/send-email/send-email.component';

import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from  '@angular/common/http';
import { BadgeModule } from 'primeng/badge';

import { ButtonModule } from 'primeng/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TableModule } from 'primeng/table';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    EmailMainComponent,
    EmailListComponent,
    SelectedEmailComponent,
    SendEmailComponent,
  ],
  imports: [
    AppRoutingModule,
    BadgeModule,
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    CardModule,
    FormsModule,
    HttpClientModule,
    InputTextModule,
    InputTextareaModule,
    MenubarModule,
    TableModule,
    MenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
