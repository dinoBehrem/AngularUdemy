import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'recipe-app';

  itemSelected: string = 'recipe';

  onNavigation(event: string) {
    this.itemSelected = event;
  }
}
