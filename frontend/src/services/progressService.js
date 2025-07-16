import axios from "axios";

const BASE_URL = 'https://skillup-api.onrender.com/api/user-progress';

export const getProgress = () => axios.get(BASE_URL);

export const addProgress = (progress) => axios.post(BASE_URL, progress);

export const updateProgress = (id, progress) => axios.put(`${BASE_URL}/${id}`, progress);