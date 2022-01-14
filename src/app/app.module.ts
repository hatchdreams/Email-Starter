import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component'
import { HomeComponent } from './home/home.component';
import { SelectedEmailComponent } from './selected-email/selected-email.component';
import { EmailMainComponent } from './email-main/email-main.component';
import { EmailListComponent } from './email-list/email-list.component';
import { SendEmailComponent } from './send-email/send-email.component';

import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from  '@angular/common/http';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
// import { TableModule } from 'primeng/table';
import { MenubarModule } from 'primeng/menubar';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    SendEmailComponent,
    SelectedEmailComponent,
    EmailMainComponent,
    EmailListComponent
  ],
  imports: [
    CardModule,
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    MenubarModule,
    InputTextModule,
    InputTextareaModule,
    ButtonModule,
    FormsModule,
    HttpClientModule,
    // TableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
