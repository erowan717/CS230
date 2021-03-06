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
import { GameCardComponent } from './mid/game-card.component';
import { HttpClientModule } from '@angular/common/http';
import { UserInfoComponent } from './header/user-info.component';
import { FormsModule } from '@angular/forms';
import { WikiFormComponent } from './webpages/wiki-form.component';
import { SurveyInfoComponent } from './webpages/survey.info.component';
import { EditSurveyInfoComponent } from './webpages/edit-survey-info.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire/compat';
import { AuthComponent } from './auth/auth.component';

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
    RoutingLayoutComponent,
    GameCardComponent,
    UserInfoComponent,
    WikiFormComponent,
    SurveyInfoComponent,
    EditSurveyInfoComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase,'spotify-app'),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
