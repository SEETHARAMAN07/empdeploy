import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DispempService {



  constructor(private http: HttpClient) {}

  getUsers(){
    return this.http.get<any>('http://localhost:8000/getemp')
  }
}
