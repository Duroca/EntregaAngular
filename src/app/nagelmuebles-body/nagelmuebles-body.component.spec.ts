import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NagelmueblesBodyComponent } from './nagelmuebles-body.component';

describe('NagelmueblesBodyComponent', () => {
  let component: NagelmueblesBodyComponent;
  let fixture: ComponentFixture<NagelmueblesBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NagelmueblesBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NagelmueblesBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
