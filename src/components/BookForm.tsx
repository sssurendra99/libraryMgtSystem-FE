import { useForm, UseFormReturn, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { addBook } from "../api/book";
import './styles/book-form.css'

enum BookType {
    Fiction = "Fiction",
	History = "History",
	Child = "Child",
	None = "None",
}

const schema = z.object({
    title: z.string(),
    author: z.string(),
    publicationYear: z.number(),
    bookCategory: z.nativeEnum(BookType),
})

const bookTypeMapper = (type: BookType) => {
    switch(type){
        case "Fiction":
            return 0;
        case "History":
            return 1;
        case "Child":
            return 2;
        case "None":
            return 3;
        default:
            break;
    }
}

type Schema = z.infer<typeof schema>;


interface BookFormProps {
    closeBookModal: () => void;
}

const BookForm = ({closeBookModal}: BookFormProps ) => {

    const { register, handleSubmit, reset } = useForm<Schema>({
        resolver: zodResolver(schema),
    }) as UseFormReturn<Schema>;

    const onSubmit: SubmitHandler<Schema> = async (data) => {
        const bookValue = bookTypeMapper(data.bookCategory);

        const userData = {
            ...data,
            bookCategory: bookValue,
        }

        try {
            const response = await addBook(userData);
            console.log("Book added successfully: ", response);
            reset();
        } catch (error) {
            console.log("Error happened adding: ", error);
        }
    }

    return(
        <div className="container-book-form">
            <button className="close-btn" onClick={closeBookModal}>
                X
            </button>
            <div className="container-form">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="container-form-input">
                        <input type="text" {...register("title", {required: true})} 
                        inputMode="text"
                        placeholder="Naked Ape" />
                    </div>
                    <div className="container-form-input">
                        <input type="text" {...register("author", {required: true})} placeholder="Desmond Morris" />
                    </div>
                    <div className="container-form-input">
                        <input type="date" {...register("author", {required: true})} placeholder="1967" />
                    </div>
                    <div className="container-form-select">
                        <select {...register("bookCategory", {required: true})}>
                            <option value="">Select...</option>
                            <option value={BookType.Child}>Child</option>
                            <option value={BookType.Fiction}>Fiction</option>
                            <option value={BookType.History}>History</option>
                            <option value={BookType.None}>Unknown</option>
                            
                        </select>
                    </div>
                    <div className="container-form-submit">
                        <input type="submit"/>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default BookForm;