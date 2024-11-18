import { BookResponse } from "../types/BookResponse";
import "./styles/book.css"

interface BookProps {
    book : BookResponse,
}

enum BookCategory {
    "Fiction" = 0,
    "History" = 1,
    "Child" = 2,
    "None" = 3,
}

const BookCategoryMapper = (type : BookCategory) => {
    switch (type) {
        case BookCategory.Fiction:
            return "Fiction";
        case 1:
            return BookCategory.History;
        case 2:
            return BookCategory.Child;
        case 3:
            return BookCategory.None;
        default:
            break;
    }
}


function Book({ book } : BookProps) { // Destructure the 'book' prop
    return (
        <div className="container-book">
            <p>{book.title}</p>
            <p>{book.author}</p>
            <p>{book.publicationYear}</p>
            <p>{BookCategoryMapper(book.bookCategory)}</p>
        </div>
    );
}

export default Book;