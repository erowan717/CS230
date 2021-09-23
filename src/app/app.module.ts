import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopNavBarComponent } from './header/top-nav-bar.component';
import { TopHeadingComponent } from './header/top-heading.component';
import { BottomFooterComponent } from './foot/bottom-footer.component';
import { ContributeComponent } from './mid/contribute.component';
import { OverallLayoutComponent } from './layout/overall-layout.component';
import { LiquidDotaComponent } from './webpages/LiquidDota.component';
import { LiquidLegendsComponent } from './webpages/LiquidLegends.component';
import { MasterLeagueComponent } from './webpages/Master-League.component';
import { TLnetComponent } from './webpages/TLnet.component';
import { AppRoutingModule } from './app-routing.module';
import { RoutingLayoutComponent } from './layout/routing-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    TopHeadingComponent,
    BottomFooterComponent,
    ContributeComponent,
    OverallLayoutComponent,
    LiquidDotaComponent,
    LiquidLegendsComponent,
    MasterLeagueComponent,
    TLnetComponent,
    RoutingLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
