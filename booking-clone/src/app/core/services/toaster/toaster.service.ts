import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IToaster } from '@shared/models/toaster';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToasterService {
  subject = new Subject<IToaster>();
  toast$ = this.subject.asObservable();

  show({ type, title, message }: IToaster) {
    this.subject.next({ type, title, message });
  }

  showHttpsError(error: HttpErrorResponse) {
    this.subject.next({
      type: 'error',
      title: error.name,
      message: error.message,
    });
  }
}
