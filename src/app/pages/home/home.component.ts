import { Component, OnInit } from '@angular/core';
import {Card} from "../../shared/interfaces";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public studentTitle:string="Student List";
  public teacherTitle:string="Teacher List";

  public studentList : Card [] = [];
  public teacherList : Card [] = [];

  constructor() {
    this.studentList =this.getStudentList();
    this.teacherList = this.getTeacherList();
  }

  ngOnInit(): void {
  }

  private getStudentList(): Card[] {

    let cards: Card[] = [];
    cards.push({title: 'Alice', counter: 1, frequency: 'week', text: 'you need to work with this'});
    cards.push({title: 'Bob', counter: 2, frequency: 'week', text: 'you need to work with this'});
    cards.push({title: 'Jack', counter: 3, frequency: 'week', text: 'you need to work with this'});
    return cards;
}

private getTeacherList(): Card[] {

    let cards: Card[] = [];
    cards.push({title: 'Sanowar Hossain', counter: 1, frequency: 'week', text: 'you need to work with this'});
    cards.push({title: 'MR. RAHIM', counter: 2, frequency: 'week', text: 'you need to work with this'});
    cards.push({title: 'Dr. Jahid', counter: 3, frequency: 'week', text: 'you need to work with this'});
    return cards;
}

}
