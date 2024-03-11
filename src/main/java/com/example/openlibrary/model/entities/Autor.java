package com.example.openlibrary.model.entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("autor")
public class Autor {

    @Id
    private String autorId;

    private String autorNome;

    public Autor(String autorId, String autorNome) {
        this.autorId = autorId;
        this.autorNome = autorNome;
    }

    public String getAutorNome() {
        return autorNome;
    }

    public void setAutorNome(String autorNome) {
        this.autorNome = autorNome;
    }
}
