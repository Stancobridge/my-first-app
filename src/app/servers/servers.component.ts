import { Component, OnInit } from '@angular/core';
import { TargetLocator } from 'selenium-webdriver';

@Component({
  selector: '[app-servers]',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServers : boolean = false;
  htmlInput: HTMLInputElement;
  serverName: string;
  serverCreated: boolean = false;
  servers: string[] = ['Server 1', 'Server 2', ]
  constructor() {
    setTimeout(() :void => {
      this.allowNewServers =  !this.allowNewServers
    }, 4000);
   }
    
  ngOnInit() {
  }

  onCreateServer(): void {
    this.serverCreated = true
    this.serverName = "Server is created";
    this.servers.push(this.serverName)
    if(this.htmlInput){
      this.htmlInput.value = null
    }
  }

  updateServer({target: {value}, target} : any): void {
    this.serverName = value
    this.htmlInput = target
  }
}
