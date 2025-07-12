import axios from "axios";

const BASE_URL = 'http://localhost:8090/api/user-progress';

export const getProgress = () => axios.get(BASE_URL);

export const addProgress = (progress) => axios.post(BASE_URL, progress);

export const updateProgress = (id, progress) => axios.put(`${BASE_URL}/${id}`, progress);