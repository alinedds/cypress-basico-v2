Cypress.Commands.add('fillMandatoryFieldsAndSubmit',()=>{
    cy.get('input[id="firstName"]').type('Pedro').should('have.value', 'Pedro')
    cy.get('input[id="lastName"]').type('Porto').should('have.value', 'Porto')
    cy.get('input[id="email"]').type('pedrop@gmail.com').should('have.value', 'pedrop@gmail.com')
    cy.get('textarea[id="open-text-area"]').type('Teste')
        
    cy.get('button[type="submit"]').click()
})



Cypress.Commands.add('fillMandatoryFieldsAndSubmit1',(nome,sobrenome,email,area)=>{
    const nomeF = nome
    const sobrenomeF = sobrenome
    const emaiilF = email
    const areaF = area

    cy.get('input[id="firstName"]').type(nome)
    cy.get('input[id="lastName"]').type(sobrenome)
    cy.get('input[id="email"]').type(email)
    cy.get('textarea[id="open-text-area"]').type(area)
        
    cy.get('button[type="submit"]').click()

})