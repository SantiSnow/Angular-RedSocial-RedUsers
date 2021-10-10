export class User{
    "id": number;
    "name": string;
    "email": string;
    "email_verified_at": string;
    "updated_at": string;
    "created_at": string;
    "deleted_at": string;

    constructor(id: number, name: string, email: string, email_verified_at: string, updated_at: string, created_at: string, deleted_at: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.email_verified_at = email_verified_at;
        this.updated_at = updated_at;
        this.created_at = created_at;
        this.deleted_at = deleted_at;
    }
}