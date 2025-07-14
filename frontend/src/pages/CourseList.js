import React, {useEffect, useState} from 'react';
import { getCourses } from '../services/courseService';

function CourseList ({ courses, loading }){
    // const [courses, setCourses] = useState([]);
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     getCourses()
    //     .then(response => setCourses(response.data))
    //     .catch(error => console.error('Error fetching courses', error))
    //     .finally(() => setLoading(false));
    // }, []);

    if(loading) return <div className='text-center'>Loading...</div>

    return (
        <div>
            <h2>All Courses</h2>
            {
                courses.length === 0 ? (
                    <p>No Courses available.</p>
                ) : (
                    <table className='table table-striped'>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Platform</th>
                                <th>URL</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                courses.map(course => (
                                    <tr key={course.id}>
                                        <td>{course.name}</td>
                                        <td>{course.platform}</td>
                                        <td><a href={course.url} target="_blank" rel='noreferrer'>Link</a></td>
                                        <td>{course.description}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                )
            }
        </div>
    );
}

export default CourseList;