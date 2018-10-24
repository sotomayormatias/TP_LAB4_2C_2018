import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ServicioGeneralService {

  api: string = "http://localhost/backend_tp2_lab4/";
  constructor(public http: Http) { }

  public httpGetO(url: string): Observable<Response> {
    console.log(this.api + url);
    return this.http.get(this.api + url)
      .map((res: Response) => res.json())
      .catch((err: any) => Observable.throw(err || 'Server error'));
  }

  public httpPostO(url: string, objeto): Observable<Response> {
    return this.http.post(this.api + url, objeto)
      .map((res: Response) => res.json())
      .catch((err: any) => Observable.throw(err.json().error || 'Server error'));
  }

  public httpDeleteO(url: string, id): Observable<Response> {
    return this.http.delete(this.api + url + id)
      .map((res: Response) => res.json())
      .catch((err: any) => Observable.throw(err.json().error || 'Server error'));
  }

}
