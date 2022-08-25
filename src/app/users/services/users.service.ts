import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

import { Users } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private _users$  = new Subject<Users[]>();

  constructor(
    private http: HttpClient
  )
  {

    this.http.get<Users[]>('assets/data.json').subscribe(( users ) => {

      this._users$.next( users );

    })

  }

  getUsers() {

    return this._users$.asObservable();
  }

}
