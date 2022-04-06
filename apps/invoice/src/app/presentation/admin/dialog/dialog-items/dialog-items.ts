import { SelectionModel } from "@angular/cdk/collections";
import { Component, Inject, ViewChild } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { InvoiceItemEntity } from "apps/invoice/src/app/core";

@Component({
    selector: 'siste-dialog-items',
    templateUrl: 'dialog-items.html',
    styleUrls: ['dialog-items.scss'],
})
export class DialogItemsComponent {
    displayedColumns = ['id','description', 'quantity', 'uniquePrice', 'totalPrice'];
    dataSource: MatTableDataSource<InvoiceItemEntity>;
    selection: SelectionModel<InvoiceItemEntity>;
    invoiceNumber: string;
  
    @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
    @ViewChild(MatSort, { static: true }) sort!: MatSort;

    constructor(@Inject(MAT_DIALOG_DATA) public items: { invoiceNumber: string, invoiceItems: InvoiceItemEntity[]} ) {
        this.dataSource = new MatTableDataSource<InvoiceItemEntity>([ ...items.invoiceItems ]);
        this.selection = new SelectionModel<InvoiceItemEntity>(true, []);
        this.invoiceNumber = items.invoiceNumber;
    }
}