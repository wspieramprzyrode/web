import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-sidebar',
  templateUrl: './layout-sidebar.component.html',
  styleUrls: ['./layout-sidebar.component.scss']
})
export class LayoutSidebarComponent implements OnInit {
  visible: boolean;
  constructor() { }

  ngOnInit(): void {
    this.visible = true;
  }

}
