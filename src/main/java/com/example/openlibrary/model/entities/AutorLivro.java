package com.example.openlibrary.model.entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collation = "autor_livro")
public class AutorLivro {

    @Id
    private String autorId;

    private String livroId;

    public String getLivroId() {
        return livroId;
    }

    public void setLivroId(String livroId) {
        this.livroId = livroId;
    }

    public String getAutorId() {
        return autorId;
    }

    public void setAutorId(String autorId) {
        this.autorId = autorId;
    }
}
