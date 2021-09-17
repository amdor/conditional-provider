import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoComponent } from "./video/video.component";
import { WelcomeComponent } from "./welcome-page/welcome.component";

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'video', component: VideoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
