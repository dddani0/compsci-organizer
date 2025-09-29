package com.compsciorganizer;

import java.util.List;
import java.util.stream.Stream;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.compsciorganizer.Model.Note;
import com.compsciorganizer.Model.Subject;
import com.compsciorganizer.Repository.SubjectRepository;

@Component
public class Initializer implements CommandLineRunner {

    private final SubjectRepository subjectRepository;

    public Initializer(SubjectRepository subjectRepository) {
        this.subjectRepository = subjectRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        // Create subjects properly without manually setting ID
        Subject kalkulus1 = new Subject();
        kalkulus1.setName("Kalkulus 1");
        kalkulus1.setDescription("Differential calculus");

        Subject kalkulus2 = new Subject();
        kalkulus2.setName("Kalkulus 2");
        kalkulus2.setDescription("Integral calculus");

        Subject linearAlgebra = new Subject();
        linearAlgebra.setName("Lineáris Algebra");
        linearAlgebra.setDescription("Vector spaces and matrices");

        // Save subjects
        subjectRepository.save(kalkulus1);
        subjectRepository.save(kalkulus2);
        subjectRepository.save(linearAlgebra);

        System.out.println("Initialized subjects:");
        subjectRepository.findAll().forEach(System.out::println);
    }

}
