import {Injectable} from "@angular/core";
import {Obj} from "../../shared/interfaces";

@Injectable()
export class UrlService {
  constructor() {
  }

  // return url param from objects
  public paramsToUrl(params: Obj): string {

    if (Object.keys(params).length !== 0) {
      let urlString = "";
      for (const index in params) {
        if (params[index] !== undefined && params[index] !== null) {
          if (urlString !== '') {
            urlString += '&';
          }
          urlString += index + '=' + encodeURIComponent(params[index])
        }
      }
      return urlString;
    } else {
      return "";
    }
  }
}
