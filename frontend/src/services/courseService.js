import axios from 'axios';

const BASE_URL = 'https://skillup-api.onrender.com/api/courses';

export const getCourses = () => axios.get(BASE_URL);

export const addCourse = (course) => axios.post(BASE_URL, course);