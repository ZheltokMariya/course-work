package com.courses.exchangeFreelance.repo;

import com.courses.exchangeFreelance.model.JobOffer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface JobOfferRepo extends JpaRepository<JobOffer, Long> {
    @Query(value = "select o from JobOffer o where o.status = 1")
    List<JobOffer> findAll();

    @Query(value = "select o from JobOffer  o where o.name = :name")
    List<JobOffer> findByName(String name);
}
