import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')
    .set('Access-Control-Allow-Methods', 'POST')
    .set('Access-Control-Allow-Headers', 'Origin')
    .set('Access-Control-Allow-Credentials', 'true');
    
@Injectable({
  providedIn: 'root'
})
export class EvepraisalService {
  private _url = "http://localhost:5000/api/evepraisalprices";
  constructor(private _http: HttpClient) { }

  query(items: string[]) {
    const data = items.map( i => `${i} 1`)
    return this._http.get(`${this._url}?names=${data.join(',')}`).toPromise();
  }
}
