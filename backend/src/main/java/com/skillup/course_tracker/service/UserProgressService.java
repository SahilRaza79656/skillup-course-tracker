package com.skillup.course_tracker.service;

import com.skillup.course_tracker.dto.UserProgressDTO;
import com.skillup.course_tracker.model.UserProgress;
import org.springframework.security.core.Authentication;

import java.util.List;

public interface UserProgressService {
    UserProgress create(UserProgressDTO dto, Authentication authentication);
    List<UserProgress> getAll();
    UserProgress update(Long id, UserProgressDTO dto);

    List<UserProgress> getProgressForLoggedInUser(Authentication authentication);
}
