import { SwUpdate } from "@angular/service-worker";
import { Injectable } from "@angular/core";

@Injectable()
export class PromptUpdateService {

  constructor(updates: SwUpdate) {
    updates.available.subscribe(event => {
     // if (promptUser(event)) {
        updates.activateUpdate().then(() => document.location.reload());
     // }
    });
  }
}