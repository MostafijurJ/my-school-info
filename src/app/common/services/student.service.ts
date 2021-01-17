import {Injectable} from "@angular/core";
import {HttpService} from "./http.service";
import {environment} from "../../../environments/environment";
import {StudentListResponse} from "../../shared/interfaces";

@Injectable()
export class StudentService {

  constructor(private httpService: HttpService) {
  }

  public getStudentList(): Promise<StudentListResponse> {
    const url = environment.url.getStudentList;
    return this.httpService.get(url);
  }
}
