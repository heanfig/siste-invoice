import { AuthRepository } from "../repositories/auth.repository";

export class AuthUseCase {
  constructor(protected repository: AuthRepository) {}

  public signIn(username: string, password: string) {
    return this.repository.signIn(username, password);
  }

  public validateToken(token: string) {
    return this.repository.validateToken(token);
  }

  public signOut() {
    return this.repository.signOut();
  }
}
