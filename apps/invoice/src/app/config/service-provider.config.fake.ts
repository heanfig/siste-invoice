import { Provider } from '@angular/core';
import { AuthRepository } from '../core/repositories/auth.repository';
import { InvoiceRepository } from '../core/repositories/invoice.repository';
import { FakeAuthRepository } from '../data/repositories/fake.auth.repository';
import { FakeInvoiceRepository } from '../data/repositories/fake.invoice.repository';

export const SERVICE_PROVIDERS: Array<Provider> = [
  {
    provide: AuthRepository,
    useClass: FakeAuthRepository,
  },
  {
    provide: InvoiceRepository,
    useClass: FakeInvoiceRepository,
  },
];
