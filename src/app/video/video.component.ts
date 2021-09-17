import { Component, ElementRef, ViewChild, OnInit, OnDestroy } from '@angular/core';
import type * as Hls from 'hls.js';
import { Subscription } from "rxjs";
import { HlsLoaderService } from "./hls-loader/hls-loader.service";
import { VideoService } from "./hls-loader/video-service.model";

@Component({
  template: `<div>
    <h1>Video page</h1>
    <video #video width="640" height="360">
    </video>
    <button (click)="loadVideo()">Load video</button>
    <button (click)="tryReload()">Reload HLS</button>
    <a routerLink='..'> Main page </a>
    </div>
  `,
  styles: [`div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  button { margin-top: 12px;}`]
})
export class VideoComponent implements OnDestroy {

  readonly src = 'assets/geoff.mp4';

  @ViewChild('video', { static: true }) private readonly video: ElementRef<HTMLVideoElement>;

  private hls: Hls | undefined;
  private events: any | undefined;
  private subscription$$: Subscription;

  constructor(videoService: VideoService) {
    this.subscription$$ = videoService.get$().subscribe(hls => this.hls = hls);
    this.subscription$$.add(videoService.getEvents$().subscribe(events => this.events = events));
  }

  ngOnDestroy(): void {
    this.subscription$$.unsubscribe();
  }

  loadVideo(): void {
    this.hls.attachMedia(this.video.nativeElement);
    this.hls.on(this.events.MEDIA_ATTACHED, () => {
      this.hls.loadSource(this.src);
      this.video.nativeElement.setAttribute('src', this.src);
      this.video.nativeElement.play();
    });
  }

  async tryReload(): Promise<void> {
    const HLS = await import('hls.js') as unknown as { default: () => void, isSupported: () => boolean };
    if (HLS.isSupported()) {
      console.log('reloaded');
    }
  }
}
