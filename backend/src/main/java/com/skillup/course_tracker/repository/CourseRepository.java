package com.skillup.course_tracker.repository;

import com.skillup.course_tracker.model.Course;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseRepository extends JpaRepository<Course, Long> {
}
