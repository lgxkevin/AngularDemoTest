import { Component, Input } from "@angular/core";
import { DataService } from "./demo/services/data.service";

@Component({
  selector: "app-demo-d",
  template: `<div class="demo">
    Demo D {{ getWaitingMessage() }}
    <div>{{ output }}</div>
    <app-filter-switch 
      (switchEvent)="updateFilterStatus($event)"
      [filterStatus]="filterActive">
    </app-filter-switch>
  </div>`,
  styles: [``]
})
export class DemoDComponent {
  title = "DemoDComponent";
  filterActive = true;

  @Input() data: object[];
  @Input() dataTwo: object[];
  @Input() filterValue: string;
  
  public output: string;

  constructor(private dataService: DataService){ }

  ngOnInit() {
    this.getOutput();
  }

  ngOnChanges() {
    this.getOutput();
  }

  private combineData(dataOne: object[], dataTwo: object[]) {
    if (dataOne && dataTwo) return dataOne.concat(dataTwo);
    else return [];
  }

  public getWaitingMessage() {
    if (this.data) return "has data";
    else return "no has data";
  }

  public updateFilterStatus($event: boolean) {
    this.filterActive = $event

    this.getOutput();
  }

  public getcontent(data: any, filterValue: any): string {
    return this.dataService.getContent(data, filterValue);
  }

  public getOutput(){
    const inputData = this.combineData(this.data, this.dataTwo);
    this.output = this.filterActive
      ? this.getcontent(inputData, this.filterValue)
      : "Inactive";
  }

}
