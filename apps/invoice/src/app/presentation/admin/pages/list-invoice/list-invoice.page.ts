import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { InvoiceEntity } from '@siste/core';

@Component({
  selector: 'siste-list-invoice-page',
  templateUrl: './list-invoice.page.html',
  styleUrls: ['./list-invoice.page.scss'],
})
export class ListInvoicePageComponent implements AfterViewInit {
  displayedColumns = ['id', 'createdDate', 'trasmiterPerson', 'buyerPerson', 'priceIVA', 'IVA', 'items'];
  dataSource: MatTableDataSource<InvoiceEntity>;
  selection: SelectionModel<InvoiceEntity>;

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  constructor() {
    this.dataSource = new MatTableDataSource<InvoiceEntity>([
      {
        id: "1",
        createdDate: "2020-01-01",
        trasmiterPerson: {
          name: "Herman",
          nit: "123456789-0"
        },
        buyerPerson: {
          name: "Manuela",
          nit: "987654321-0"
        },
        priceIVA: 0,
        IVA: 0,
        items: [
          {
            id: "1",
            name: "Nombre del producto",
          }
        ]
      },
    ]);
    this.selection = new SelectionModel<InvoiceEntity>(true, []);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach(row => this.selection.select(row));
  }
}