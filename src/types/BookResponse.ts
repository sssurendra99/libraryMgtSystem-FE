export interface BookResponse {
    id: string, 
    title: string, 
    author: string,
    isAvailable: boolean, 
    publicationYear: number, 
    bookCategory : number
}

export enum BookCategory {
    Fiction,
    History,
    Child,
    None
}