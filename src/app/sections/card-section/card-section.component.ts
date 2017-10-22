import { Component, OnInit } from '@angular/core';
import { CardContent } from './card.model';

@Component({
  selector: 'app-card-section',
  templateUrl: './card-section.component.html',
  styleUrls: ['./card-section.component.scss']
})
export class CardSectionComponent implements OnInit {
  cardContents: CardContent[] = [
    new CardContent('Angular 4', 'Using Latest Version of Angular and Typescript', 'Learn'),
    new CardContent('Material 2', 'Material Design components for Angular', 'Learn'),
    new CardContent('Firebase', 'Real time Storage and authentication', 'Learn')
  ];
  constructor() { }

  ngOnInit() {
  }

}
