import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { VideoShopComponent } from './video-shop/video-shop.component';
import { NotesViewComponent } from './notes-view/notes-view.component';

const routes: Routes = [
  {path:'', component: NotesViewComponent},
  {path:'video', component: VideoShopComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
