import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TBindingComponent } from './t-binding.component';

describe('TBindingComponent', () => {
  let component: TBindingComponent;
  let fixture: ComponentFixture<TBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
