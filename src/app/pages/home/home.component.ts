import {Component, OnInit} from '@angular/core';
import {Card} from "../../shared/interfaces";
import {StudentService, TeacherService} from "../../common/services";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public studentTitle: string = "Student List";
  public teacherTitle: string = "Teacher List";

  public studentList: Card [] = [];
  public teacherList: Card [] = [];

  constructor(private studentService: StudentService, private teacherService: TeacherService) {
    this.setStudentList();
    this.setTeacherList();
  }

  ngOnInit(): void {
  }

  private setStudentList(): void {
    this.studentService.getStudentList().then(res => {
      if(res.serviceResult && res.serviceResult.success ===true){
        this.studentList = res.data;
      }else {
        return console.log("Error"+res);
      }
    })
  }

  private setTeacherList(): void {
    this.teacherService.getTeacherList().then(res => {
      if(res.serviceResult && res.serviceResult.success === true){
        this.teacherList = res.data;
      }else {
        return console.log("Error"+res);
      }
    })
  }

}
