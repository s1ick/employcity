import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { BuisnessPageComponent } from './buisness-page/buisness-page.component';
import { OrderPageComponent } from './order-page/order-page.component';
import { PricePageComponent } from './price-page/price-page.component';

const routes: Routes = [

  { path: 'buisness', component: BuisnessPageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'price', component: PricePageComponent },
  { path: 'order', component: OrderPageComponent },
  { path: '',  redirectTo: '/buisness',   pathMatch: 'full'},
  { path: '**', redirectTo: '/buisness',  pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
