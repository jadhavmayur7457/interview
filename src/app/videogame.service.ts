import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideogameService {

 

  private Baseurl='https://spa.api.logicloop.io/api/games';

  constructor(private http: HttpClient) { }

  getVideoGames(): Observable<any> {
    return this.http.get<any>(this.Baseurl);
  
  }
  datafrom():Observable<any>{
    return this.http.get<any>(this.Baseurl)
  }
}
