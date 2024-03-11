package com.example.openlibrary.model.entities;

import jakarta.persistence.criteria.Predicate;
import org.springframework.data.jpa.domain.Specification;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class LivroSpecifications {

    public static Specification<Livro> comFiltros(String livroNome, Date lancaAno, Categoria generoId,
            Editora editora) {
        return (root, query, criteriaBuilder) -> {
            List<jakarta.persistence.criteria.Predicate> predicates = new ArrayList<>();

            if (livroNome != null && !livroNome.isEmpty()) {
                predicates.add(criteriaBuilder.equal(root.get("livroNome"), livroNome));
            }

            if (lancaAno != null) {
                predicates.add(criteriaBuilder.equal(root.get("lancaAno"), lancaAno));
            }

            if (generoId != null) {
                predicates.add(criteriaBuilder.equal(root.get("generoId"), generoId));
            }

            if (editora != null) {
                predicates.add(criteriaBuilder.equal(root.get("editora"), editora));
            }

            return criteriaBuilder.and(predicates.toArray(new Predicate[0]));
        };
    }
}
