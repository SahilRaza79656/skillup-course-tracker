package com.skillup.course_tracker.controller;

import com.skillup.course_tracker.dto.CourseDTO;
import com.skillup.course_tracker.model.Course;
import com.skillup.course_tracker.service.CourseService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/courses")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class CourseController {

    private final CourseService service;

    @PostMapping
    public ResponseEntity<Course> createCourse(@RequestBody CourseDTO dto){
        return ResponseEntity.ok(service.createCourse(dto));
    }

    @GetMapping
    public ResponseEntity<List<Course>> getAllCourses(){
        return ResponseEntity.ok(service.getAllCourses());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Course> getCourseById(@PathVariable Long id){
        return ResponseEntity.ok(service.getCourseById(id));
    }
}
