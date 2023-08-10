export class cadastro {
static cadastrocandidato() {
        cy.get(':nth-child(5) > .oxd-main-menu-item').click()
        cy.get(':nth-child(1) > .oxd-grid-4 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').select('QA Lead')
    }
}