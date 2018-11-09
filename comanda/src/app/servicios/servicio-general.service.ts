import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ServicioGeneralService {

  api: string = "http://localhost/backend_tp2_lab4/";
  // api: string = "https://comandasotomayor.000webhostapp.com/apirest_comanda/";
  constructor(public http: Http) { }

  public httpGetO(url: string): Observable<Response> {
    console.log(this.api + url);
    return this.http.get(this.api + url)
      .map((res: Response) => res.json())
      .catch((err: any) => Observable.throw(err || 'Server error'));
  }

  get(url: string)
  {
    return this.http.get(this.api + url)
    .toPromise()
    .then( this.extractData )
    .catch( this.handleError );
  }

  public httpPostO(url: string, objeto): Observable<Response> {
    return this.http.post(this.api + url, objeto)
      .map((res: Response) => res.json())
      .catch((err: any) => Observable.throw(err.json().error || 'Server error'));
  }

  post(url: string, objeto)
  {
    return this.http.post(this.api + url, objeto)
    .toPromise()
    .then( this.extractData )
    .catch( this.handleError );
  }

  public httpDeleteO(url: string, id): Observable<Response> {
    return this.http.delete(this.api + url + id)
      .map((res: Response) => res.json())
      .catch((err: any) => Observable.throw(err.json().error || 'Server error'));
  }


  private extractData(res: Response) {
    let body = res.json();    
    
    return body || { };
  }

  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    console.log("error: " + error);
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
   // console.error( errMsg );
    console.error( 'CATCH'+error );
    //return Observable.throw(errMsg);
  }
}
