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
  public numberOfDistrict = 0;

  //methods for sorting data
  get sortData() {
    return this.districtList.sort((a, b) => {
      return <any>new Date(b.areaSqKm) - <any>new Date(a.areaSqKm);
    });
  }

  constructor(private  districtService: DistrictService) {
    this.setDistrictList();
  }

  ngOnInit(): void {
  }

  private setDistrictList(): void {
    this.districtService.getDistrictList().then(res => {
      if (res.serviceResult && res.serviceResult.success) {
        this.districtList = this.getRectifiedDistrict(res.data);
        this.numberOfDistrict = this.setNumberOfDistrict(this.districtList);
       // console.log(this.districtList)
      } else {
        return console.log("Error" + res);
      }
    })
  }

  // get rectified districts
  private getRectifiedDistrict(districtList: DistrictInfo[]): DistrictInfo[]{
    for (const dist of districtList){
      dist.density = Math.floor(dist.population / dist.areaSqKm);
    }
    return districtList;
  }

  private setNumberOfDistrict(arr: DistrictInfo[]): number{
   return  this.numberOfDistrict = arr.length;
  }

  public reCount(event: number): void{
    this.numberOfDistrict = this.districtList.length;
  }

}
