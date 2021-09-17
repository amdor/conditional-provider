import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export abstract class VideoService {

  abstract get$(): Observable<any>;

  abstract getEvents$(): Observable<any>;
}
