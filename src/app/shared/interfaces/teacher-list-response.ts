import {ServiceResult} from "./service-result";
import {PeopleInfo} from "./people-info";

export interface TeacherListResponse {
  serviceResult: ServiceResult;
  data: PeopleInfo[];
}
