package com.courses.exchangeFreelance.repo;

import com.courses.exchangeFreelance.model.UserAndJobOfferView;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface UserAndJobOfferViewRepo extends JpaRepository<UserAndJobOfferView, Long> {
    @Query(value = "select u from UserAndJobOfferView u where u.login = :login")
    List<UserAndJobOfferView> findByLogin(String login);

    @Query(value = "select u from UserAndJobOfferView u where u.userId = :id")
    List<UserAndJobOfferView> findByUserId(Long id);

    @Query(value = "select u from UserAndJobOfferView u where u.idJobOffer = :id")
    List<UserAndJobOfferView> findByJobOfferId(Long id);

    @Query(value = "select u from UserAndJobOfferView  u where  u.login <> :login and u.status = 1")
    List<UserAndJobOfferView> findAllOffersOfOtherEmployers(String login);
}
