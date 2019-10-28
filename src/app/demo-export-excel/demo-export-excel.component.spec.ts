import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoExportExcelComponent } from './demo-export-excel.component';

describe('DemoExportExcelComponent', () => {
  let component: DemoExportExcelComponent;
  let fixture: ComponentFixture<DemoExportExcelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoExportExcelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoExportExcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
