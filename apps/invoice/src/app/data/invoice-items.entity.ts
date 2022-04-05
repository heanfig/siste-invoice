export interface InvoiceItemEntity {
    readonly id: string;
    description: string;
    quantity: number;
    uniquePrice: number;
    totalPrice: number;
}
  