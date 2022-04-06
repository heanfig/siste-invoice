import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { InvoiceEntity } from '../../../../core/entities/invoice.entity';
import { Router } from '@angular/router';
import { InvoiceInteractor } from '../../../../core/invoice.interactor';
import { MatDialog } from '@angular/material/dialog';
import { DialogPersonComponent } from '../../dialog/dialog-person/dialog-person';
import { InvoiceItemEntity, PersonEntity } from '../../../../core';
import { DialogItemsComponent } from '../../dialog/dialog-items/dialog-items';

@Component({
  selector: 'siste-list-invoice-page',
  templateUrl: './list-invoice.page.html',
  styleUrls: ['./list-invoice.page.scss'],
})
export class ListInvoicePageComponent implements AfterViewInit, OnInit {
  displayedColumns = ['id', 'createdDate', 'trasmiterPerson', 'buyerPerson', 'priceIVA', 'IVA', 'items'];
  dataSource: MatTableDataSource<InvoiceEntity>;
  selection: SelectionModel<InvoiceEntity>;

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  constructor(
    protected _router: Router,
    private interactor: InvoiceInteractor,
    public dialog: MatDialog,
  ) {
    this.dataSource = new MatTableDataSource<InvoiceEntity>([]);
    this.selection = new SelectionModel<InvoiceEntity>(true, []);
  }

  async ngOnInit() {
    try {
      const invoices = await this.interactor.getInvoices();
      this.dataSource.data = invoices;
    }
    catch (error) {
      console.warn(error);
    }
  }

  viewBuyerDialogData(person: PersonEntity){
    this.dialog.open(DialogPersonComponent,{
      data: {
        ...person,
      },
    });
  }

  viewInvoiceItems(invoiceNumber: string, invoiceItems: InvoiceItemEntity[]){
    this.dialog.open(DialogItemsComponent,{
      data: {
        invoiceNumber,
        invoiceItems,
      },
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(eventTarget: KeyboardEvent) {
    const filterValue = (eventTarget.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  redirectToNewInvoice(){
    this._router.navigate(['/admin/create']);
  }

}