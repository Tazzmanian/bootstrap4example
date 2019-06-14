import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import { NavbarBottomComponent } from './navbar-bottom/navbar-bottom.component';
import { FloatingLabelsComponent } from './floating-labels/floating-labels.component';
import { OffcanvasComponent } from './offcanvas/offcanvas.component';
import { LayoutComponent } from './layout/layout.component';
import { TypographyComponent } from './typography/typography.component';

const routes: Routes = [
  {
    path: 'typography', component: TypographyComponent
  },
  {
    path: 'layout', component: LayoutComponent
  },
  {
    path: 'offcanvas', component: OffcanvasComponent
  },
  {
    path: 'floating-labels', component: FloatingLabelsComponent
  },
  {
    path: 'navbar-bottom', component: NavbarBottomComponent
  },
  {
    path: 'navbar-fixed', component: NavbarFixedComponent
  },
  {
    path: 'navbar-static', component: NavbarStaticComponent
  },
  {
    path: 'navbars', component: NavbarsComponent
  },
  {
    path: 'jumbotron', component: JumbotronComponent
  },
  {
    path: 'grid', component: GridComponent
  },
  {
    path: 'starter-template', component: StarterTemplateComponent
  },
  {
    path: 'sticky-footer-navbar', component: StickyFooterNavbarComponent
  },
  {
    path: 'sticky-footer', component: StickyFooterComponent
  },
  {
    path: 'sign-in', component: SignInComponent
  },
  {
    path: 'dashboard', component: DashboardComponent
  },
  {
    path: 'blog', component: BlogComponent
  },
  {
    path: 'carousel', component: CarouselComponent
  },
  {
    path: 'cover', component: CoverComponent
  },
  {
    path: 'product', component: ProductComponent
  },
  {
    path: 'checkout', component: CheckoutComponent
  },
  {
    path: 'pricing', component: PricingComponent
  },
  {
    path: 'album', component: AlbumComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: '**', component: NotfoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
