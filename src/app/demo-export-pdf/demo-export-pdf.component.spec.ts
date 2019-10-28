import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoExportPdfComponent } from './demo-export-pdf.component';

describe('DemoExportPdfComponent', () => {
  let component: DemoExportPdfComponent;
  let fixture: ComponentFixture<DemoExportPdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoExportPdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoExportPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
