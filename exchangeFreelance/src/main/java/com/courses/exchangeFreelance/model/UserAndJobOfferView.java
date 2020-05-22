package com.courses.exchangeFreelance.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "user_job_offer")
public class UserAndJobOfferView {
    @Column(name = "id_user")
    private Long userId;
    private String login;
    private String password;
    private String surname;
    private String name;
    @Id
    @Column(name = "id_job_offer")
    private Long idJobOffer;
    @Column(name = "name_job_offer")
    private String nameJobOffer;
    private String category;
    private String description;
    private String summary;
    private Double price;
    private Byte status;

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

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

    public Long getIdJobOffer() {
        return idJobOffer;
    }

    public void setIdJobOffer(Long idJobOffer) {
        this.idJobOffer = idJobOffer;
    }

    public String getNameJobOffer() {
        return nameJobOffer;
    }

    public void setNameJobOffer(String nameJobOffer) {
        this.nameJobOffer = nameJobOffer;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getSummary() {
        return summary;
    }

    public void setSummary(String summary) {
        this.summary = summary;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Byte getStatus() {
        return status;
    }

    public void setStatus(Byte status) {
        this.status = status;
    }
}
