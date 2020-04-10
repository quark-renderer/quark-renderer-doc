import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupExampleComponent } from './group-example.component';

describe('GroupExampleComponent', () => {
  let component: GroupExampleComponent;
  let fixture: ComponentFixture<GroupExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
