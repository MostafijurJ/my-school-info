import { Component, OnInit } from '@angular/core';
import { Card } from '../../interfaces';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public data:Card;
  constructor() { }

  ngOnInit(): void {
  }

}
