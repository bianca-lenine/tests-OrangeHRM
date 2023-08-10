export class log {
   
    static logar(mensagem: string) {
   
        cy.log(mensagem)
        console.log(mensagem)
    }
}