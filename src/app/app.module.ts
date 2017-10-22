import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatButtonModule, MatCheckboxModule, MatIconModule, MatMenuModule} from '@angular/material';
import {MatStepperModule, MatCardModule, MatFormFieldModule, MatInputModule, MatToolbarModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';



import { AppComponent } from './app.component';
import { ProgressWizardComponent } from './progress-wizard/progress-wizard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserDetailComponent } from './user-profile/user-detail/user-detail.component';
import { UserEditComponent } from './user-profile/user-edit/user-edit.component';
import { HeaderComponent } from './header/header.component';
import { FirstSectionComponent } from './sections/first-section/first-section.component';
import { FooterComponent } from './footer/footer.component';
import { CardSectionComponent } from './sections/card-section/card-section.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    ProgressWizardComponent,
    UserProfileComponent,
    UserDetailComponent,
    UserEditComponent,
    HeaderComponent,
    FirstSectionComponent,
    FooterComponent,
    CardSectionComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatStepperModule,
    FlexLayoutModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
