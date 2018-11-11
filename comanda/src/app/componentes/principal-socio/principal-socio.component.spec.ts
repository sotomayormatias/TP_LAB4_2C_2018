import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalSocioComponent } from './principal-socio.component';

describe('PrincipalSocioComponent', () => {
  let component: PrincipalSocioComponent;
  let fixture: ComponentFixture<PrincipalSocioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrincipalSocioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalSocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
