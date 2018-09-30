import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MySnakesComponent } from './my-snakes.component';

describe('MySnakesComponent', () => {
  let component: MySnakesComponent;
  let fixture: ComponentFixture<MySnakesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MySnakesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySnakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
