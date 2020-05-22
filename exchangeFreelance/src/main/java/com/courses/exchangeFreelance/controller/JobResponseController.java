package com.courses.exchangeFreelance.controller;

import com.courses.exchangeFreelance.model.JobOffer;
import com.courses.exchangeFreelance.model.JobResponse;
import com.courses.exchangeFreelance.model.User;
import com.courses.exchangeFreelance.repo.JobResponseRepo;
import com.courses.exchangeFreelance.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:4200" })
@RestController
@RequestMapping("/api")
public class JobResponseController {
    private final JobResponseRepo jobResponseRepo;
    private final UserRepo userRepo;

    @Autowired
    JobResponseController(JobResponseRepo jobResponseRepo, UserRepo userRepo){
        this.jobResponseRepo = jobResponseRepo;
        this.userRepo = userRepo;
    }

    @GetMapping("/responses")
    public List<JobResponse> getAllJobResponses(){
        return jobResponseRepo.findAll();
    }

    @PostMapping("/response/offer/{offerId}/user/{userId}")
    public JobResponse createResponse(@PathVariable("offerId") JobOffer offer,
                                              @PathVariable("userId") User user) {
        JobResponse response = new JobResponse(offer.getId(), user.getId(), (byte)0, (byte)0, offer, user);
        jobResponseRepo.save(response);
        return response;
    }

    @PostMapping("/response/offer/create/{offerId}")
    public JobResponse createResponseOfCurrentUser(@PathVariable("offerId") JobOffer offer) {
        org.springframework.security.core.Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String currentPrincipalName = authentication.getName();
        User user = userRepo.findByUsername(currentPrincipalName);
        JobResponse response = new JobResponse(offer.getId(), user.getId(), (byte)0, (byte)0, offer, user);
        jobResponseRepo.save(response);
        return response;
    }

    @PutMapping("/response/{id}/employ")
    public JobResponse employJobResponse(@PathVariable("id") Long jobResponseId){
        JobResponse jobResponse = jobResponseRepo.findByJobResponseId(jobResponseId);
        jobResponse.setStatus((byte)1);
        jobResponseRepo.save(jobResponse);
        return jobResponse;
    }

    @PutMapping("/response/{id}/refuse")
    public JobResponse refuseJobResponse(@PathVariable("id") Long jobResponseId){
        JobResponse jobResponse = jobResponseRepo.findByJobResponseId(jobResponseId);
        jobResponse.setStatus((byte)0);
        jobResponseRepo.save(jobResponse);
        return jobResponse;
    }

    @PutMapping("/response/{id}/done")
    public JobResponse doneJobResponse(@PathVariable("id") Long jobResponseId){
        JobResponse jobResponse = jobResponseRepo.findByJobResponseId(jobResponseId);
        jobResponse.setDone((byte)1);
        jobResponseRepo.save(jobResponse);
        return jobResponse;
    }

    @DeleteMapping("/response/{id}/delete")
    public JobResponse deleteResponse(@PathVariable("id") Long jobResponseId){
        JobResponse jobResponse = jobResponseRepo.findByJobResponseId(jobResponseId);
        jobResponseRepo.delete(jobResponse);
        return jobResponse;
    }

    @GetMapping("/response/offer/{offerId}")
    public List<JobResponse> getJobResponseByJobOfferId(@PathVariable("offerId") JobOffer offer){
        return jobResponseRepo.findByJobResponseOfferId(offer.getId());
    }
}
