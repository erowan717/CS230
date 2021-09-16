import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopNavBarComponent } from './header/top-nav-bar.component';
import { TopHeadingComponent } from './header/top-heading.component';
import { BottomFooterComponent } from './foot/bottom-footer.component';
import { ContributeComponent } from './mid/contribute.component';
import { OverallLayoutComponent } from './layout/overall-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    TopHeadingComponent,
    BottomFooterComponent,
    ContributeComponent,
    OverallLayoutComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
