import { Component } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-servicos2',
  templateUrl: './servicos2.component.html',
  styleUrls: ['./servicos2.component.css']
})
export class Servicos2Component {
  descricao = "";
  
  constructor(public logger: LoggerService){

  }
  
  adicionarProduto(){ 
    this.logger.logar(`O nome ${this.descricao} foi adicionado`)
  }

}
