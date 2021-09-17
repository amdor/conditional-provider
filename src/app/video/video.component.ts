import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import type * as Hls from 'hls.js';

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
export class VideoComponent implements OnInit {

  readonly src = 'assets/geoff.mp4';

  private hls: Hls | undefined;
  private HLS: typeof Hls | undefined;

  @ViewChild('video', { static: true }) private readonly video: ElementRef<HTMLVideoElement>;

  async ngOnInit(): Promise<void> {
    import('hls.js');
    import('hls.js');
    const HLS = await import('hls.js') as unknown as { default: () => void, isSupported: () => boolean };
    console.log('hls loaded');
    if (!HLS.isSupported()) {
      return;
    }
    this.hls = new HLS.default();
    this.HLS = HLS as unknown as typeof Hls;
  }

  loadVideo(): void {
    this.hls.attachMedia(this.video.nativeElement);
    this.hls.on(this.HLS.Events.MEDIA_ATTACHED, () => {
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
