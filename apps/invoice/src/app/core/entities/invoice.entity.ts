import { InvoiceItemEntity } from "./invoice-items.entity";
import { PersonEntity } from "./person.entity";

export interface InvoiceEntity {
    readonly id: string;
    createdDate: string;
    trasmiterPerson: PersonEntity;
    buyerPerson: PersonEntity;
    priceIVA: number;
    IVA: number;
    items: InvoiceItemEntity[];
}
  