import {Injectable} from "@angular/core";
import {DistrictListResponse} from "../../shared/interfaces";
import {environment} from "../../../environments/environment";
import {HttpService} from "./http.service";

@Injectable()
export class DistrictService {
   constructor(private httpService: HttpService) {
   }

  public getDistrictList(): Promise<DistrictListResponse> {
    const url = environment.url.getDistrictList;
    return this.httpService.get(url);
  }

}
