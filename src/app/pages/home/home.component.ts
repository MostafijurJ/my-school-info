import { Component, OnInit } from '@angular/core';
import {Card} from "../../shared/interfaces";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public cardList : Card [] =[]

  constructor() {
    this.cardList =this.getCardList();
  }

  ngOnInit(): void {
  }

  private getCardList(): Card[] {

    let cards: Card[] = [];
    cards.push({title: 'HTML', counter: 1, frequency: 'week', text: 'you need to work with this'});
    cards.push({title: 'JS', counter: 2, frequency: 'week', text: 'you need to work with this'});
    cards.push({title: 'Angular', counter: 3, frequency: 'week', text: 'you need to work with this'});
    return cards;
}

}
