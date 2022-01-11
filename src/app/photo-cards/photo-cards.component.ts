import { Component, Input, OnInit } from '@angular/core';
import { Photo } from '../models/photo';

@Component({
  selector: 'app-photo-cards',
  templateUrl: './photo-cards.component.html',
  styleUrls: ['./photo-cards.component.scss']
})
export class PhotoCardsComponent implements OnInit {

  @Input() photos: Photo[] | null;
  @Input() showGrayscale = false;

  constructor() { }

  ngOnInit(): void {
  }

}
