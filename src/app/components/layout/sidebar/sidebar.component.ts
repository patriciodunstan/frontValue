import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  @Input() companies: { name: string }[] = [];
  @Output() companySelected = new EventEmitter<string>();

  selectCompany(company: { name: string }) {
    this.companySelected.emit(company.name);
  }

}
