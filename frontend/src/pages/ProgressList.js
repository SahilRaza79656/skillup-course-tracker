import React, {useEffect, useState} from "react";
import { getProgress, updateProgress } from "../services/progressService";

function ProgressList ({ progressData, onProgressAdded, loadingProgress }){
    // const [progressData, setProgressData] = useState([]);
    const [filter, setFilter] = useState('all');
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     loadProgress();
    // }, []);

    // const loadProgress = () => {
    //     getProgress()
    //     .then(response => setProgressData(response.data))
    //     .catch(error => console.error('Error loading progress'))
    //     .finally(() => setLoading(false));
    // }

    if(loadingProgress) return <div className="text-center">Loading...</div>

    const handleUpdate = (id, updatedValue) => {
        updateProgress(id, updatedValue)
        .then(() => {
            alert("Progress updated");
            onProgressAdded();
        })
        .catch(() => alert("Error updating progress"))
    }

    const filteredProgress = progressData.filter(item => {
        if(filter === 'completed') return item.progress === 100;
        if(filter === 'in-progress') return item.progress < 100;
        return true;
    })

    return (
        <div>
            <h2>Your Course Progress</h2>
            <div className="mb-3">
                <label className="form-label">Filter: </label>
                <select className="form-select" onChange={(e) => setFilter(e.target.value)}>
                    <option value="all">All</option>
                    <option value="in-progress">In Progress</option>
                    <option value="completed">Completed</option>
                </select>
            </div>

            {filteredProgress.length === 0 ? (
                <p>No progress data found.</p>
            ) : (
                <div className="list-group">
                    {filteredProgress.map(progress => (
                        <div key={progress.id} className="list-group-item">
                            <h5>{progress.course?.name}</h5>
                            <p>{progress.notes}</p>
                            <div className="progress mb-2">
                                <div 
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{width: `${progress.progress}%`}}
                                    aria-valuenow={progress.progress}
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                >
                                    {progress.progress}%
                                </div>
                            </div>

                            <button
                                className="btn btn-sm btn-warning"
                                onClick={() => 
                                    handleUpdate(progress.id, {
                                        courseId: progress.course.id,
                                        progress: Math.min(100, progress.progress+10),
                                        notes: progress.notes
                                    })
                                }
                            >
                                +10%
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default ProgressList;