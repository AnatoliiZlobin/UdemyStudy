import { Component } from '@angular/core';

@Component({
  //selector: 'app-servers',
  //selector: '[app-servers]',
  selector: '. ' +
    'app-servers',
  templateUrl: './servers.component.html',
  //template: `<app-server></app-server><app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
allowNewServer = false;
serverCreationStatus = 'No server was created!';
serverName = 'TEST';
username = '';
serverCreated = false;
servers = ['Testserver', 'Testserver 2', 'Testserver 3'];
showSecret = false;
log = [];

constructor() {
  setTimeout(() => {
    this.allowNewServer = true;
  }, 2000);
}
  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }
  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  onReset() {

  }
  lookSecret() {
    this.showSecret = !this.showSecret;
    //this.log.push(this.log.length + 1 );
    this.logText.push(new Date());
  }
  logText = [];
  onToggleDetails() {
    this.logText.push(new Date());
  }
}
