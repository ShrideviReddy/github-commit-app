import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//Update: Token removed. Requesting without authentication. 60/hr request can be performed

@Injectable({
  providedIn: 'root'
})
export class ApigithubService {

  constructor(private http:HttpClient) { }

  getCommit(){
	
	//const headers = new HttpHeaders({Authorization:'access_token'});
  	
	return this.http.get(
          'https://api.github.com/repos/ShrideviReddy/csharp-practice/commits'
	);
  }
}
