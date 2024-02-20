import { Component, OnInit } from '@angular/core';
import { PresupuestoService } from '../presupuesto.service';

@Component({
  selector: 'app-presupuesto',
  templateUrl: './presupuesto.page.html',
  styleUrls: ['./presupuesto.page.scss'],
})
export class PresupuestoPage implements OnInit {

  constructor(public serviceComponenteIonic: PresupuestoService) { }

  ngOnInit() {
  }
  presentarAlerta(){
    this.serviceComponenteIonic.presentActionSheet()
  }
}
