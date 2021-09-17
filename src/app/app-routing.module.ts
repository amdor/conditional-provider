import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from "./welcome-page/welcome.component";

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  {
    path: 'video',
    loadChildren: () => import("./video/video.module").then(m => m.VideoModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
