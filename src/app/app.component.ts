import { Component, OnInit } from '@angular/core';
import { DataService } from './demo/services/data.service'
import { demoData } from './demo/models/demoData'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  data: demoData[] = [];
  dataTwo: demoData[] = [];
  title = "Invert Digital";
  filterActive = true;

  filterValueA = "ClientA";
  filterValueB = "ClientB";
  filterValueC = "ClientC";
  filterValueD = "ClientD";

  constructor(private dataService: DataService){}

  ngOnInit(): void {
    this.getData();
    this.getData2();
  }

  getData(): void {
    this.dataService.getDemoData()
    .subscribe(res => this.data = res);
  }

  getData2(): void {
    this.dataService.getDemoData2()
    .subscribe(res => this.dataTwo = res);
  }

  updateFilterStatus($event: boolean) {
    this.filterActive = $event
  }
}
