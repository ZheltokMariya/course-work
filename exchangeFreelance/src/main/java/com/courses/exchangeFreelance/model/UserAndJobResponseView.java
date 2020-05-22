package com.courses.exchangeFreelance.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "user_job_response")
public class UserAndJobResponseView {
    @Id
    private UserAndJobResponseKey id;
    private String login;
    private String password;
    private String surname;
    private String name;
    @Column(name = "name_job_offer")
    private String jobOfferName;
    @Column(name = "job_offer_status")
    private Byte jobOfferStatus;
    private Long jobResponseId;
    private Byte status;
    private Byte done;

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
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

    public String getJobOfferName() {
        return jobOfferName;
    }

    public void setJobOfferName(String jobOfferName) {
        this.jobOfferName = jobOfferName;
    }

    public Byte getStatus() {
        return status;
    }

    public void setStatus(Byte status) {
        this.status = status;
    }

    public Byte getDone() {
        return done;
    }

    public void setDone(Byte done) {
        this.done = done;
    }

    public UserAndJobResponseKey getId() {
        return id;
    }

    public void setId(UserAndJobResponseKey id) {
        this.id = id;
    }

    public Byte getJobOfferStatus() {
        return jobOfferStatus;
    }

    public void setJobOfferStatus(Byte jobOfferStatus) {
        this.jobOfferStatus = jobOfferStatus;
    }

    public Long getJobResponseId() {
        return jobResponseId;
    }

    public void setJobResponseId(Long jobResponseId) {
        this.jobResponseId = jobResponseId;
    }
}
