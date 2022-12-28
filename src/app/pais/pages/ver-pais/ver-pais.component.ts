import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from "rxjs/operators";
import { Paises } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Paises;
  
  constructor( 
    private activatedRoute: ActivatedRoute,
    private paisService   : PaisService
    ) { }

  ngOnInit(): void {

    this.activatedRoute.params
    .pipe(switchMap( ({ id }) => this.paisService.obtenerPaisPorCodigo( id )),
    tap( console.log )
    )
    .subscribe({
      next: pais => {
        this.pais = pais;
      }
    });
    
    /*this.activatedRoute.params
    .subscribe({
      next: ({ id }) => {
        console.log(id);

        this.paisService.obtenerPaisPorCodigo( id )
        .subscribe({
          next: pais => {
            console.log( pais );
          }
        });

      }
    });*/
  }

}
