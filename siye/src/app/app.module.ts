import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Bootstrap&&Fuentes e iconos
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
library.add(faExternalLinkAlt);
library.add(faUserCircle);
//Azure Graph
import { MsalModule } from '@azure/msal-angular';
import { OAuthSettings } from '../oauth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { AlertsComponent } from './alerts/alerts.component';
import { FooterComponent } from './footer/footer.component';
import { TableCardComponent } from './table-card/table-card.component';
import { AtributeCardComponent } from './atribute-card/atribute-card.component';
import { DatabasesComponent } from './databases/databases.component';
import { FormComponentAtributeComponent } from './form-component-atribute/form-component-atribute.component';
import { FormComponentTableComponent } from './form-component-table/form-component-table.component';
import { FormModalInputComponent } from './form-modal-input/form-modal-input.component';
import { HomeCardComponent } from './home-card/home-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    AlertsComponent,
    FooterComponent,
    TableCardComponent,
    AtributeCardComponent,
    DatabasesComponent,
    FormComponentAtributeComponent,
    FormComponentTableComponent,
    FormModalInputComponent,
    HomeCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    MsalModule.forRoot({
      clientID: OAuthSettings.appId
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
