package com.compsciorganizer.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.compsciorganizer.Model.Subject;


public interface SubjectRepository extends JpaRepository<Subject, Long> {
    Subject findByName(String name);
    Optional<Subject> findById(Long id);
}