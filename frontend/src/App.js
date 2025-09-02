import React, { useContext, useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import CourseList from './pages/CourseList';
import AddCourse from './pages/AddCourse';
import ProgressList from './pages/ProgressList';
import Footer from './components/Footer';
import AddProgress from './pages/AddProgress';
import { getCourses } from './services/courseService';
import { getProgress } from './services/progressService';
import LoginPage from './pages/LoginPage';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { isAuthenticated } from './utils/auth';
import { UserContext } from './context/UserContext';
// import { useNavigate } from 'react-router-dom';

function App() {
  const [courses, setCourses] = useState([]);
  const [progressData, setProgressData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(true);

  const { user } = useContext(UserContext);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Redirect to login if not authenticated and not already on the Login page
    if(!isAuthenticated() && location.pathname !== '/login') {
      navigate('/login');
    }
  }, [location]);

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

  // Run fetches when the user Logs in (or on refresh when token exists)
  useEffect(() => {
    if(user){
      loadCourses();
      loadProgress();
    }
  }, [user]); //  runs when 'user' changes

  return (
    // <Router>
      <div className="container-fluid px-4">
        <Navbar />
        <Routes>
          {/* Login Route */}
          <Route path="/login" element={<div className='section'><LoginPage /></div>} />

          {/* Home Route (shows all main content) */}
          <Route path="/" element={
            <>
              <div className='section'>
                <AddCourse onCourseAdded={loadCourses} />
              </div>
              <hr />
              <div className='section'>
                <CourseList courses={courses} loading={loading} />
              </div>
              <hr />
              <div className='section'>
                <AddProgress courses={courses} onProgressAdded={loadProgress} />
              </div>
              <hr />
              <div className='section'>
                <ProgressList progressData={progressData} onProgressAdded={loadProgress} loadingProgress={loadingProgress} />
              </div>
            </>
          } />
        </Routes>
        <Footer />
      </div >
    // </Router>
  );
}

export default App;