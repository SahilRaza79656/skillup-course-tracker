package com.skillup.course_tracker.repository;

import com.skillup.course_tracker.model.Course;
import com.skillup.course_tracker.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CourseRepository extends JpaRepository<Course, Long> {
    List<Course> findByUser(User user);
}
