import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableVictoryComponent } from './table-victory.component';

describe('TableVictoryComponent', () => {
  let component: TableVictoryComponent;
  let fixture: ComponentFixture<TableVictoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableVictoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableVictoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
