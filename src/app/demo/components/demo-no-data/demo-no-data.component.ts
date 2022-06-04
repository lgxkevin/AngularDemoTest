import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-demo-no-data',
  templateUrl: './demo-no-data.component.html',
  styleUrls: ['./demo-no-data.component.css']
})
export class DemoNoDataComponent implements OnInit {
  title = "DemoAComponent";
  @Input() demoName: string
  @Input() data: object[];
  @Input() filterValue: string;
  @Input() filterActive: boolean;

  public output: string;

  constructor(private dataService: DataService){}

  ngOnInit() {
    this.getOutput();
  }

  ngOnChanges() {
    this.getOutput();
  }

  public getcontent(data: any, filterValue: any) {
    return this.dataService.getContent(data, filterValue);
  }

  public getOutput() {
    this.output = this.filterActive
      ? this.getcontent(this.data, this.filterValue)
      : "Inactive";
  }

}
