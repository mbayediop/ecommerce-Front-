import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContainerComponent } from './components/container/container.component';
import { ArticleComponent } from './components/article/article.component';
import { ArticleListeComponent } from './components/article-liste/article-liste.component';
import { ArticleItemComponent } from './components/article-item/article-item.component';
import { FooterComponent } from './components/footer/footer.component';
import { SigninComponent } from './components/authentification/signin/signin.component';
import { SignupComponent } from './components/authentification/signup/signup.component';
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {ROUTES} from "./app.routing";
import {HttpClientModule} from "@angular/common/http";
import {UserAdminComponent} from "./components/admin/user-admin/user-admin.component";
import { ModalArticleViewComponent } from './components/modal-article-view/modal-article-view.component';
import { SidebarsComponent } from './components/admin/sidebars/sidebars.component';
import { CarouselComponent } from './components/carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContainerComponent,
    ArticleComponent,
    UserAdminComponent,
    ArticleListeComponent,
    ArticleItemComponent,
    FooterComponent,
    SigninComponent,
    SignupComponent,
    ModalArticleViewComponent,
    SidebarsComponent,
    CarouselComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
