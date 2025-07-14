import React from 'react';
import Navbar from './components/Navbar';
import CourseList from './pages/CourseList';
import AddCourse from './pages/AddCourse';
import ProgressList from './pages/ProgressList';

function App() {
  return (
    <div className="container">
      <Navbar />
      <AddCourse />
      <hr />
      <CourseList />
      <hr />
      <ProgressList />
    </div>
  );
}

export default App;