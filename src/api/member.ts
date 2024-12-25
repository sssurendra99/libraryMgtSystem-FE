import { axiosAuthInstance } from "./clients/axiosAuthInstance";

// Get all members
export const getAllMembers = async () => {
    try {
        const response = await axiosAuthInstance.get('/Member/members/all');
        return response.data;
    } catch (errors) {
        console.error("Error happened : ", errors);
    }
};

// Get member by ID
export const getMemberById = async (id: string) => {
    try {
        const response = await axiosAuthInstance.get(`/Member/members/${id}`);
        return response.data;
    } catch (errors) {
        console.error("Error happened : ", errors);
    }
};

// Create a new member
export const addMember = async (memberData: any) => {
    try {
        const response = await axiosAuthInstance.post('/Member/members', memberData);
        return response.data;
    } catch (errors) {
        console.error("Error happened : ", errors);
    }
};

// Update member details
export const updateMember = async (id: string, updateData: any) => {
    try {
        const response = await axiosAuthInstance.put(`/Member/members/${id}`, updateData);
        return response.data;
    } catch (errors) {
        console.error("Error happened : ", errors);
    }
};

// Delete a member
export const deleteMember = async (id: string) => {
    try {
        const response = await axiosAuthInstance.delete(`/Member/members/${id}`);
        return response.data;
    } catch (errors) {
        console.error("Error happened : ", errors);
    }
};

// Borrow a book for a member
export const borrowBookForMember = async (bookId: string, memberId: string) => {
    try {
        const response = await axiosAuthInstance.put(`/LibraryMember/LibraryMember/borrow/${bookId}/${memberId}`);
        return response.data;
    } catch (errors) {
        console.error("Error happened : ", errors);
    }
};

// Return a book from a member
export const returnBookFromMember = async (bookId: string, memberId: string) => {
    try {
        const response = await axiosAuthInstance.put(`/LibraryMember/LibraryMember/return/${bookId}/${memberId}`);
        return response.data;
    } catch (errors) {
        console.error("Error happened : ", errors);
    }
};

// Get all library members
export const getAllLibraryMembers = async () => {
    try {
        const response = await axiosAuthInstance.get('/LibraryMember/LibraryMember/all');
        return response.data;
    } catch (errors) {
        console.error("Error happened : ", errors);
    }
};

// Get library member by ID
export const getLibraryMemberById = async (id: string) => {
    try {
        const response = await axiosAuthInstance.get(`/LibraryMember/LibraryMember/${id}`);
        return response.data;
    } catch (errors) {
        console.error("Error happened : ", errors);
    }
};

// Get all staff members (management)
export const getAllStaffMembersMgt = async () => {
    try {
        const response = await axiosAuthInstance.get('/StaffMember/StaffMember-mgt/all');
        return response.data;
    } catch (errors) {
        console.error("Error happened : ", errors);
    }
};

// Get all staff members (minor)
export const getAllStaffMembersMinor = async () => {
    try {
        const response = await axiosAuthInstance.get('/StaffMember/StaffMember-minor/all');
        return response.data;
    } catch (errors) {
        console.error("Error happened : ", errors);
    }
};
