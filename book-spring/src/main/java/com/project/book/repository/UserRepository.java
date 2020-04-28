package com.project.book.repository;

import com.project.book.domain.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends MongoRepository<User, String> {

    Optional<User> findByUserName(String userName);

    User findByEmail(String email);

    User deleteByUserName(String userName);
}