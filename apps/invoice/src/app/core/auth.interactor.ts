import { AuthRepository } from "./repositories/auth.repository";
import { AuthUseCase } from "./use-cases/auth.use-case";

export class AuthInteractor {
  private authUseCase: AuthUseCase;

  constructor(repository: AuthRepository) {
    this.authUseCase = new AuthUseCase(repository);
  }

  public signIn(username: string, password: string) {
    return this.authUseCase.signIn(username, password);
  }

  public validateToken(token: string) {
    return this.authUseCase.validateToken(token);
  }

  public signOut() {
    return this.authUseCase.signOut();
  }
}
