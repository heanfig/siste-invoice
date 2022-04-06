export interface SignInData {
    previousLoginAt?: Date;
    deviceToken?: string;
}

export interface SignInEntity {
    status?: string;
    signInData?: SignInData;
}
  