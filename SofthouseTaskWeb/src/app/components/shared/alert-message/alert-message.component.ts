import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';


@Component({
  selector: 'app-alert-message',
  templateUrl: 'alert-message.component.html',
  styleUrls: ['alert-message.component.css'],
})
export class AlertMessageComponent {
  snackBarRefAlertMessageComponent!: MatSnackBarRef<AlertMessageComponent>;

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) {}
  dismiss() {
    this.snackBarRefAlertMessageComponent.dismiss();
  }
}
