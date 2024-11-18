import { SignUpRequest, SignInRequest } from "../types/Requests";
import { axiosInstance } from "./clients/axiosInstance";

export const registerUser = async (userData : SignUpRequest) => {
    try {
        const response = await axiosInstance.post('/User/usr/signup', userData);
        console.log('User registered successfully:', response.data);
    } catch (errors) {
        console.error('Error registering user:', errors);
    }
}

export const signinUser = async (loginData : SignInRequest) => {
    try {
        const response = await axiosInstance.post('/User/usr/signin', loginData);
        if(response.status === 200){
            console.log("User logged in successfully:", response.data);
            localStorage.setItem('token', response.data.value.token);
            console.log('The token is : ', response.data.value.token);
        }
        
    } catch (errors) {
        console.error('Error log in : ', errors);
        localStorage.removeItem('token');
    }
}