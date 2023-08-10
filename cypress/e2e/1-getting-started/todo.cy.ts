/// <reference types="cypress" />

import { log } from "./log"
import { login } from "./login"
import { cadastro } from "./cadastro";
describe('Minha primeira requisição', () => {

  it('Fazendo login', () => {
    //Construir uma função que faz o login e o cadastro de um candidato na aba recruiter

    login.fazerlogin('Admin', 'admin123')
    cadastro.cadastrocandidato()

  });
});

