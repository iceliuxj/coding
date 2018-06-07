import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubNinjaComponent } from './sub-ninja.component';

describe('SubNinjaComponent', () => {
  let component: SubNinjaComponent;
  let fixture: ComponentFixture<SubNinjaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubNinjaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubNinjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
