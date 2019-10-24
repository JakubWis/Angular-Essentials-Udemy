import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
    <p> {{ loadState }} </p>
    <button (click)="onButtonClick()">End loading</button>
    <input type="text" [(ngModel)]="loadState" />
  `
})

export class DashboardComponent {
  loadState = "loading";

  onButtonClick() {
    this.loadState = "loading finished";
  }

  onLoadingStateInput(event) {
    this.loadState = event.target.value;
  }
}
