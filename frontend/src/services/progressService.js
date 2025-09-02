import axios from "axios";
import axiosInstance from "../api/axiosInstance";

const BASE_URL = 'http://localhost:8090/api/user-progress';

const API_END_POINT = '/api/user-progress';

export const getProgress = () => axiosInstance.get(`${API_END_POINT}/by-user`);

export const addProgress = (progress) => axiosInstance.post(API_END_POINT, progress);

export const updateProgress = (id, progress) => axiosInstance.put(`${API_END_POINT}/${id}`, progress);