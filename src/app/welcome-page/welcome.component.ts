import { Component } from '@angular/core';

@Component({
  template: `
    <div>
    <h1> Welcome to the POC page</h1>
    <a routerLink='video'> Video page </a>
    </div>
  `,
  styles: [`div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }`]
})
export class WelcomeComponent { }
