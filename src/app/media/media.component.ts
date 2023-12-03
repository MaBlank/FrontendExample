import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource, MatTableModule} from "@angular/material/table";
import {MatPaginator, MatPaginatorModule} from "@angular/material/paginator";
import {
  MAT_TOOLTIP_DEFAULT_OPTIONS,
  MatTooltipDefaultOptions, MatTooltipModule,
} from '@angular/material/tooltip';
import {MatButtonModule} from "@angular/material/button";
import {MatSnackBar, MatSnackBarModule} from "@angular/material/snack-bar";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatListModule} from "@angular/material/list";
import {MatDividerModule} from "@angular/material/divider";
import {FormsModule} from "@angular/forms";
import {ContactFormModel} from "../addModel/contact-form-model";
import {MatIconModule} from "@angular/material/icon";
import {GetModelsService} from "./get-models.service";

/** Custom options the configure the tooltip's default show/hide delays. */
export const myCustomTooltipDefaults: MatTooltipDefaultOptions = {
  showDelay: 1000,
  hideDelay: 1000,
  touchendHideDelay: 1000,
};
@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss'],
  providers: [{provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: myCustomTooltipDefaults}],
  standalone: true,
  imports: [MatListModule, MatDividerModule, MatTableModule, MatPaginatorModule, MatTooltipModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatSnackBarModule, MatListModule, FormsModule, MatIconModule]
})
export class MediaComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['name', 'description', 'model', 'delete'];
  dataSource = new MatTableDataSource<ContactFormModel>();

  constructor(
    private _snackBar: MatSnackBar,
    private getModelsService: GetModelsService // Fügen Sie Ihren Service hier ein
  ) {}

  ngOnInit(): void {
    this.getModelsService.getModels().subscribe(
      data => {
        this.dataSource.data = data; // Setzen Sie die Daten für Ihre Tabelle
      },
      error => {
        console.error('There was an error retrieving the models', error);
        this.openSnackBar('Fehler beim Laden der Modelle', 'Schließen');
      }
    );
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  deleteModel(modelName: string, index: number) {
    this.getModelsService.deleteModel(modelName).subscribe(
      response => {
        console.log(response);
        // Entfernen Sie das Element aus der Datenquelle und aktualisieren Sie den Paginator
        this.dataSource.data.splice(index, 1);
        this.dataSource.paginator = this.paginator;
      },
      error => {
        console.error('Error deleting model:', error);
        this.openSnackBar('Fehler beim Löschen des Modells', 'Schließen');
      }
    );
  }

}

