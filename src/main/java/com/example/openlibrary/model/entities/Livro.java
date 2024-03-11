package com.example.openlibrary.model.entities;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "Livros")
public class Livro {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Livro_id")
    private Long livroId;

    @Column(name = "Livro_nome")
    private String livroNome;

    @Column(name = "Lanca_ano")
    private Date lancaAno;

    @ManyToOne
    @JoinColumn(name = "genero_id", referencedColumnName = "categ_id")
    private Categoria generoId;

    @ManyToOne
    @JoinColumn(name = "Editora_id", referencedColumnName = "Editora_id")
    private Editora editora;

    public Long getLivroId() {
        return livroId;
    }

    public void setLivroId(Long livroId) {
        this.livroId = livroId;
    }

    public String getLivroNome() {
        return livroNome;
    }

    public void setLivroNome(String livroNome) {
        this.livroNome = livroNome;
    }

    public Editora getEditora() {
        return editora;
    }

    public void setEditora(Editora editora) {
        this.editora = editora;
    }

    public Categoria getGeneroId() {
        return generoId;
    }

    public void setGeneroId(Categoria generoId) {
        this.generoId = generoId;
    }

    public Date getLancaAno() {
        return lancaAno;
    }

    public void setLancaAno(Date lancaAno) {
        this.lancaAno = lancaAno;
    }

}
