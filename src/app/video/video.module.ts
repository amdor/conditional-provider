import { Injector, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ConfigService } from "../config.service";
import { HlsLoaderService } from "./hls-loader/hls-loader.service";
import { NoopService } from "./hls-loader/noop-loader.service";
import { VideoService } from "./hls-loader/video-service.model";
import { VideoComponent } from "./video.component";

const routes: Routes = [
  {
    path: '',
    component: VideoComponent
  }
];

const videoServiceFactory = (configService: ConfigService, injector: Injector): VideoService => {
  if (!configService.getUseHls()) {
    return injector.get(NoopService);
  }

  return injector.get(HlsLoaderService);
};

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: [
    VideoComponent
  ],
  providers: [
    { provide: VideoService, useFactory: videoServiceFactory, deps: [ConfigService, Injector] }
  ]
})
export class VideoModule { }
