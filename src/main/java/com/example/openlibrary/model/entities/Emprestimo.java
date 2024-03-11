package com.example.openlibrary.model.entities;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "Emprestimos")
public class Emprestimo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Emprest_id")
    private Long emprestId;

    @Column(name = "Emprest_data")
    private Date emprestData;

    @Column(name = "Emprest_dataprevista")
    private Date emprestDataPrevista;

    @ManyToOne
    @JoinColumn(name = "Usu_id", referencedColumnName = "Usu_id")
    private Usuario usuario;

    @ManyToOne
    @JoinColumn(name = "Funci_id", referencedColumnName = "Funci_id")
    private Funcionario funcionario;

    @Column(name = "Emprest_status")
    private String emprestimoStatus;

    public Long getEmprestId() {
        return emprestId;
    }

    public void setEmprestId(Long emprestId) {
        this.emprestId = emprestId;
    }

    public Date getEmprestData() {
        return emprestData;
    }

    public void setEmprestData(Date emprestData) {
        this.emprestData = emprestData;
    }

    public Date getEmprestDataPrevista() {
        return emprestDataPrevista;
    }

    public void setEmprestDataPrevista(Date emprestDataPrevista) {
        this.emprestDataPrevista = emprestDataPrevista;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

    public Funcionario getFuncionario() {
        return funcionario;
    }

    public void setFuncionario(Funcionario funcionario) {
        this.funcionario = funcionario;
    }

    public String getEmprestimoStatus() {
        return emprestimoStatus;
    }

    public void setEmprestimoStatus(String emprestimoStatus) {
        this.emprestimoStatus = emprestimoStatus;
    }

  
}
