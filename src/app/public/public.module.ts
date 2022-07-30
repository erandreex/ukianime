import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PublicRoutingModule } from './public-routing.module';

import { SharedModule } from '../shared/shared.module';

import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { BrowseComponent } from './pages/browse/browse.component';
import { DescriptionComponent } from './pages/description/description.component';
import { SearchComponent } from './pages/search/search.component';
import { ToolsComponent } from './pages/tools/tools.component';

@NgModule({
    declarations: [NosotrosComponent, BrowseComponent, DescriptionComponent, SearchComponent, ToolsComponent],
    imports: [CommonModule, PublicRoutingModule, ReactiveFormsModule, SharedModule],
})
export class PublicModule {}
