package com.compsciorganizer.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.compsciorganizer.Model.Note;

public interface NoteRepository extends JpaRepository<Note, Long> {
    
}
