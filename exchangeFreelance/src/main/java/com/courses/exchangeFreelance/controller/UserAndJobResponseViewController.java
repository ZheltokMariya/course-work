package com.courses.exchangeFreelance.controller;

import com.courses.exchangeFreelance.model.UserAndJobResponseView;
import com.courses.exchangeFreelance.repo.UserAndJobResponseViewRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:4200" })
@RestController
@RequestMapping("/api")
public class UserAndJobResponseViewController {
    private final UserAndJobResponseViewRepo userAndJobResponseViewRepo;

    @Autowired
    UserAndJobResponseViewController(UserAndJobResponseViewRepo userAndJobResponseViewRepo){
        this.userAndJobResponseViewRepo = userAndJobResponseViewRepo;
    }

    @GetMapping("/responses/user")
    public List<UserAndJobResponseView> getJobResponsesByUser(){
        org.springframework.security.core.Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String currentPrincipalName = authentication.getName();
        return userAndJobResponseViewRepo.findByLogin(currentPrincipalName);
    }
}
