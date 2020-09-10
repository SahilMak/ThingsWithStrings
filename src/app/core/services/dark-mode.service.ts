import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {

  isDarkOn: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() { }
}
