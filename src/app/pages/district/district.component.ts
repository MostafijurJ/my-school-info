import {Component, OnInit} from '@angular/core';
import {DistrictInfo} from "../../shared/interfaces";
import {DistrictService} from "../../common/services";

@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.css']
})
export class DistrictComponent implements OnInit {

  public counter = 1;
  public districtList: DistrictInfo [] = [];

  constructor(private  districtService: DistrictService) {
    this.setDistrictList();
  }

  ngOnInit(): void {
  }

  private setDistrictList(): void {
    this.districtService.getDistrictList().then(res => {
      if (res.serviceResult && res.serviceResult.success === true) {
        this.districtList = res.data;
        console.log(res)
      } else {
        return console.log("Error" + res);
      }
    })
  }

}
