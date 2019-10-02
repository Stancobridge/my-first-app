import { Component } from "@angular/core";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent { 
  serverId: number = 434;
  serverStatus: string;

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';

  }

  getColor() : string {
    return this.serverStatus === 'online' ? 'green' : 'red'
  }


  
}