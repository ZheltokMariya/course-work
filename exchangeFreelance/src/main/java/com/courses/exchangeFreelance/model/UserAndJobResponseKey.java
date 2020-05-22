package com.courses.exchangeFreelance.model;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;
import java.util.Objects;

@Embeddable
public class UserAndJobResponseKey implements Serializable {
    @Column(name = "id_job_offer")
    private Long jobOfferId;

    @Column(name = "id_user")
    private Long userId;

    public UserAndJobResponseKey(){

    }

    public UserAndJobResponseKey(Long jobOfferId, Long userId) {
        this.jobOfferId = jobOfferId;
        this.userId = userId;
    }

    public Long getJobOfferId() {
        return jobOfferId;
    }

    public void setJobOfferId(Long jobOfferId) {
        this.jobOfferId = jobOfferId;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    @Override
    public boolean equals(Object object) {
        if (this == object) return true;
        if (!(object instanceof UserAndJobResponseKey)) return false;
        UserAndJobResponseKey that = (UserAndJobResponseKey) object;
        return Objects.equals(jobOfferId, that.jobOfferId) &&
                Objects.equals(userId, that.userId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(jobOfferId, userId);
    }
}
