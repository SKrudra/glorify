export class Comment {
    id: number;
    description: string;
    commentedBy: number;
    commentedOn: number;
    isPrivate: boolean;
    parentId: number;
    upvotes: number;
    downvotes: number;    
}