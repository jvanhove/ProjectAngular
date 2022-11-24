import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { WatchitemComponent } from './watchitem/watchitem.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SeenComponent } from './seen/seen.component';
import { SeenitemComponent } from './seenitem/seenitem.component';
@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    HomeComponent,
    MenuComponent,
    WatchitemComponent,
    WatchlistComponent,
    SeenComponent,
    SeenitemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
