import React from 'react';
import Navbar from './components/Navbar';
import CourseList from './pages/CourseList';
import AddCourse from './pages/AddCourse';

function App() {
  return (
    <div className="container">
      <Navbar />
      <AddCourse />
      <hr />
      <CourseList />
    </div>
  );
}

export default App;