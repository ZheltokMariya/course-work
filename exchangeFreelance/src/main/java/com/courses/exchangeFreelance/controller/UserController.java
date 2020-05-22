package com.courses.exchangeFreelance.controller;

import com.courses.exchangeFreelance.model.Authorities;
import com.courses.exchangeFreelance.model.Role;
import com.courses.exchangeFreelance.model.User;
import com.courses.exchangeFreelance.repo.AuthoritiesRepo;
import com.courses.exchangeFreelance.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:4200" })
@RestController
@RequestMapping("/api")
public class UserController {

    private final UserRepo userRepo;
    private final AuthoritiesRepo authoritiesRepo;

    @Autowired
    UserController(UserRepo userRepo, AuthoritiesRepo authoritiesRepo){
        this.userRepo = userRepo;
        this.authoritiesRepo = authoritiesRepo;
    }

    @GetMapping("/users")
    public List<User> getUsers(){
        return userRepo.findAll();
    }

    @PostMapping("/user/create")
    public User createUser(@RequestBody User user){
        userRepo.save(user);
        Authorities authorities = new Authorities(Role.USER, user);
        authoritiesRepo.save(authorities);
        return user;
    }

    @PutMapping("/user/{id}/update")
    public User updateUser(@PathVariable("id") User user, @RequestBody User newUser){
        user.setSurname(newUser.getSurname());
        user.setName(newUser.getName());
        user.setEmail(newUser.getEmail());
        user.setPhone(newUser.getPhone());
        user.setDateOfBirth(newUser.getDateOfBirth());
        user.setCountry(newUser.getCountry());
        user.setSpeciality(newUser.getSpeciality());
        user.setDescription(newUser.getDescription());
        userRepo.save(user);

        return user;
    }

    @DeleteMapping("/user/{id}/delete")
    public User deleteUser(@PathVariable("id") User user){
        userRepo.delete(user);
        return user;
    }

    @GetMapping("/user/find")
    public User byUsername(@RequestParam("username") String username){
        return userRepo.findByUsername(username);
    }

    @GetMapping("/user/username")
    public User byUsername(){
        org.springframework.security.core.Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String currentPrincipalName = authentication.getName();
        return userRepo.findByUsername(currentPrincipalName);
    }

    @GetMapping("/user/{id}")
    public User byId(@PathVariable("id") User user){
        return user;
    }
}
