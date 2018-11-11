import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportarCsvComponent } from './exportar-csv.component';

describe('ExportarCsvComponent', () => {
  let component: ExportarCsvComponent;
  let fixture: ComponentFixture<ExportarCsvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExportarCsvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportarCsvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
