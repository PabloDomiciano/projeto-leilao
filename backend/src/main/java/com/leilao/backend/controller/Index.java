package com.leilao.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;

@RestController
public class Index {

    @GetMapping("/inicio")
    public String index() {
        return "Olá mundo Spring";
    }

    @GetMapping("/new")
    public String index2() {
        return "Olá mundo Spring 2";
    }

    @PostMapping
    public String save() {
        return "Sucess";
    }

}