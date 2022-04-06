import { Provider } from '@angular/core';
import { AuthRepository } from '../core/repositories/auth.repository';
import { FakeAuthRepository } from '../data/repositories/fake.auth.repository';

export const SERVICE_PROVIDERS: Array<Provider> = [
  {
    provide: AuthRepository,
    useClass: FakeAuthRepository,
  },
];