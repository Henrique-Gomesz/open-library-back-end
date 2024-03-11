package com.example.openlibrary.model.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "editoras")
public class Editora {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Editora_id")
    private Long id;

    @Column(name = "Editora_nome", nullable = false)
    private String nome;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

}
