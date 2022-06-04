import { Component, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-filter-switch',
  templateUrl: './filter-switch.component.html',
  styleUrls: ['./filter-switch.component.css']
})
export class FilterSwitchComponent  {
  @Input() filterStatus!: boolean;
  @Output() switchEvent = new EventEmitter<boolean>();

  onFilterToggle(){
    this.filterStatus = !this.filterStatus;
    this.switchEvent.emit(this.filterStatus)
  }
}
