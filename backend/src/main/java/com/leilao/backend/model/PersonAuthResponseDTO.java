package com.leilao.backend.model;

import lombok.Data;

@Data
public class PersonAuthResponseDTO {

    private String email;
    private String token;

    public PersonAuthResponseDTO(String email, String token) {
        this.email = email;
        this.token = token;
    }
}