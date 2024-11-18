import { axiosAuthInstance } from "./clients/axiosAuthInstance";

export const getAllMembers = async () => {
    try{
        const response = await axiosAuthInstance('/Member/members/all')
        return response.data;
    } catch(errors) {
        console.error("Error happened : ", errors);
    }
}