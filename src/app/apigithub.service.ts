import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { HttpHeaders } from '@angular/http';

// Enter info in link like owner, repo name and access token
// Create access toekn on github and repo
// Create header as argument to link and add that in headeir

@Injectable({
  providedIn: 'root'
})
export class ApigithubService {

  constructor(private http:HttpClient) { }

  getCommit(){
	
	const headers = new HttpHeaders({Authorization:'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'});
  	
	return this.http.get(
          'https://api.github.com/repos/ShrideviReddy/Text-Sentiment-Dashboard-Deployment/commits',
	  { headers }
	);
  }
}
