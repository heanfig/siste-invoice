import { Injectable } from "@angular/core";
import { SignInEntity } from "../../core/entities/auth/sign-in.entity";
import { SignOutEntity } from "../../core/entities/auth/sign-out.entity";
import { AuthCode } from "../../core/enums/auth.enum";
import { AuthRepository } from "../../core/repositories/auth.repository";
import { SignFailException } from "../../exceptions/sign-fail.exception";

@Injectable()
export class FakeAuthRepository implements AuthRepository {

  public signIn(username: string, password: string): Promise<SignInEntity> {
    const USERDATA = [
        {
            username: "admin",
            password: "admin",
            token: "d0992fe9-ce69-4f5a-b5c3-9b04b3f27155"
        },
        {
            username: "herman",
            password: "123",
            token: "195a1bc1-4500-49ad-830e-2f8f017dc9f6"
        }
    ];
    const user = USERDATA.find(u => u.username === username && u.password === password);

    if(!user){
        throw new SignFailException({
                status: AuthCode.INCORRECT_USER,
                signInData: {
                    previousLoginAt: new Date,
                    deviceToken: ""
                }
            }, 
            "Usuario o contraseña Invalidos"
        );
    }

    const userData: SignInEntity  = {
        status: "02",
        signInData: {
            previousLoginAt: new Date,
            deviceToken: user.token
        }
    };

    return Promise.resolve(userData);
  }

  public signOut(): Promise<SignOutEntity> {
    return Promise.resolve({
       status: "00", 
    });
  }

  public validateToken(): Promise<boolean> {
    return Promise.resolve(true);
  }

}