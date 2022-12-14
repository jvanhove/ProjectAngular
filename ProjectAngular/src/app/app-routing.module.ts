import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { SeenComponent } from './seen/seen.component';

const routes: Routes = [  
  { path: '', component: HomeComponent },
  { path: 'movie', component: MovieComponent },
  { path: 'watchlist', component: WatchlistComponent },
  { path: 'seen', component: SeenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
