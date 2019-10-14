import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private readonly data$ = new Subject<any>();
  data = { text: 'hello', value: {  text: 'hello', value: { text: 'hello', value: 3 } } };

  getData(): Observable<any> {
    return this.data$.asObservable();
  }

  setData(data: any) {
    this.data$.next(data);
  }
}
