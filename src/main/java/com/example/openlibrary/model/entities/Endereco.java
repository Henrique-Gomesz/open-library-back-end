package com.example.openlibrary.model.entities;


import jakarta.persistence.*;

@Entity
@Table(name = "Endereco")
public class Endereco {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Ende_id")
    private Long endeId;

    @Column(name = "Ende_pais", nullable = false)
    private String endePais;

    @Column(name = "Ende_estado", nullable = false)
    private String endeEstado;

    @Column(name = "Ende_cidade", nullable = false)
    private String endeCidade;

    @Column(name = "Ende_rua", nullable = false)
    private String endeRua;

    @Column(name = "Ende_numero", nullable = false)
    private String endeNumero;

    @Column(name = "Ende_complemento")
    private String endeComplemento;

    public Long getEndeId() {
        return endeId;
    }

    public void setEndeId(Long endeId) {
        this.endeId = endeId;
    }

    public String getEndePais() {
        return endePais;
    }

    public void setEndePais(String endePais) {
        this.endePais = endePais;
    }

    public String getEndeEstado() {
        return endeEstado;
    }

    public void setEndeEstado(String endeEstado) {
        this.endeEstado = endeEstado;
    }

    public String getEndeCidade() {
        return endeCidade;
    }

    public void setEndeCidade(String endeCidade) {
        this.endeCidade = endeCidade;
    }

    public String getEndeRua() {
        return endeRua;
    }

    public void setEndeRua(String endeRua) {
        this.endeRua = endeRua;
    }

    public String getEndeNumero() {
        return endeNumero;
    }

    public void setEndeNumero(String endeNumero) {
        this.endeNumero = endeNumero;
    }

    public String getEndeComplemento() {
        return endeComplemento;
    }

    public void setEndeComplemento(String endeComplemento) {
        this.endeComplemento = endeComplemento;
    }

    
}
