package com.courses.exchangeFreelance.repo;

import com.courses.exchangeFreelance.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface UserRepo extends JpaRepository<User, Long> {

    @Query(value = "select u from User u")
    List<User> findAll();

    @Query(value = "select u from User u where u.username = :username")
    User findByUsername(String username);
}
