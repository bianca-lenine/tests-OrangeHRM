export function SelectTheSecondOption (textoDaCaixinha: string) {

    cy.get(textoDaCaixinha).click().wait(2000).type(`{downarrow}{downarrow}`).wait(2000).type(`{enter}`)
    
}