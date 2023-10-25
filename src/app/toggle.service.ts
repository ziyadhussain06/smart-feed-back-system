import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ToggleService {
  private isSidebarVisible = new BehaviorSubject<boolean>(true);
  sidebarState$ = this.isSidebarVisible.asObservable();

  toggleSidebar() {
    this.isSidebarVisible.next(!this.isSidebarVisible.value);
  }
}
