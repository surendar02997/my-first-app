import {Component} from '@angular/core';

@Component({
    selector:'app-server',
    templateUrl:'server.component.html'
})

export class ServerComponent{
alloswerver=false;
serveridcreated=false;
server_id:number=1001;
server_status:string="offline";
server_name:string="";

input_text=false;

server_avaliavle:string="no server is avaliavble";

constructor(){
    setTimeout(() => {
        this.alloswerver=true;
        
    }, 2000);

    
}

oncreateserver(){
this.server_avaliavle="Servers avaliavble";

}

oncreateserver1(){
    
    this.serveridcreated=true;
    }
    



}