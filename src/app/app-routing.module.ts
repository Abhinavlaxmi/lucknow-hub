import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellerAdminComponent } from './seller-admin/seller-admin.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'seller-admin',
    component: SellerAdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
