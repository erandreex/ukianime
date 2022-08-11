import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccountComponent } from './pages/account/account.component';
import { ProfileComponent } from './settings/profile/profile.component';
import { ChangePassComponent } from './settings/change-pass/change-pass.component';
import { QuestionsSecurityComponent } from './settings/questions-security/questions-security.component';
import { DesactivateComponent } from './settings/desactivate/desactivate.component';

const routes: Routes = [
    {
        path: '',
        component: AccountComponent,
        children: [
            {
                path: 'perfil',
                component: ProfileComponent,
            },
            {
                path: 'cambiar-pass',
                component: ChangePassComponent,
            },
            {
                path: 'preguntas',
                component: QuestionsSecurityComponent,
            },
            {
                path: 'desactivar',
                component: DesactivateComponent,
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AuthRoutingModule {}
