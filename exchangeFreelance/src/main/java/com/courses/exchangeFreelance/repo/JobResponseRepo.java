package com.courses.exchangeFreelance.repo;

import com.courses.exchangeFreelance.model.JobResponse;
import com.courses.exchangeFreelance.model.JobResponseKey;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface JobResponseRepo  extends JpaRepository<JobResponse, JobResponseKey> {
    @Query(value = "select r from JobResponse r")
    List<JobResponse> findAll();

    @Query(value = "select r from JobResponse r where r.jobOfferId = :id")
    List<JobResponse> findByJobResponseOfferId(Long id);

    @Query(value = "select r from JobResponse r where r.id = :id")
    JobResponse findByJobResponseId(Long id);
}
