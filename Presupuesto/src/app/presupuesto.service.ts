import { Injectable } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class PresupuestoService {
  accion:String = 'Nones'
  constructor(public actionSheetController: ActionSheetController) { }
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Actions',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          data: {
            action: 'delete',
          },
          handler:()=> {
            this.accion ='Wazzzaaaa'
          },
        },
        {
          text: 'Share',
          data: {
            action: 'share',
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
        },
      ],
    });

    await actionSheet.present();
  }
}
