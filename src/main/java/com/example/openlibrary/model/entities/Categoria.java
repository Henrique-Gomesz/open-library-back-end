    package com.example.openlibrary.model.entities;

    import jakarta.persistence.*;

    import java.io.Serializable;

    @Entity
    @Table(name = "categoria")
    public class Categoria implements Serializable {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(name = "categ_id")
        private Long id;

        @Enumerated(EnumType.STRING)
        @Column(name = "categ_nome", nullable = false)
        private EnumCategorias nome;

        public Long getId() {
            return id;
        }

        public void setId(Long id) {
            this.id = id;
        }

        public EnumCategorias getNome() {
            return nome;
        }

        public void setNome(EnumCategorias nome) {
            this.nome = nome;
        }

    }
