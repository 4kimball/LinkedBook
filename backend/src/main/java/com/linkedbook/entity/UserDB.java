package com.linkedbook.entity;

import com.linkedbook.dto.user.signin.SocialLoginType;
import lombok.*;
import org.hibernate.annotations.*;

import javax.persistence.*;
import javax.persistence.Entity;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import java.util.Date;
import java.util.List;

import static javax.persistence.GenerationType.*;

@DynamicInsert
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter @Setter
@Entity
@Table(name = "user")
public class UserDB {
    @Id
    @Column(name = "id", nullable = false, updatable = false)
    @GeneratedValue(strategy = IDENTITY)
    private int id;

    @OneToMany(mappedBy = "user") // 양방향 매핑
    @JsonManagedReference
    private List<UserAreaDB> userAreaDBs;

    @Column(name = "email", nullable = false, length = 45)
    private String email;

    @Column(name = "password", nullable = false, length = 45)
    private String password;

    @Column(name = "nickname", nullable = false, length = 45)
    private String nickname;

    @Column(name = "info", nullable = false, length = 45)
    private String info;

    @Column(name = "image", nullable = false, length = 45)
    private String image;

    @Enumerated(EnumType.STRING)
    @Column(name = "oauth", length = 45)
    private SocialLoginType oauth;

    @Column(name = "oauth_id", length = 255)
    private String oauthId;

    @Column(name = "status", nullable = false, length = 45)
    private String status;

    @CreationTimestamp
    @Column(name = "created_at", nullable = false, updatable = false)
    private Date created_at;

    @UpdateTimestamp
    @Column(name = "updated_at")
    private Date updated_at;
}
