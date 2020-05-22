package com.courses.exchangeFreelance.model;

import javax.persistence.*;

@Entity
@Table(name = "job_response")
public class JobResponse {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "id_job_offer")
    Long jobOfferId;
    @Column(name = "id_freelancer")
    Long freelancerId;
    private Byte done;
    private Byte status;

    @ManyToOne
    @MapsId("id_job_offer")
    @JoinColumn(name = "id_job_offer")
    private JobOffer jobOffer;

    @ManyToOne
    @MapsId("id_freelancer")
    @JoinColumn(name = "id_freelancer")
    private User freelancer;

    public JobResponse(){

    }

    public JobResponse(Long jobOfferId, Long freelancerId, Byte done, Byte status, JobOffer jobOffer, User freelancer) {
        this.jobOfferId = jobOfferId;
        this.freelancerId = freelancerId;
        this.done = done;
        this.status = status;
        this.jobOffer = jobOffer;
        this.freelancer = freelancer;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getJobOfferId() {
        return jobOfferId;
    }

    public void setJobOfferId(Long jobOfferId) {
        this.jobOfferId = jobOfferId;
    }

    public Long getFreelancerId() {
        return freelancerId;
    }

    public void setFreelancerId(Long freelancerId) {
        this.freelancerId = freelancerId;
    }

    public Byte getDone() {
        return done;
    }

    public void setDone(Byte done) {
        this.done = done;
    }

    public Byte getStatus() {
        return status;
    }

    public void setStatus(Byte status) {
        this.status = status;
    }

    public JobOffer getJobOffer() {
        return jobOffer;
    }

    public void setJobOffer(JobOffer jobOffer) {
        this.jobOffer = jobOffer;
    }

    public User getFreelancer() {
        return freelancer;
    }

    public void setFreelancer(User freelancer) {
        this.freelancer = freelancer;
    }
}
