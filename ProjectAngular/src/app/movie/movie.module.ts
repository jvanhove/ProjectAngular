import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MovieComponent } from './movie.component';
import { MovieService } from './movie.service';



@NgModule({
  declarations: [MovieComponent],
  imports: [
    SharedModule,
  ],
  exports: [
    MovieComponent
  ],
  providers:[
    MovieService
  ]
})
export class MovieModule { }
