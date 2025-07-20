package com.skillup.course_tracker.service.impl;

import com.skillup.course_tracker.dto.UserProgressDTO;
import com.skillup.course_tracker.model.Course;
import com.skillup.course_tracker.model.User;
import com.skillup.course_tracker.model.UserProgress;
import com.skillup.course_tracker.repository.CourseRepository;
import com.skillup.course_tracker.repository.UserProgressRepository;
import com.skillup.course_tracker.repository.UserRepository;
import com.skillup.course_tracker.service.UserProgressService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserProgressServiceImpl implements UserProgressService {

    private final UserProgressRepository userProgressRepository;
    private final CourseRepository courseRepository;
    private final UserRepository userRepository;

    @Override
    public UserProgress create(UserProgressDTO dto, Authentication authentication) {
        String email = authentication.getName();
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        Course course = courseRepository.findById(dto.getCourseId())
                .orElseThrow(() -> new RuntimeException("Course not found"));

        UserProgress userProgress = UserProgress.builder()
                .course(course)
                .progress(dto.getProgress())
                .notes(dto.getNotes())
                .user(user)
                .build();

        return userProgressRepository.save(userProgress);
    }

    @Override
    public List<UserProgress> getAll() {
        return userProgressRepository.findAll();
    }

    @Override
    public UserProgress update(Long id, UserProgressDTO dto) {
        UserProgress existingUserProgress = userProgressRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Progress not found"));

        Course course = courseRepository.findById(dto.getCourseId())
                .orElseThrow(() -> new RuntimeException("Course not found"));

        existingUserProgress.setCourse(course);
        existingUserProgress.setProgress(dto.getProgress());
        existingUserProgress.setNotes(dto.getNotes());

        return userProgressRepository.save(existingUserProgress);
    }

    @Override
    public List<UserProgress> getProgressForLoggedInUser(Authentication authentication) {
        String email = authentication.getName();
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        return  userProgressRepository.findByUser(user);
    }
}
