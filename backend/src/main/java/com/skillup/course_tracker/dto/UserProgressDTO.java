package com.skillup.course_tracker.dto;

import lombok.Data;

@Data
public class UserProgressDTO {
    private Long courseId;
    private int progress;
    private String notes;
}
