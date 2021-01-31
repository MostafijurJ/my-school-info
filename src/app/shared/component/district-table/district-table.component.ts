import {Component, Input, OnInit, Output,EventEmitter} from '@angular/core';
import {DistrictInfo} from "../../interfaces";

@Component({
  selector: 'app-district-table',
  templateUrl: './district-table.component.html',
  styleUrls: ['./district-table.component.css']
})
export class DistrictTableComponent implements OnInit {

  constructor() { }
  @Input() districtList: DistrictInfo[] = [];
  @Output() rowRemoved = new EventEmitter<number>();
  ngOnInit(): void {
  }

  public deleteDistrict(index:number): void{
    this.districtList.splice(index, 1);
    this.rowRemoved.emit(index);
  console.log(index);
  }
}
