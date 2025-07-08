package com.skillup.course_tracker.service;

import com.skillup.course_tracker.dto.CourseDTO;
import com.skillup.course_tracker.model.Course;

import java.util.List;

public interface CourseService {
    Course createCourse(CourseDTO courseDTO);
    List<Course> getAllCourses();
    Course getCourseById(Long id);
}
