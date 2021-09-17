import { Component } from '@angular/core';
import { ConfigService } from "../config.service";

@Component({
  template: `
    <div>
      <h1> Welcome to the POC page</h1>
      <a routerLink='video'> Video page </a>
      <p><input (change)="onHlsCheckBoxChange($event)" type="checkbox"/><label>Use Hls</label></p>
    </div>
  `,
  styles: [`div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }`]
})
export class WelcomeComponent {

  constructor(private configService: ConfigService) { }

  onHlsCheckBoxChange(evt: any): void {
    this.configService.setUseHls(evt.target.checked);
  }
}
