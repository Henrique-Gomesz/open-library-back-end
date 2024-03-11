package com.example.openlibrary.model.entities;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "exemplares_emprestimos")
@IdClass(ExemplaresEmprestimosId.class)
public class ExemplaresEmprestimos {

    @Id
    @JoinColumn(name = "emprest_id")
    private Long emprestimo_id;

    @Id
    @JoinColumn(name = "exemp_id")
    private Long exemplar_id;

    @Column(name = "Devolucao_data")
    private Date dataDevolucao;

    public Date getDataDevolucao() {
        return dataDevolucao;
    }

    public void setDataDevolucao(Date dataDevolucao) {
        this.dataDevolucao = dataDevolucao;
    }

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
