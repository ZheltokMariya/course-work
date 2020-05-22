package com.courses.exchangeFreelance.model;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;
import java.util.Objects;

@Embeddable
public class JobResponseKey implements Serializable {
    @Column(name = "id_job_offer")
    Long jobOfferId;

    @Column(name = "id_freelancer")
    Long freelancerId;

    public JobResponseKey(){

    }

    public JobResponseKey(Long jobOfferId, Long freelancerId) {
        this.jobOfferId = jobOfferId;
        this.freelancerId = freelancerId;
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

    @Override
    public boolean equals(Object object) {
        if (this == object) return true;
        if (!(object instanceof JobResponseKey)) return false;
        JobResponseKey that = (JobResponseKey) object;
        return Objects.equals(jobOfferId, that.jobOfferId) &&
                Objects.equals(freelancerId, that.freelancerId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(jobOfferId, freelancerId);
    }
}
