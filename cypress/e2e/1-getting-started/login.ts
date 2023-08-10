export class login {
   
    static fazerlogin(usuario: string, senha: string ) {
   
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').click().type(usuario)
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').click().type(senha)
        cy.get('.oxd-button').click()
    
    }
}