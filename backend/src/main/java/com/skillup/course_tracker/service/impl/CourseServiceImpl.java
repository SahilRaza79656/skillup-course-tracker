package com.skillup.course_tracker.service.impl;

import com.skillup.course_tracker.dto.CourseDTO;
import com.skillup.course_tracker.model.Course;
import com.skillup.course_tracker.repository.CourseRepository;
import com.skillup.course_tracker.service.CourseService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CourseServiceImpl implements CourseService {

    private final CourseRepository repository;

    @Override
    public Course createCourse(CourseDTO courseDTO) {
        Course course = Course.builder()
                .name(courseDTO.getName())
                .platform(courseDTO.getPlatform())
                .url(courseDTO.getUrl())
                .description(courseDTO.getDescription())
                .build();
        return repository.save(course);
    }

    @Override
    public List<Course> getAllCourses() {
        return repository.findAll();
    }

    @Override
    public Course getCourseById(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Course not found"));
    }
}
