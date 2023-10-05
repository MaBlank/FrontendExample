import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTableModule } from '@angular/material/table';
import { CoupensComponent } from './coupens.component';
import {SidenavComponent} from "../sidenav/sidenav.component";
import {AppComponent} from "../app.component";

describe('CoupensComponent', () => {
  let component: CoupensComponent;
  let fixture: ComponentFixture<CoupensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoupensComponent],
      imports: [MatTableModule, SidenavComponent, AppComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoupensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display correct column headers', () => {
    const headerRow = fixture.nativeElement.querySelector('mat-header-row');
    // @ts-ignore
    const headers = Array.from(headerRow.querySelectorAll('mat-header-cell')).map(cell => cell.textContent.trim());

    expect(headers).toEqual(['position', 'name', 'weight', 'symbol']);
  });

  it('should render table with correct data', () => {
    const tableRows = fixture.nativeElement.querySelectorAll('mat-row');
    expect(tableRows.length).toBe(10); // since there are 10 elements in the ELEMENT_DATA

    const firstRowData = tableRows[0].querySelectorAll('mat-cell');
    expect(firstRowData[0].textContent).toContain('1');
    expect(firstRowData[1].textContent).toContain('Hydrogen');
    expect(firstRowData[2].textContent).toContain('1.0079');
    expect(firstRowData[3].textContent).toContain('H');
  });
});
