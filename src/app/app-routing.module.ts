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

const routes: Routes = [
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
