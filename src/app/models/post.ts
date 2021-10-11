export class Post{
    "id": number;
    "title": string;
    "description": string;
    "image": string;
    "likes": number;
    "user_id": number;
    "updated_at": string;
    "created_at": string;
    "deleted_at": string;

    constructor(id: number, title: string, description: string, image: string, likes: number, user_id:number, updated_at: string, created_at: string, deleted_at: string) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.image = image;
        this.likes = likes;
        this.user_id = user_id;
        this.updated_at = updated_at;
        this.created_at = created_at;
        this.deleted_at = deleted_at;
    }
}