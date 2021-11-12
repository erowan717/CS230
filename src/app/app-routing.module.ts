import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { OverallLayoutComponent } from './layout/overall-layout.component';
import { LiquidDotaComponent } from './webpages/LiquidDota.component';
import { LiquidLegendsComponent } from './webpages/LiquidLegends.component';
import { MasterLeagueComponent } from './webpages/Master-League.component';
import { QihlComponent } from './webpages/qihl.component';
import { TLnetComponent } from './webpages/TLnet.component';
import { WikiFormComponent } from './webpages/wiki-form.component';

const routes: Routes = [
  { path: 'LiquidDota', component: LiquidDotaComponent },
  { path: 'LiquidLegends', component: LiquidLegendsComponent},
  { path: 'Master-League', component: MasterLeagueComponent},
  { path: 'TLnet', component: TLnetComponent},
  { path: 'qihl', component: QihlComponent},
  { path: 'home', component: OverallLayoutComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'wifi-form', component: WikiFormComponent},
  { path: 'auth', component: AuthComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
