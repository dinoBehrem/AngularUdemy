import { Component } from "@angular/core";

@Component({
        selector: 'app-server',
        templateUrl:'./server.component.html'
    })
export class ServerComponent{
    _serverId: number = 10;
    _serverStatus: string = "offline";

    getServerStatus(): string {
        return this._serverStatus;
    }
}