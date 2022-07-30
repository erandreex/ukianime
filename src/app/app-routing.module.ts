import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './shared/pages/not-found/not-found.component';
import { IndexComponent } from './shared/index/index/index.component';
import { LoginComponent } from './auth/components/login/login.component';
import { SigninComponent } from './auth/components/signin/signin.component';
import { ValidarTokenGuard } from './auth/guards/validar-token.guard';
import { AuthIndexComponent } from './shared/index/auth-index/auth-index.component';
import { Rest1Component } from './auth/components/restablecer/rest1/rest1.component';
import { RestIndexComponent } from './shared/index/rest-index/rest-index.component';
import { Rest2Component } from './auth/components/restablecer/rest2/rest2.component';
import { Rest3Component } from './auth/components/restablecer/rest3/rest3.component';

const routes: Routes = [
    {
        path: '',
        component: IndexComponent,
        loadChildren: () => import('./public/public.module').then((m) => m.PublicModule),
    },
    {
        path: '',
        component: AuthIndexComponent,
        children: [
            {
                path: 'login',
                component: LoginComponent,
            },
            {
                path: 'registro',
                component: SigninComponent,
            },
            {
                path: 'restablecer',
                component: Rest1Component,
            },
        ],
    },
    {
        path: 'restablecer',
        component: RestIndexComponent,
        children: [
            {
                path: '',
                component: Rest1Component,
            },
            {
                path: ':username',
                component: Rest2Component,
            },
            {
                path: ':username/:codepass',
                component: Rest3Component,
            },
        ],
    },

    {
        path: 'account',
        component: IndexComponent,
        canLoad: [ValidarTokenGuard],
        canActivate: [ValidarTokenGuard],
        canActivateChild: [ValidarTokenGuard],
        loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
    },
    {
        path: '**',
        component: NotFoundComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
