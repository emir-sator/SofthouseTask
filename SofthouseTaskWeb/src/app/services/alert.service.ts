import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { Alert, AlertType } from '../../app/models/alert';

@Injectable()
export class AlertService {
  private subject = new Subject<Alert>();

  constructor() {}

  getAlert(): Observable<any> {
    return this.subject.asObservable();
  }

  success(message: string, autoClear = 2000) {
    this.alert(AlertType.Success, message, autoClear);
  }

  error(message: string, autoClear = 0) {
    this.alert(AlertType.Error, message, autoClear);
  }

  info(message: string, autoClear = 2000) {
    this.alert(AlertType.Info, message, autoClear);
  }

  warn(message: string, autoClear = 0) {
    this.alert(AlertType.Warning, message, autoClear);
  }

  alert(type: AlertType, message: string, autoClear: number = 0) {
    this.subject.next({
      type,
      message,
      autoClear,
    } as Alert);
  }

//   clear() {
//     this.subject.next();
//   }
}
