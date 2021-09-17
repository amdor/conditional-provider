import { Injectable } from "@angular/core";
import * as Hls from "hls.js";
import { Observable, ReplaySubject, Subject } from "rxjs";


@Injectable({
  providedIn: "root"
})
export class ConfigService {
  private useHls = false;

  setUseHls(value: boolean): void {
    this.useHls = value;
  }

  getUseHls(): boolean {
    return this.useHls;
  }
}
