package com.courses.exchangeFreelance.model;

import javax.persistence.*;

@Entity
@Table(name = "authorities")
public class Authorities {
    @Id
    @Column(name ="id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    Role authority;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    public Authorities() {
        this.authority = Role.USER;
    }

    public Authorities(Role authority, User user) {
        this.authority = authority;
        this.user = user;
    }

    public Role getAuthority() {
        return authority;
    }

    public void setAuthority(Role authority) {
        this.authority = authority;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
