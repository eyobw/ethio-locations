import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

// other imports...
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { GeoDistanceService } from './geo-distance.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, LeafletModule
  ],
  providers: [GeoDistanceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
