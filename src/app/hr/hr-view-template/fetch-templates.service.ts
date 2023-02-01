import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FetchTemplatesService {

  constructor(private _http:HttpClient) { }

  gettemplates(){
    return this._http.get('http://43.88.108.187:5004/test');
  }
}
