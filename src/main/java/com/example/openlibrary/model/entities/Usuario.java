package com.example.openlibrary.model.entities;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "Usuarios")
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Usu_id")
    private Long usuId;

    @Column(name = "Usu_phone", nullable = false)
    private String usuPhone;

    @Column(name = "Usu_nome", nullable = false)
    private String usuNome;

    @Column(name = "Usu_senha", nullable = false)
    private String usuSenha;

    @Column(name = "Usu_email", nullable = false)
    private String usuEmail;

    @Column(name = "Usu_cpf", nullable = false)
    private String usuCpf;

    @Column(name = "Usu_nascimento", nullable = false)
    private Date usuNascimento;

    @Column(name = "Usu_admin")
    private boolean usuAdmin = false;

    @Column(name = "Usu_conta_ativa")
    private boolean usuContaAtiva = true;

    @ManyToOne
    @JoinColumn(name = "Ende_id", referencedColumnName = "Ende_id")
    private Endereco endereco;

    public Long getUsuId() {
        return usuId;
    }

    public void setUsuId(Long usuId) {
        this.usuId = usuId;
    }

    public String getUsuPhone() {
        return usuPhone;
    }

    public void setUsuPhone(String usuPhone) {
        this.usuPhone = usuPhone;
    }

    public String getUsuNome() {
        return usuNome;
    }

    public void setUsuNome(String usuNome) {
        this.usuNome = usuNome;
    }

    public String getUsuSenha() {
        return usuSenha;
    }

    public void setUsuSenha(String usuSenha) {
        this.usuSenha = usuSenha;
    }

    public String getUsuEmail() {
        return usuEmail;
    }

    public void setUsuEmail(String usuEmail) {
        this.usuEmail = usuEmail;
    }

    public String getUsuCpf() {
        return usuCpf;
    }

    public void setUsuCpf(String usuCpf) {
        this.usuCpf = usuCpf;
    }

    public Date getUsuNascimento() {
        return usuNascimento;
    }

    public void setUsuNascimento(Date usuNascimento) {
        this.usuNascimento = usuNascimento;
    }

    public boolean isUsuAdmin() {
        return usuAdmin;
    }

    public void setUsuAdmin(boolean usuAdmin) {
        this.usuAdmin = usuAdmin;
    }

    public boolean isUsuContaAtiva() {
        return usuContaAtiva;
    }

    public void setUsuContaAtiva(boolean usuContaAtiva) {
        this.usuContaAtiva = usuContaAtiva;
    }

    public Endereco getEndereco() {
        return endereco;
    }

    public void setEndereco(Endereco endereco) {
        this.endereco = endereco;
    }

    
}
