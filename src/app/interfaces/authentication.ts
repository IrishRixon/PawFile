export interface User {
    email: string;
    password: string;
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

export interface Res {
    message?: string;
    isSuccess?: boolean; 
}