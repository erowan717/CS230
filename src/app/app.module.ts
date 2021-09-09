import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopNavBarComponent } from './header/top-nav-bar.component';
import { TopHeadingComponent } from './header/top-heading.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    TopHeadingComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
