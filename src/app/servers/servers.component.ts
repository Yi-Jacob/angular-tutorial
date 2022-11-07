import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  selector: ".app-servers",
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
serverId: number = 10;
  serverStatus: string = "online "
  allowNewServer: boolean = false
  serverCreationStatus = "Server not Created"
  serverName = ""
  serverCreated = false;
  servers = ["Server 1", "Server 2"]

  constructor() {
    setTimeout(() => {
  this.allowNewServer = true

    },2000);
   }

   getServerStatus() {
    return this.serverStatus
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated = true
    this.servers.push(this.serverName)
    this.serverCreationStatus = `Server ${this.serverName} Created`
  }

  onUpdateServer(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value
  }

}
