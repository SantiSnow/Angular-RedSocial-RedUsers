export class LoginResponse{
    "Status": string;
    "Token": string;

    constructor(status: string, token: string){
        this.Status = status;
        this.Token = token;
    }
}