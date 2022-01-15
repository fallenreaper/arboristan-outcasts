import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DirectorService {
  private _directors: {name: string, role: string, bio: string, image: string}[] = [
    { name: "Darien", role: "CEO", bio: "Greek Guy", image: ''},
    { name: "Meemo", role: "COO", bio: "Meemo Guy", image: ''}
  ]
  constructor() { }

  getAll(): Observable<any[]> {
    return of(this._directors)
  }
}
