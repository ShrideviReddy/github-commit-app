import { Component, OnInit } from '@angular/core';
import { ApigithubService } from "../apigithub.service";


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
