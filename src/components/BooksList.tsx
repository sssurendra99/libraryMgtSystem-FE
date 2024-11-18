import { useEffect, useState } from "react";
import { getAllBooks } from "../api/book";
import Book from "./Book";
import { BookResponse } from "../types/BookResponse";

function BooksList() {

    const [books, setBooks] = useState([])

    useEffect(() => {
        const fetchAllBooks = async () => {
            const books = await getAllBooks();
            setBooks(books);
        }
        console.log(fetchAllBooks());
        fetchAllBooks();
    }, []);

    return(
        <>
            <ul>
                {books.map((book : BookResponse) => <Book key={book.id} book={book}></Book>)}
            </ul>
        </>
    );
}

export default BooksList;