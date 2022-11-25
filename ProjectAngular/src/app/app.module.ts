import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { WatchitemComponent } from './watchitem/watchitem.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { FormsModule } from '@angular/forms';
import { SeenComponent } from './seen/seen.component';
import { SeenitemComponent } from './seenitem/seenitem.component';
import { SharedModule } from './shared/shared.module';
import { MovieModule } from './movie/movie.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    WatchitemComponent,
    WatchlistComponent,
    SeenComponent,
    SeenitemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    MovieModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
