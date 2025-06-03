package com.hotel.feedback.guestservice.repository;

import com.hotel.feedback.guestservice.entity.Feedback;
import org.springframework.data.jpa.repository.JpaRepository;
public interface FeedbackRepository extends JpaRepository<Feedback, Long>{

}
