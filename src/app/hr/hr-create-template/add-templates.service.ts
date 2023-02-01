import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AddTemplatesService {

  private url = 'http://43.88.108.187:5004/test';
  constructor(private httpClient: HttpClient) { }

  addTemplate(template){
    return this.httpClient.post(this.url,JSON.stringify(template));
  }
}
