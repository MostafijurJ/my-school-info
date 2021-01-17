import {ServiceResult} from "./service-result";
import {PeopleInfo} from "./people-info";

export interface StudentListResponse {
  serviceResult: ServiceResult;
  data: PeopleInfo [];
}
