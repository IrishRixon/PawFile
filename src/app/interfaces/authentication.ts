export interface Res {
    message?: string;
    isSuccess?: boolean; 
}

export interface User {
    email: string;
    password: string;
    res?: Res;
}

export interface Code {
    code: string;
    isMatch?: boolean;
    codeExpired?: boolean;
}

export interface UserEmail {
    email: string;
    res?: Res;
}

export interface NewPass {
    email: string,
    oldPass: string,
    newPass: string,
    res?: Res
}