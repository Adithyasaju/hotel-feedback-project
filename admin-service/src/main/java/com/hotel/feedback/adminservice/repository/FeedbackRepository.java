package com.hotel.feedback.adminservice.repository;

import com.hotel.feedback.adminservice.entity.Feedback;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FeedbackRepository extends JpaRepository<Feedback, Long> {
}
