import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { InvoiceItemEntity } from '../../../../data/invoice-items.entity';

@Component({
  selector: 'siste-create-invoice-page',
  templateUrl: './create-invoice.page.html',
  styleUrls: ['./create-invoice.page.scss'],
})
export class CreateInvoicePageComponent implements AfterViewInit {
  displayedColumns = ['id','description', 'quantity', 'uniquePrice', 'totalPrice'];
  dataSource: MatTableDataSource<InvoiceItemEntity>;
  selection: SelectionModel<InvoiceItemEntity>;

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  constructor() {
    this.dataSource = new MatTableDataSource<InvoiceItemEntity>([
      {
        id: "000000001",
        description: "Lapicero",
        quantity: 5,
        uniquePrice: 19500,
        totalPrice: 99500,
      },      
      {
        id: "000000002",
        description: "Borrador",
        quantity: 5,
        uniquePrice: 19500,
        totalPrice: 99500,
      },
      {
        id: "000000003",
        description: "Lapiz",
        quantity: 5,
        uniquePrice: 19500,
        totalPrice: 99500,
      }
    ]);
    this.selection = new SelectionModel<InvoiceItemEntity>(true, []);
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