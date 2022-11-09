import axios from "axios";

export const BASE_URL = "http://localhost:3000"


export const getBooks = async (data) => {
        const response = await axios.get(BASE_URL + '/admin');
        return response.data;
}

export const getBookbyId = async (data) => {
        const response = await axios.get(BASE_URL + '/admin/' + data);
        return response.data;
}

export const updateBookbyId = async (data,id) => {
        const response = await axios.put(BASE_URL + '/admin/edit/' + id,data);
        return response.data;
}

export const deleteBookbyId = async (id) => {
        const response = await axios.delete(BASE_URL + '/admin/' + id);
        return response.data;
}

export const addBook = async (data) => {
        const response = await axios.post(BASE_URL + '/admin/addbooking',data);
        return response.data;
}