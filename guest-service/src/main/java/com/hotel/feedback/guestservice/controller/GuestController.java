package com.hotel.feedback.guestservice.controller;

import com.hotel.feedback.guestservice.entity.Feedback;
import com.hotel.feedback.guestservice.repository.FeedbackRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/guest")
@CrossOrigin(origins = "*") // Allow frontend access

public class GuestController {
    @Autowired
    private FeedbackRepository feedbackRepository;

    @PostMapping("/feedback")
    public ResponseEntity<String> submitFeedback(@RequestBody Feedback feedback) {
        feedbackRepository.save(feedback);
        return ResponseEntity.ok("Feedback submitted successfully.");
    }
}
