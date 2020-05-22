package com.courses.exchangeFreelance.controller;

import com.courses.exchangeFreelance.model.UserAndJobOfferView;
import com.courses.exchangeFreelance.repo.UserAndJobOfferViewRepo;
import com.courses.exchangeFreelance.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:4200" })
@RestController
@RequestMapping("/api")
public class UserAndJobOfferViewController {
    private final UserAndJobOfferViewRepo userAndJobOfferViewRepo;
    private final UserRepo userRepo;

    @Autowired
    UserAndJobOfferViewController(UserAndJobOfferViewRepo userAndJobOfferViewRepo, UserRepo userRepo){
        this.userAndJobOfferViewRepo = userAndJobOfferViewRepo;
        this.userRepo = userRepo;
    }

    @GetMapping("/offers/open")
    public List<UserAndJobOfferView> getJobOffersOfOtherEmployers(){
        org.springframework.security.core.Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String currentPrincipalName = authentication.getName();
        return userAndJobOfferViewRepo.findAllOffersOfOtherEmployers(currentPrincipalName);
    }

    @GetMapping("/offers/user")
    public List<UserAndJobOfferView> getJobOffersByUserLogin(){
        org.springframework.security.core.Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String currentPrincipalName = authentication.getName();
        return userAndJobOfferViewRepo.findByLogin(currentPrincipalName);
    }

    @GetMapping("/offers/user/{id}")
    public List<UserAndJobOfferView> getJobOffersByJobOfferId(@PathVariable("id") Long id){
        return userAndJobOfferViewRepo.findByJobOfferId(id);
    }
}
