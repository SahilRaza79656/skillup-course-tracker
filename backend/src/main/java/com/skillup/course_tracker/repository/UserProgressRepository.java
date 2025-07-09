package com.skillup.course_tracker.repository;

import com.skillup.course_tracker.model.UserProgress;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserProgressRepository extends JpaRepository<UserProgress, Long> {
}
