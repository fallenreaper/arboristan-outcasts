import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JaniceService {
  private _url = 'http://localhost:5000/api/jancieprices';
  constructor(private _http: HttpClient) {}

  query(itemStringArray: string[]) {
    const data = itemStringArray.map ( i => `${i} 1`)
    return this._http.get(`${this._url}?names=${data.join(',')}`).toPromise();
  }
}
