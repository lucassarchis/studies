import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagina-com-paramentros',
  templateUrl: './pagina-com-paramentros.component.html',
  styleUrls: ['./pagina-com-paramentros.component.css']
})
export class PaginaComParamentrosComponent {
  id: number | null = 0;
  idade: number | null = 0;
  nome: string | null = "";

  constructor(private route: ActivatedRoute){

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
    });

    this.route.queryParamMap.subscribe(params => {
      this.idade = Number(params.get("idade"));
      this.nome = params.get("nome");
    });

  }
}
