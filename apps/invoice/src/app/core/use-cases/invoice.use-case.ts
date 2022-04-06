import { InvoiceRepository } from "../repositories/invoice.repository";

export class InvoiceUseCase {
  constructor(protected repository: InvoiceRepository) {}

  public getInvoices() {
    return this.repository.getInvoices();
  }

}
