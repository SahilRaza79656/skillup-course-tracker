package com.skillup.course_tracker.service;

import com.skillup.course_tracker.dto.UserProgressDTO;
import com.skillup.course_tracker.model.UserProgress;

import java.util.List;

public interface UserProgressService {
    UserProgress create(UserProgressDTO dto);
    List<UserProgress> getAll();
    UserProgress update(Long id, UserProgressDTO dto);
}
