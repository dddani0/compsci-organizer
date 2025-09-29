package com.compsciorganizer.Model;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
public class Note {
    @Id
    @GeneratedValue
    private Long id;
    private String title;
    private Date date;
    private String content;// temporary

    @ManyToOne
    @JoinColumn(name = "subject_id")
    private Subject subject;
}
