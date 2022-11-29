import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NagelmueblesAboutComponent } from './nagelmuebles-about.component';

describe('NagelmueblesAboutComponent', () => {
  let component: NagelmueblesAboutComponent;
  let fixture: ComponentFixture<NagelmueblesAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NagelmueblesAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NagelmueblesAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
