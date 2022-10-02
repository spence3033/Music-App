import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {

  serverClicked:boolean = false;

  assignment:string = "";
  assignmentId:number = 0;
  assignmentVideo:string = "";

  savedObj:any = {
    id: 0,
    assignment: "",
    url: ""
  };

  constructor(private service: AppServiceService) { }

  ngOnInit(): void {
  }

  onClick() {
    this.service.getData()
    .subscribe((res) => {
      console.log('Response from API is ', res);

      this.savedObj = res;

      this.assignmentId = this.savedObj.id;
      this.assignment = this.savedObj.assignment;
      this.assignmentVideo = this.savedObj.url;
    }, (error) => {
      console.log('Error from API is ', error);
    })

    this.serverClicked = true;
  }
}
