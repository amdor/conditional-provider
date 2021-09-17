import { Injectable } from "@angular/core";
import type * as Hls from 'hls.js';
import { EMPTY, Observable } from "rxjs";
import { VideoService } from "./video-service.model";


@Injectable({
  providedIn: "root"
})
export class NoopService implements VideoService {

  get$(): Observable<never> {
    return EMPTY;
  }

  getEvents$(): Observable<never> {
    return EMPTY;
  }
}
