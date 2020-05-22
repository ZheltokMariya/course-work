package com.courses.exchangeFreelance.repo;

import com.courses.exchangeFreelance.model.UserAndJobResponseView;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface UserAndJobResponseViewRepo extends JpaRepository<UserAndJobResponseView, Long> {
    @Query(value = "select u from UserAndJobResponseView u where u.login = :login")
    List<UserAndJobResponseView> findByLogin(String login);
}
