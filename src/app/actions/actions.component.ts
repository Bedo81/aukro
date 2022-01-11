import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent implements OnInit {

  @Input() showGrayscale = false;
  @Output() showGrayscaleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output() fetchNewPhotos = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onShowGrayscaleChange() {
    this.showGrayscaleChange.emit(this.showGrayscale);
  }
}
