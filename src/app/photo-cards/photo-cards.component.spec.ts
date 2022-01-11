import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoCardsComponent } from './photo-cards.component';

describe('PhotoCardsComponent', () => {
  let component: PhotoCardsComponent;
  let fixture: ComponentFixture<PhotoCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
