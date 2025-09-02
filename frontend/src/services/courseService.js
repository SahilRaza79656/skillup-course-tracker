import axios from 'axios';
import axiosInstance from '../api/axiosInstance';

const BASE_URL = 'http://localhost:8090/api/courses';

export const getCourses = () => axiosInstance.get('/api/courses/by-user');

export const addCourse = (course) => axiosInstance.post('/api/courses', course);