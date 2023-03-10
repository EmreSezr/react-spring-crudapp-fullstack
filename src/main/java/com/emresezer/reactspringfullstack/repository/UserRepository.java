package com.emresezer.reactspringfullstack.repository;

import com.emresezer.reactspringfullstack.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

}
