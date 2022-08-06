import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { BottomNavComponent } from './components/bottom-nav/bottom-nav.component';
import { ModalCustomizesComponent } from './components/modal-customizes/modal-customizes.component';
import { SplitPipe } from './pipes/split.pipe';
import { IndexComponent } from './index/index/index.component';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { AuthIndexComponent } from './index/auth-index/auth-index.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { ToolsCardComponent } from './components/tools-card/tools-card.component';
import { CheckImageDirective } from './directives/check-image.directive';
import { AnimeCardComponent } from './components/anime-card/anime-card.component';

@NgModule({
    declarations: [
        FooterComponent,
        HeaderComponent,
        NotFoundComponent,
        SidenavComponent,
        BottomNavComponent,
        ModalCustomizesComponent,
        SplitPipe,
        IndexComponent,
        CarrouselComponent,
        AuthIndexComponent,
        PaginationComponent,
        ProfileCardComponent,
        ToolsCardComponent,
        CheckImageDirective,
        AnimeCardComponent,
    ],
    imports: [CommonModule, RouterModule],
    exports: [
        FooterComponent,
        HeaderComponent,
        NotFoundComponent,
        SidenavComponent,
        BottomNavComponent,
        ModalCustomizesComponent,

        CarrouselComponent,
        PaginationComponent,
        ProfileCardComponent,
        ToolsCardComponent,
        AnimeCardComponent,
    ],
})
export class SharedModule {}
