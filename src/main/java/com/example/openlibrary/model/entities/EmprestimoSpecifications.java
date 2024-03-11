package com.example.openlibrary.model.entities;

import jakarta.persistence.criteria.Predicate;
import org.springframework.data.jpa.domain.Specification;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class EmprestimoSpecifications {

    public static Specification<Emprestimo> comFiltros(Date emprestData,
            Usuario usuario, Funcionario funcionario, String emprestimoStatus) {
        return (root, query, criteriaBuilder) -> {
            List<Predicate> predicates = new ArrayList<>();

            if (emprestData != null) {
                predicates.add(criteriaBuilder.equal(root.get("emprestData"), emprestData));
            }

            if (usuario != null) {
                predicates.add(criteriaBuilder.equal(root.get("usuario"), usuario));
            }

            if (funcionario != null) {
                predicates.add(criteriaBuilder.equal(root.get("funcionario"), funcionario));
            }

            if (emprestimoStatus != null && !emprestimoStatus.isEmpty()) {
                predicates.add(criteriaBuilder.equal(root.get("emprestimoStatus"), emprestimoStatus));
            }

            return criteriaBuilder.and(predicates.toArray(new Predicate[0]));
        };
    }
}
