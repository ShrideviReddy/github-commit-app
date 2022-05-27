import { Component, OnInit } from '@angular/core';
import { ApigithubService } from "../apigithub.service";



@Component({
  selector: 'app-commit-history',
  templateUrl: './commit-history.component.html',
  styleUrls: ['./commit-history.component.css']
})

export class CommitHistoryComponent implements OnInit {
  public commitData: any;

  public showTable: boolean = false;

  public totalCommit: any;


  constructor(private apigithub: ApigithubService) {  }

  ngOnInit(): void {
  };

  getCommitHistory():any{
  
	  this.showTable = !this.showTable;
	  
	  this.apigithub.getCommit().subscribe(data => {
	          this.commitData = data;
		  this.totalCommit = this.commitData.length;

	  });
	 

  };

}



