import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessengerAppComponent } from './messenger-app.component';

describe('MessengerAppComponent', () => {
  let component: MessengerAppComponent;
  let fixture: ComponentFixture<MessengerAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessengerAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessengerAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
