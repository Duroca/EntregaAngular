import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MueblesListComponent } from './muebles-list.component';

describe('MueblesListComponent', () => {
  let component: MueblesListComponent;
  let fixture: ComponentFixture<MueblesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MueblesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MueblesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
