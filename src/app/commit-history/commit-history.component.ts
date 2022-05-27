import { Component, OnInit } from '@angular/core';
import { ApigithubService } from "../apigithub.service";

// App connnects to API and gets data
// Need to add new repo with fresh commits: brainstrom project/ or use repo of this project
// Push this project to github and maybe use that for project
// Next Step: new repo with fresh commit, add that repo to api in service
// then clean JSON file/reposnse and add code to display on web page/html template.
// then code summary part after cleaning data.

@Component({
  selector: 'app-commit-history',
  templateUrl: './commit-history.component.html',
  styleUrls: ['./commit-history.component.css']
})
export class CommitHistoryComponent implements OnInit {

  constructor(private apigithub: ApigithubService) {  }

  ngOnInit(): void {
  };

  getCommitHistory():any{
  
	  console.log("This is commit history");
	  this.apigithub.getCommit().subscribe(data => console.log(data));
  };

  getSummary():any{
  
  	console.log("This is summary");
  };

}
