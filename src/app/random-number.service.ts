import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomNumberService {

  constructor() { }

  returnRandomNumber(): number {
    return +Math.random().toFixed(0);
  }


}
