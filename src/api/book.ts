import { BookPostRequest } from "../types/Requests";
import { axiosAuthInstance } from "./clients/axiosAuthInstance";

// Get all books
export const getAllBooks = async () => {
    try {
        const response = await axiosAuthInstance.get('/Book/books/all');
        return response.data;
    } catch (errors) {
        console.error("Error happened : ", errors);
    }
};

// Get a specific book by ID
export const getBookById = async (id: string) => {
    try {
        const response = await axiosAuthInstance.get(`/Book/books/${id}`);
        return response.data;
    } catch (errors) {
        console.error("Error happened : ", errors);
    }
};

// Add a new book
export const addBook = async (userData: BookPostRequest) => {
    try {
        const response = await axiosAuthInstance.post('/Book/books', userData);
        return response.data;
    } catch (errors) {
        console.error("Error happened : ", errors);
    }
};

// Update an existing book
export const updateBook = async (updateData: BookPostRequest) => {
    try {
        const response = await axiosAuthInstance.put(`/Book/books`, updateData);
        return response.data;
    } catch (errors) {
        console.error("Error happened : ", errors);
    }
};

// Delete a book by ID
export const deleteBook = async (id: string) => {
    try {
        const response = await axiosAuthInstance.delete(`/Book/books/${id}`);
        return response.data;
    } catch (errors) {
        console.error("Error happened : ", errors);
    }
};

// Get borrowed books
export const getBorrowedBooks = async () => {
    try {
        const response = await axiosAuthInstance.get('/Book/books/borrowed');
        return response.data;
    } catch (errors) {
        console.error("Error happened : ", errors);
    }
};
