export interface SighUpRequest{
    name: string;
    email: string;
    password: string;
}

export interface SighInRequest{
    email: string;
    password: string;
}