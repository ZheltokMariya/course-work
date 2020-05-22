package com.courses.exchangeFreelance.controller;

import com.courses.exchangeFreelance.model.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins={ "http://localhost:3000", "http://localhost:4200" })
@RestController
public class AuthenticationController {
    @GetMapping(path = "/basicauth")
    public Authentication authentication() {
        org.springframework.security.core.Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String currentPrincipalName = authentication.getName();
        return new Authentication(currentPrincipalName);
    }
}
