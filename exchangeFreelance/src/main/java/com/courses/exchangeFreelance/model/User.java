package com.courses.exchangeFreelance.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.sql.Date;
import java.util.Set;

@Entity
@Table(name = "user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username;
    private String password;
    private boolean active;
    private String surname;
    private String name;
    private String email;
    private String phone;

    @Column(name = "date_of_birth")
    private Date dateOfBirth;

    private String country;
    private String speciality;
    private String description;

    @JsonIgnore
    @OneToMany(mappedBy = "user")
    private Set<Authorities> role;

    @JsonIgnore
    @OneToMany(fetch = FetchType.EAGER, mappedBy = "employer")
    private Set<JobOffer> jobOffers;

    @JsonIgnore
    @OneToMany(mappedBy = "freelancer")
    private Set<JobResponse> jobResponses;

    public User() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public Date getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(Date dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getSpeciality() {
        return speciality;
    }

    public void setSpeciality(String speciality) {
        this.speciality = speciality;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Set<JobOffer> getJobOffers() {
        return jobOffers;
    }

    public void setJobOffers(Set<JobOffer> jobOffers) {
        this.jobOffers = jobOffers;
    }

    public Set<JobResponse> getJobResponses() {
        return jobResponses;
    }

    public void setJobResponses(Set<JobResponse> jobResponses) {
        this.jobResponses = jobResponses;
    }

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }

    public Set<Authorities> getRole() {
        return role;
    }

    public void setRole(Set<Authorities> role) {
        this.role = role;
    }
}
