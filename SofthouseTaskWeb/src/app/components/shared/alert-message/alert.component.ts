import { Component, OnInit } from '@angular/core';

import { AlertMessageComponent } from './alert-message.component';
import { AlertService } from 'src/app/services/alert.service';
import { AlertType, Alert } from '../../../models/alert';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-alert',
  template: '',
})
export class AlertComponent implements OnInit {
  alerts: Alert[] = [];
  snackBarRef?: MatSnackBarRef<AlertMessageComponent>;

  constructor(private alertService: AlertService, private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.alertService.getAlert().subscribe((alert: Alert) => {
      if (!alert) {
        this.snackBar.dismiss();
        return;
      }

      const duration = alert.autoClear;

      const config: any = {
        panelClass: this.cssClass(alert),
        horizontalPosition: 'right',
        verticalPosition: 'top',
        extraClasses: ['snackbar-newline'],
        duration,
        data: {
          message: alert.message,
          duration,
        },
      };

      this.snackBarRef = this.snackBar.openFromComponent(AlertMessageComponent, config);
      this.snackBarRef.instance.snackBarRefAlertMessageComponent = this.snackBarRef;
    });
  }

  cssClass(alert: Alert) {
    switch (alert.type) {
      case AlertType.Success:
        return 'alert-success';
      case AlertType.Error:
        return 'alert-error';
      case AlertType.Info:
        return 'alert-info';
      case AlertType.Warning:
        return 'alert-warning';
        default:
            return '';
    }
  }
}
