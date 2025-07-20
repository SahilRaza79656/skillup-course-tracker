package com.skillup.course_tracker.service;

import com.skillup.course_tracker.dto.CourseDTO;
import com.skillup.course_tracker.model.Course;
import org.springframework.security.core.Authentication;

import java.util.List;

public interface CourseService {
    Course createCourse(CourseDTO courseDTO, Authentication authentication);
    List<Course> getAllCourses();
    Course getCourseById(Long id);

    List<Course> getCoursesByUser(Authentication authentication);
}
