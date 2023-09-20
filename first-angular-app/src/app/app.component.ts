import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'first-angular-app';

  constructor(){
    setTimeout(() => {
      this._allowNewServer = true;
    }, 4000);
  }
  _allowNewServer: boolean = false;
  _serverCreationStatus: string = "No new servers are created!";
  _isDisplayed: boolean = true;
  _username: string = '';
  
  createNewServer() {
    this._serverCreationStatus = "New server is created! :D";
  }

  onServerUpdated(content: any){
    this._serverCreationStatus = content.target.value;
    console.log(content);
  }

  isButtonDisabled() {
    return this._username.length > 0;
  }

  resetUsername() {
    this._isDisplayed = false;
    this._username = '';
  }
}
