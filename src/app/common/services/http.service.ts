import { Injectable } from '@angular/core';
import {UrlService} from "./urlService";
import {HttpClient} from "@angular/common/http";
import {Obj} from "../../shared/interfaces";

@Injectable()
export class HttpService {

  constructor(private urlService: UrlService, private http: HttpClient) { }

  //http get methods
  public get(url: string, params?: Obj): Promise<any>{

    const buildUrl = (params !== undefined) ? url + '?' + this.urlService.paramsToUrl(params) : url ;

    const promise = new Promise( (resolve, reject) => {
      const req = this.http.get(buildUrl);

      req.subscribe(
        data => {
          resolve(data);
        },
        error => {
          reject(error);
        },
        () => {

        }
      );
    });

    return promise;

  }

}
