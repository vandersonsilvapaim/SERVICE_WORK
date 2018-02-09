import { interval } from 'rxjs/observable/interval';
import { SwUpdate } from '@angular/service-worker';
import { Injectable } from '@angular/core';

@Injectable()
export class CheckForUpdateService {

  constructor(updates: SwUpdate) {
    interval(6 * 60 * 60).subscribe(() => updates.checkForUpdate());
  }
}