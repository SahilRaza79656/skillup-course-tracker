import React, { useState } from "react";
import { addCourse } from '../services/courseService'

function AddCourse({onCourseAdded}) {
    const [formData, setFormData] = useState({
        name:'',
        platform:'',
        url:'',
        description:''
    });

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addCourse(formData);
            alert('Course added successfully!');
            setFormData({name:'', platform:'', url:'', description:''});
            onCourseAdded(); // Refresh course list
        } catch (err) {
            alert('Error adding course');
        }
    };

    return (
        <div>
            <h2>Add New Course</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label>Name</label>
                    <input name="name" value={formData.name} onChange={handleChange} className="form-control" required></input>
                </div>
                <div className="mb-3">
                    <label>Platform</label>
                    <input name="platform" value={formData.platform} onChange={handleChange} className="form-control" required></input>
                </div>
                <div className="mb-3">
                    <label>URL</label>
                    <input name="url" value={formData.url} onChange={handleChange} className="form-control" required></input>
                </div>
                <div className="mb-3">
                    <label>Description</label>
                    <input name="description" value={formData.description} onChange={handleChange} className="form-control" required></input>
                </div>
                <button type="submit" className="btn btn-primary">Add Course</button>
            </form>
        </div>
    )
}

export default AddCourse;