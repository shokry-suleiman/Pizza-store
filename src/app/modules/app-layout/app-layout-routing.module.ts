import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './app-layout.component';

const routes: Routes = [
	{
		path: '', component: AppLayoutComponent, children: [
			{ path: '', pathMatch: 'full', redirectTo: 'store' },
			{ path: 'store', loadChildren: () => import('../store/store.module').then(m => m.StoreModule) },
			{ path: 'admin', loadChildren: () => import('../admin/admin.module').then(m => m.AdminModule) },
			{ path: 'checkout', loadChildren: () => import('../checkout/checkout.module').then(m => m.CheckoutModule) },

		]
	}

];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AppLayoutRoutingModule { }
