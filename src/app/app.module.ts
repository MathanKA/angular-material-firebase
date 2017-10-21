import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatStepperModule, MatCardModule, MatFormFieldModule, MatInputModule, MatToolbarModule, MatIconModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';



import { AppComponent } from './app.component';
import { ProgressWizardComponent } from './progress-wizard/progress-wizard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserDetailComponent } from './user-profile/user-detail/user-detail.component';
import { UserEditComponent } from './user-profile/user-edit/user-edit.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    ProgressWizardComponent,
    UserProfileComponent,
    UserDetailComponent,
    UserEditComponent,
    HeaderComponent
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
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
