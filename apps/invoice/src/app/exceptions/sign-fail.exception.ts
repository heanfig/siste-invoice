import { SignInEntity } from "../core/entities/auth/sign-in.entity";

export class SignFailException {
   constructor(public readonly errorData: SignInEntity, 
    public readonly errorMessage: string){ }
}