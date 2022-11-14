import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { fcaventapi001Service } from 'src/app/shared/services/fcaventapi001.service';
import swal from 'sweetalert2';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'lista-flauta',
  templateUrl: './lista-flauta.component.html',
  styleUrls: ['./lista-flauta.component.css']
})
export class ListaFlautaComponent implements OnInit {
  ListaFlauta = [];
  @Input() ListaFlautaValue: string;
  @Input() required = false;
  @Input() Disabled = false;
  @Output() ListaFlautaValueChange = new EventEmitter<string>();
  constructor(private Servicios: fcaventapi001Service) {}

  ngOnInit(): void {
    this.Buscar();
  }
  Buscar(): void {
    this.Servicios.ListaFlautas().subscribe(
      (data: any) => {
        this.ListaFlauta = data.data;
      },
      (error) => {
        swal.fire(
          'Datos ',
          'Ha Ocurrio un Error al Momento de Cargar la Informacion de Lista de Flautas,' +
            ' Favor de Comunicarse con el Área de Informatica y Generar un Reporte de Fallas,' +
            ' <strong>Código de Error: ' +
            error.error +
            '</strong>',
          'error'
        );
      }
    );
  }
}
