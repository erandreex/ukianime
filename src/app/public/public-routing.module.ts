import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BrowseComponent } from './pages/browse/browse.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { DescriptionComponent } from './pages/description/description.component';
import { SearchComponent } from './pages/search/search.component';
import { ToolsComponent } from './pages/tools/tools.component';
import { CheckGuard } from '../auth/guards/check.guard';
import { LandingComponent } from './pages/landing/landing.component';
import { ValidarTokenGuard } from '../auth/guards/validar-token.guard';
import { FavoritesComponent } from '../auth/pages/favorites/favorites.component';

const routes: Routes = [
    {
        path: '',
        component: LandingComponent,
        canActivate: [CheckGuard],
        canLoad: [CheckGuard],
    },
    {
        path: 'browse',
        component: BrowseComponent,
        canActivate: [CheckGuard],
        canLoad: [CheckGuard],
    },
    {
        path: 'nosotros',
        component: NosotrosComponent,
        canActivate: [CheckGuard],
    },
    {
        path: 'anime/:id',
        component: DescriptionComponent,
        canActivate: [CheckGuard],
    },
    {
        path: 'tecnologias',
        component: ToolsComponent,
        canActivate: [CheckGuard],
    },
    {
        path: 'search',
        component: SearchComponent,
        canActivate: [CheckGuard],
    },
    {
        path: 'favoritos/:page',
        component: FavoritesComponent,
        canLoad: [ValidarTokenGuard],
        canActivate: [ValidarTokenGuard],
    },
    {
        path: 'favoritos',
        redirectTo: 'favoritos/1',
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PublicRoutingModule {}
