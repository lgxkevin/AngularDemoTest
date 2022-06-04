import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './shared/components/title/title.component';
import { DemoDComponent } from "./demo.component-d";
import { DemoNoDataComponent } from './demo/components/demo-no-data/demo-no-data.component';
import { FilterSwitchComponent } from './shared/components/filter-switch/filter-switch.component'

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    DemoDComponent,
    DemoNoDataComponent,
    FilterSwitchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
