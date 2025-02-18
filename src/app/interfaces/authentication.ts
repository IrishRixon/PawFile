export interface User {
    email: string;
    password: string;
}

export interface Code {
    code: string;
    isMatch?: boolean;
    codeExpired?: boolean;
}