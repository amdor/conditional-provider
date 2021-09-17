import { Injectable } from "@angular/core";
import type * as Hls from 'hls.js';
import { Observable, ReplaySubject, Subject } from "rxjs";
import { VideoService } from "./video-service.model";


@Injectable({
  providedIn: "root"
})
export class HlsLoaderService implements VideoService {
  private hls$: Subject<Hls>;
  private events$: Subject<any>;

  constructor() {
    this.hls$ = new ReplaySubject<Hls>(1);
    this.events$ = new ReplaySubject<any>(1);
    this.load();
  }

  get$(): Observable<Hls> {
    return this.hls$.asObservable();
  }

  getEvents$(): Observable<any> {
    return this.events$.asObservable();
  }

  private async load(): Promise<void> {
    const HLS = (await import('hls.js') as any).default;
    if (!HLS.isSupported()) {
      return;
    }
    this.hls$.next(new HLS());
    this.events$.next(HLS.Events);
  }
}
