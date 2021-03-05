import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userInfo = new BehaviorSubject<any>(null);

  constructor() { }
}
