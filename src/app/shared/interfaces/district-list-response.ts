import {ServiceResult} from "./service-result";
import {DistrictInfo} from "./district-info";

export interface DistrictListResponse {
  serviceResult: ServiceResult;
  data: DistrictInfo [];
}
