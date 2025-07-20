package com.skillup.course_tracker.repository;

import com.skillup.course_tracker.model.User;
import com.skillup.course_tracker.model.UserProgress;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserProgressRepository extends JpaRepository<UserProgress, Long> {
    List<UserProgress> findByUser(User user);
}
