package com.skillup.course_tracker.controller;

import com.skillup.course_tracker.dto.UserProgressDTO;
import com.skillup.course_tracker.model.UserProgress;
import com.skillup.course_tracker.service.UserProgressService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/user-progress")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class UserProgressController {

    private final UserProgressService service;

    @PostMapping
    public ResponseEntity<UserProgress> create(@RequestBody UserProgressDTO dto, Authentication authentication){
        return ResponseEntity.ok(service.create(dto, authentication));
    }

    @GetMapping
    public ResponseEntity<List<UserProgress>> getAll(){
        return ResponseEntity.ok(service.getAll());
    }

    @PutMapping("/{id}")
    public ResponseEntity<UserProgress> update(@PathVariable Long id, @RequestBody UserProgressDTO dto){
        return ResponseEntity.ok(service.update(id, dto));
    }

    @GetMapping("/by-user")
    public ResponseEntity<List<UserProgress>> getProgressForLoggedInUser(Authentication authentication){
        return ResponseEntity.ok(service.getProgressForLoggedInUser(authentication));
    }
}
