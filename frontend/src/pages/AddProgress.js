import React, { useState } from "react";
// import { getCourses } from "../services/courseService";
import { addProgress } from "../services/progressService";

function AddProgress({ courses, onProgressAdded }) {
    // const [courses, setCourses] = useState([]);
    const [formData, setFormData] = useState(
        {
            courseId: '',
            progress: '',
            notes: ''
        }
    );

    //  useEffect(() => {
    //     getCourses()
    //         .then(res => setCourses(res.data));
    // }, []);

    const handleChange = (e) => {
        setFormData(prev => (
            {
                ...prev,
                [e.target.name]: e.target.value
            }
        ));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addProgress(formData);
            alert('Progress Added!');
            setFormData({ courseId: '', progress: '', notes: ''});
            onProgressAdded();  // refresh progress list
        } catch (err) {
            alert('Error saving progress.');
        }
    };

    return (
        <div className="mb-5">
            <h2>Add User Progress</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label>Course</label>
                    <select name="courseId" value={formData.courseId} onChange={handleChange} className="form-select" required>
                        <option value="">-- Select Course --</option>
                        {courses.map(course => (
                            <option key={course.id} value={course.id}>{course.name}</option>
                        ))}
                    </select>
                </div>

                <div className="mb-3">
                    <label>Progress (%)</label>
                    <input
                        name="progress"
                        type="number"
                        className="form-control"
                        value={formData.progress}
                        onChange={handleChange}
                        min="0"
                        max="100"
                        required
                    ></input>
                </div>

                <div className="mb-3">
                    <label>Notes</label>
                    <textarea
                        name="notes"
                        className="form-control"
                        value={formData.notes}
                        onChange={handleChange}
                    ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Add Progress</button>
            </form>
        </div>
    );
}

export default AddProgress;