import { InvoiceEntity } from "../entities/invoice.entity";

export abstract class InvoiceRepository {

  abstract getInvoices(): Promise<InvoiceEntity[]>;
}
