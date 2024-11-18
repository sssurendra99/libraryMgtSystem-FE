

export type AuthRequest = {
    username : string,
    password : string,
}

export interface SignUpRequest {
    username : string,
    name : string,
    password : string,
    memberType? : number | undefined
};

export interface SignInRequest {
    username : string,
    password : string,
};

export interface BookPostRequest {
    title: string,
    author: string,
    publicationYear: number,
    bookCategory: number | undefined 
}
