package com.example.openlibrary.model.entities;

import java.util.Date;

public class Baixa {


    private Long baixaId;

    private Long exempId;

    private Long funciId;

    private String motivoBaixa;

    private String baixaDesc;
    
    private Date dataBaixa;


    public Long getBaixaId() {
        return this.baixaId;
    }

    public void setBaixaId(Long baixaId) {
        this.baixaId = baixaId;
    }

    public Long getExempId() {
        return this.exempId;
    }

    public void setExempId(Long exempId) {
        this.exempId = exempId;
    }

    public Long getFunciId() {
        return this.funciId;
    }

    public void setFunciId(Long funciId) {
        this.funciId = funciId;
    }

    public String getMotivoBaixa() {
        return this.motivoBaixa;
    }

    public void setMotivoBaixa(String motivoBaixa) {
        this.motivoBaixa = motivoBaixa;
    }

    public String getBaixaDesc() {
        return this.baixaDesc;
    }

    public void setBaixaDesc(String baixaDesc) {
        this.baixaDesc = baixaDesc;
    }

    public Date getDataBaixa() {
        return this.dataBaixa;
    }

    public void setDataBaixa(Date dataBaixa) {
        this.dataBaixa = dataBaixa;
    }


    
}
