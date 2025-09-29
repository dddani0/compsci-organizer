package com.compsciorganizer.Model;

import java.util.List;

import io.micrometer.common.lang.Nullable;
import jakarta.annotation.Generated;
import jakarta.annotation.Nonnull;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import lombok.ToString;

@Data
@NoArgsConstructor
@ToString(exclude = "notes")
@RequiredArgsConstructor
@Entity
@Table(name = "subjects")
public class Subject {
    @Id
    @GeneratedValue
    @Nonnull
    private Long id;
    @Nonnull
    private String name;
    private String description;
    @Nullable
    @OneToMany(mappedBy = "subject")
    private List<Note> notes;
}
