import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ShopComponent } from './components/shop/shop.component';
import { SingleFlowerComponent } from './components/single-flower/single-flower.component';

const routes: Routes = [
          {
            path: '',   
            redirectTo: '/home', 
            pathMatch: 'full'
          },
          {
            path: 'single-flower/:id',
            component: SingleFlowerComponent
          },
          {
            path: 'shop/:idCategory',
            component: ShopComponent
          },
          {
            path: "home",
            component: HomeComponent
          },
          {
            path: "about-us",
            component: AboutUsComponent
          },
          {
            path: "shop",
            component: ShopComponent
          },
          {
            path: '**', 
            component: PageNotFoundComponent
          }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
