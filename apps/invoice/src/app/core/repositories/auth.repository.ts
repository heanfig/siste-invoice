import { SignInEntity } from "../entities/auth/sign-in.entity";
import { SignOutEntity } from "../entities/auth/sign-out.entity";

export abstract class AuthRepository {

  abstract signIn(username: string, password: string): Promise<SignInEntity>;

  abstract signOut(): Promise<SignOutEntity>;
}
