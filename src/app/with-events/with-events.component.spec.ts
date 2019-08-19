import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithEventsComponent } from './with-events.component';

describe('WithEventsComponent', () => {
  let component: WithEventsComponent;
  let fixture: ComponentFixture<WithEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
