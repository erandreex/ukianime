import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BrowseComponent } from './pages/browse/browse.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { DescriptionComponent } from './pages/description/description.component';
import { SearchComponent } from './pages/search/search.component';
import { ToolsComponent } from './pages/tools/tools.component';

const routes: Routes = [
    {
        path: 'browse',
        component: BrowseComponent,
    },
    {
        path: 'nosotros',
        component: NosotrosComponent,
    },
    {
        path: 'anime/:id',
        component: DescriptionComponent,
    },
    {
        path: 'tecnologias',
        component: ToolsComponent,
    },
    {
        path: 'search',
        component: SearchComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PublicRoutingModule {}
