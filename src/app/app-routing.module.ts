import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { BuyerComponent } from './buyer/buyer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PricingComponent } from './pricing/pricing.component';
import { SellerComponent } from './seller/seller.component';
import { UserComponent } from './user/user.component';

// const routes: Routes = [];
const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'admin', component: AdminComponent  , children:[{path:'user', component: UserComponent}] },
  { path: 'buyer', component: BuyerComponent },
  { path: 'seller', component: SellerComponent },
  

  
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
