import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import CourseList from './pages/CourseList';
import AddCourse from './pages/AddCourse';
import ProgressList from './pages/ProgressList';
import Footer from './components/Footer';
import AddProgress from './pages/AddProgress';
import { getCourses } from './services/courseService';
import { getProgress } from './services/progressService';

function App() {
  const [courses, setCourses] = useState([]);
  const [progressData, setProgressData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(true);

  const loadCourses = () => {
    setLoading(true); // Start spinner
    getCourses()
      .then(response => setCourses(response.data))
      .catch(error => console.error('Error fetching courses', error))
      .finally(() => setLoading(false)); // Stop spinner
  }

  const loadProgress = () => {
    setLoadingProgress(true);
    getProgress()
      .then(response => setProgressData(response.data))
      .catch(error => console.error('Error loading progress'))
      .finally(() => setLoadingProgress(false));
  };

  useEffect(() => {
    loadCourses();
    loadProgress();
  }, []);

  return (
    <div className="container-fluid px-4">
      <Navbar />
      <AddCourse onCourseAdded={loadCourses} />
      <hr />
      <CourseList courses={courses} loading={loading}/>
      <hr />
      <AddProgress courses={courses} onProgressAdded={loadProgress} />
      <hr />
      <ProgressList progressData={progressData} onProgressAdded={loadProgress} loadingProgress={loadingProgress}/>
      <Footer />
    </div>
  );
}

export default App;