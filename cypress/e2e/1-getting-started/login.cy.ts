/// <reference types="cypress" />

import { login } from "./login";

describe('Tentativa de login com credenciais inválidas', () => {
    
    it('fazer login com credenciais inválidas', () => {
      
        login.fazerlogin('Admin', 'senhaerrada')

        cy.get('.oxd-alert-content').should("contain.text", 'Invalid credentials')
    });
});