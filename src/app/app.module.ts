import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { MetricsComponent } from './components/metrics/metrics.component';
import { MetricCardComponent } from './components/metric-card/metric-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BlogCardComponent } from './components/blog-card/blog-card.component';
import { BlogGridComponent } from './components/blog-grid/blog-grid.component';
import { AboutComponent } from './pages/about/about.component';
import { ManufacturingComponent } from './components/indy/manufacturing/manufacturing.component';
import { SelectComponent } from './components/inputs/select/select.component';
import { BlueprintComponent } from './components/indy/blueprint/blueprint.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CarouselComponent } from './components/carousel/carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { MatTabsModule } from '@angular/material';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PermitComponent } from './pages/permit/permit.component';
import { WarrantsComponent } from './pages/warrants/warrants.component'
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PageNotFoundComponent,
    MetricsComponent,
    MetricCardComponent,
    BlogCardComponent,
    BlogGridComponent,
    AboutComponent,
    ManufacturingComponent,
    SelectComponent,
    BlueprintComponent,
    CarouselComponent,
    PermitComponent,
    WarrantsComponent
  ],
  imports: [
    BrowserModule,
    // CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTabsModule,
    FontAwesomeModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
