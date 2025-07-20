package com.skillup.course_tracker.controller;

import com.skillup.course_tracker.dto.CourseDTO;
import com.skillup.course_tracker.model.Course;
import com.skillup.course_tracker.service.CourseService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/courses")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class CourseController {

    private final CourseService service;

    @PostMapping
    public ResponseEntity<Course> createCourse(@RequestBody CourseDTO dto, Authentication authentication){
        return ResponseEntity.ok(service.createCourse(dto, authentication));
    }

    @GetMapping
    public ResponseEntity<List<Course>> getAllCourses(){
        return ResponseEntity.ok(service.getAllCourses());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Course> getCourseById(@PathVariable Long id){
        return ResponseEntity.ok(service.getCourseById(id));
    }

    @GetMapping("/by-user")
    public ResponseEntity<List<Course>> getCoursesByUser(Authentication authentication){
        return ResponseEntity.ok(service.getCoursesByUser(authentication));
    }
}
