package com.example.openlibrary.model.entities;

import java.io.Serializable;

public class ExemplaresEmprestimosId implements Serializable {

    private Long emprestimo_id;

    private Long exemplar_id;

    public Long getEmprestimo_id() {
        return emprestimo_id;
    }

    public void setEmprestimo_id(Long emprestimo) {
        this.emprestimo_id = emprestimo;
    }

    public Long getExemplar_id() {
        return exemplar_id;
    }

    public void setExemplar_id(Long exemplar) {
        this.exemplar_id = exemplar;
    }

}
