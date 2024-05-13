import { Injectable } from '@angular/core';
import { Observable,Subject } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  dataObject = new Subject();
  constructor(private http: HttpClient) {    
  }

   getData():  Observable<any>{
    const apiUrl = 'https://jsonplaceholder.typicode.com/comments';
    return this.http.get<any>(apiUrl);
  }

  changeLang(ps:any){
    this.dataObject.next(ps);
  }
}
