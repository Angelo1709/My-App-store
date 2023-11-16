// search-apps.component.ts
import { Component } from '@angular/core';
import { AppService } from 'src/app/app.service'; // Asegúrate de poner la ruta correcta

@Component({
  selector: 'app-search-apps',
  templateUrl: './search-apps.component.html',
  styleUrls: ['./search-apps.component.scss'],
})
export class SearchAppsComponent {
  terminoBusqueda: string = '';
  aplicacionesEncontradas: string[] = [];

  constructor(private appService: AppService) {}

  buscarAplicaciones() {
    if (this.terminoBusqueda.trim() !== '') {
      this.aplicacionesEncontradas = this.appService.buscarAplicacion(this.terminoBusqueda);
    } else {
      this.aplicacionesEncontradas = [];
    }
  }
}
