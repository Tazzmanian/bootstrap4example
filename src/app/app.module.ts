import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumComponent } from './album/album.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PricingComponent } from './pricing/pricing.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductComponent } from './product/product.component';
import { CoverComponent } from './cover/cover.component';
import { CarouselComponent } from './carousel/carousel.component';
import { BlogComponent } from './blog/blog.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { StickyFooterComponent } from './sticky-footer/sticky-footer.component';
import { StickyFooterNavbarComponent } from './sticky-footer-navbar/sticky-footer-navbar.component';
import { StarterTemplateComponent } from './starter-template/starter-template.component';
import { GridComponent } from './grid/grid.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { NavbarsComponent } from './navbars/navbars.component';
import { NavbarStaticComponent } from './navbar-static/navbar-static.component';
import { NavbarFixedComponent } from './navbar-fixed/navbar-fixed.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumComponent,
    HomeComponent,
    NotfoundComponent,
    PricingComponent,
    CheckoutComponent,
    ProductComponent,
    CoverComponent,
    CarouselComponent,
    BlogComponent,
    DashboardComponent,
    SignInComponent,
    StickyFooterComponent,
    StickyFooterNavbarComponent,
    StarterTemplateComponent,
    GridComponent,
    JumbotronComponent,
    NavbarsComponent,
    NavbarStaticComponent,
    NavbarFixedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
