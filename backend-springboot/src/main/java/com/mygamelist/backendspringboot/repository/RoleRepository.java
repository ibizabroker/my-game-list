package com.mygamelist.backendspringboot.repository;

import com.mygamelist.backendspringboot.model.ERole;
import com.mygamelist.backendspringboot.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(ERole name);
}
