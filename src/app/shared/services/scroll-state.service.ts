import { Injectable, signal } from "@angular/core";

@Injectable({ providedIn: "root" })
export class ScrollStateService {
  public scrollTop = signal(0);
  public scrollHeight = signal(0);
  public clientHeight = signal(0);

  public setScrollState(scrollTop: number, scrollHeight: number, clientHeight: number) {
    this.scrollTop.set(scrollTop);
    this.scrollHeight.set(scrollHeight);
    this.clientHeight.set(clientHeight);
  }
}
