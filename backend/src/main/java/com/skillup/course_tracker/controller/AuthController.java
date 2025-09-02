package com.skillup.course_tracker.controller;

import com.skillup.course_tracker.dto.AuthRequest;
import com.skillup.course_tracker.dto.AuthResponse;
import com.skillup.course_tracker.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class AuthController {

    private final AuthService authService;

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody AuthRequest request){
        authService.register(request);
        return ResponseEntity.ok("User registered successfully");
    }

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@RequestBody AuthRequest request){
        AuthResponse authResponse = authService.login(request);
        return ResponseEntity.ok(authResponse);
    }
}
