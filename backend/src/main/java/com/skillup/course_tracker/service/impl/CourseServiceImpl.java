package com.skillup.course_tracker.service.impl;

import com.skillup.course_tracker.dto.CourseDTO;
import com.skillup.course_tracker.model.Course;
import com.skillup.course_tracker.model.User;
import com.skillup.course_tracker.repository.CourseRepository;
import com.skillup.course_tracker.repository.UserRepository;
import com.skillup.course_tracker.service.CourseService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CourseServiceImpl implements CourseService {

    private final CourseRepository repository;
    private final UserRepository userRepository;

    @Override
    public Course createCourse(CourseDTO courseDTO, Authentication authentication) {
        String email = authentication.getName();
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        Course course = Course.builder()
                .name(courseDTO.getName())
                .platform(courseDTO.getPlatform())
                .url(courseDTO.getUrl())
                .description(courseDTO.getDescription())
                .user(user)
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

    @Override
    public List<Course> getCoursesByUser(Authentication authentication) {
        String email = authentication.getName();
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        return repository.findByUser(user);
    }
}
