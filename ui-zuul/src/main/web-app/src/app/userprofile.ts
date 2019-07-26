export class UserProfile{
    id: string;
    fname: string;
    lname: string;
    username: string;
    email: string;
    password: string;
    age: number;
    gender: String;
    follower:String;
    following:UserProfile[];
}
