import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleMainComponent } from './example-main.component';

describe('ExampleMainComponent', () => {
  let component: ExampleMainComponent;
  let fixture: ComponentFixture<ExampleMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
