import { BookPostRequest } from "../types/Requests";
import { axiosAuthInstance } from "./clients/axiosAuthInstance";

export const getAllBooks = async () => {
    try{
        const response = await axiosAuthInstance.get('/Book/books/all')
        return response.data;
    } catch(errors) {
        console.error("Error happened : ", errors);
    }
};

export const addBook = async (userData : BookPostRequest) => {
    try {
        const response = await axiosAuthInstance.post('/Book/books', userData);
        return response.data;
    }catch (errors) {
        console.error("Error happened : ", errors);
    }
};