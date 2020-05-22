package com.courses.exchangeFreelance.controller;

import com.courses.exchangeFreelance.model.JobOffer;
import com.courses.exchangeFreelance.model.User;
import com.courses.exchangeFreelance.repo.JobOfferRepo;
import com.courses.exchangeFreelance.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:4200" })
@RestController
@RequestMapping("/api")
public class JobOfferController {
    private final JobOfferRepo jobOfferRepo;
    private final UserRepo userRepo;

    @Autowired
    JobOfferController(JobOfferRepo jobOfferRepo, UserRepo userRepo){
        this.jobOfferRepo = jobOfferRepo;
        this.userRepo = userRepo;
    }

    @GetMapping("/offers")
    public List<JobOffer> getJobOffers(){
        return jobOfferRepo.findAll();
    }

    @GetMapping("/offer/{id}")
    public JobOffer getJobOfferById(@PathVariable("id") JobOffer offer){
        return offer;
    }

    @GetMapping("/offers/name")
    public List<JobOffer> getJobOfferByName(@RequestParam String name){
        return jobOfferRepo.findByName(name);
    }

    @PostMapping("/offer/create")
    public JobOffer createJobOffer(@RequestBody JobOffer jobOffer){
        org.springframework.security.core.Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String currentPrincipalName = authentication.getName();
        User user = userRepo.findByUsername(currentPrincipalName);
        jobOffer.setEmployer(user);
        jobOfferRepo.save(jobOffer);
        return jobOffer;
    }

    @PutMapping("/offer/{id}/close")
    public JobOffer makeJobOfferIsClose(@PathVariable("id") JobOffer jobOffer){
        jobOffer.setStatus((byte)0);
        jobOfferRepo.save(jobOffer);
        return jobOffer;
    }

    @DeleteMapping("/offer/{id}/delete")
    public JobOffer deleteJobOffer(@PathVariable("id") JobOffer jobOffer){
        jobOfferRepo.delete(jobOffer);
        return jobOffer;
    }
}
