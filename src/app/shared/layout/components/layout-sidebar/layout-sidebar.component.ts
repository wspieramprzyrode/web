import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'app-layout-sidebar',
  templateUrl: './layout-sidebar.component.html'
})
export class LayoutSidebarComponent implements OnInit {
  visible: boolean;
  items: MenuItem[];
  constructor() { }

  ngOnInit(): void {
    this.visible = true;
    this.items = [
      {
          label: 'Home',
          icon: 'pi pi-pw pi-home'
      }
    ];
  }

}
