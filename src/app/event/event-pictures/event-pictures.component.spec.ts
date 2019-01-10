import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventPicturesComponent } from './event-pictures.component';

describe('EventPicturesComponent', () => {
  let component: EventPicturesComponent;
  let fixture: ComponentFixture<EventPicturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventPicturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventPicturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
