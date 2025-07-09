package com.skillup.course_tracker.service.impl;

import com.skillup.course_tracker.dto.UserProgressDTO;
import com.skillup.course_tracker.model.Course;
import com.skillup.course_tracker.model.UserProgress;
import com.skillup.course_tracker.repository.CourseRepository;
import com.skillup.course_tracker.repository.UserProgressRepository;
import com.skillup.course_tracker.service.UserProgressService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserProgressServiceImpl implements UserProgressService {

    private final UserProgressRepository userProgressRepository;
    private final CourseRepository courseRepository;

    @Override
    public UserProgress create(UserProgressDTO dto) {
        Course course = courseRepository.findById(dto.getCourseId())
                .orElseThrow(() -> new RuntimeException("Course not found"));

        UserProgress userProgress = UserProgress.builder()
                .course(course)
                .progress(dto.getProgress())
                .notes(dto.getNotes())
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
}
