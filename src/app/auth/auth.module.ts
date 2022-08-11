import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AuthRoutingModule } from './auth-routing.module';

import { FavoritesComponent } from './pages/favorites/favorites.component';
import { SharedModule } from '../shared/shared.module';

import { LoginComponent } from './components/login/login.component';
import { SigninComponent } from './components/signin/signin.component';
import { AccountComponent } from './pages/account/account.component';
import { ProfileComponent } from './settings/profile/profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ChangePassComponent } from './settings/change-pass/change-pass.component';
import { QuestionsSecurityComponent } from './settings/questions-security/questions-security.component';
import { DesactivateComponent } from './settings/desactivate/desactivate.component';
import { Rest1Component } from './components/restablecer/rest1/rest1.component';
import { Rest2Component } from './components/restablecer/rest2/rest2.component';
import { Rest3Component } from './components/restablecer/rest3/rest3.component';

@NgModule({
    declarations: [
        FavoritesComponent,
        LoginComponent,
        SigninComponent,
        AccountComponent,
        ProfileComponent,
        ChangePassComponent,
        QuestionsSecurityComponent,
        DesactivateComponent,
        Rest1Component,
        Rest2Component,
        Rest3Component,
    ],
    imports: [CommonModule, RouterModule, ReactiveFormsModule, AuthRoutingModule, SharedModule],
    exports: [],
})
export class AuthModule {}
