import { InvoiceRepository } from "./repositories/invoice.repository";
import { InvoiceUseCase } from "./use-cases/invoice.use-case";

export class InvoiceInteractor {
  private invoiceUseCase: InvoiceUseCase;

  constructor(repository: InvoiceRepository) {
    this.invoiceUseCase = new InvoiceUseCase(repository);
  }

  public getInvoices() {
    return this.invoiceUseCase.getInvoices();
  }
  
}
