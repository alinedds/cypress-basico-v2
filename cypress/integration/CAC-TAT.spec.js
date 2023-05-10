/// <reference types="Cypress" />



describe('Central de Atendimento ao Cliente TAT', function() {
    beforeEach(() => {
        cy.visit('./src/index.html')
    })

    it('verifica o título da aplicação', function() {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')

    })

//Exercicio e Exercicio Extra 1
    it('preenche os campos obrigatórios e envia o formulário', () => {
        
        const longText = 'Pedro Sampaio Figueiredo Ramos Pedrosa,Pedro Sampaio Figueiredo Ramos Pedrosa,Pedro Sampaio Figueiredo Ramos Pedrosa,Pedro Sampaio Figueiredo Ramos Pedrosa,Pedro Sampaio Figueiredo Ramos Pedrosa'
        
        cy.get('input[id="firstName"]').type('Pedro').should('have.value', 'Pedro')
        cy.get('input[id="lastName"]').type('Porto').should('have.value', 'Porto')
        cy.get('input[id="email"]').type('pedrop@gmail.com').should('have.value', 'pedrop@gmail.com')
        cy.get('textarea[id="open-text-area"]').type(longText,{delay:0})
        
        cy.contains('button', 'Enviar').click()
        
        cy.get('.success').should('be.visible')
    })

    //Exercicio Extra 2
    it(('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida'),function(){
        
        cy.get('input[id="firstName"]').type('Pedro').should('have.value', 'Pedro')
        cy.get('input[id="lastName"]').type('Porto').should('have.value', 'Porto')
        cy.get('input[id="email"]').type('pedrop0gmail.com')
        cy.get('textarea[id="open-text-area"]').type('Teste')

        cy.contains('button', 'Enviar').click()

        cy.get('.error').should('be.visible')

    })

    //Exercicio Extra 3
    it(('validação campo telefone, entrada não númerica'),function(){
        cy.get('input[id="phone"]')
            .type('abcdesfvd')
                .should('have.value', '')
    })

     //Exercicio Extra 4
     it(('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário'),function(){
        
        cy.get('input[id="firstName"]').type('Pedro').should('have.value', 'Pedro')
        cy.get('input[id="lastName"]').type('Porto').should('have.value', 'Porto')
        cy.get('input[id="email"]').type('pedrop0gmail.com')
        cy.get('input[type="checkbox"]').check('phone')
        cy.get('textarea[id="open-text-area"]').type('Teste')
        cy.contains('button', 'Enviar').click()

        cy.get('.error').should('be.visible')
    })

     //Exercicio Extra 5
     it(('preenche e limpa os campos nome, sobrenome, email e telefone'),function(){
        
        cy.get('input[id="firstName"]').type('Pedro').should('have.value', 'Pedro')
            .clear().should('have.value', '')
        cy.get('input[id="lastName"]').type('Porto').should('have.value', 'Porto')
             .clear().should('have.value', '')
        cy.get('input[id="email"]').type('pedrop@gmail.com').should('have.value', 'pedrop@gmail.com')
             .clear().should('have.value', '')
        cy.get('input[id="phone"]').type('999999999').should('have.value', '999999999')
            .clear().should('have.value', '')

    })

     //Exercicio Extra 6
     it(('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios'),function(){
        
        cy.contains('button', 'Enviar').click()

        cy.get('.error').should('be.visible')
    })

    //Exercicio Extra 7
    it(('envia o formuário com sucesso usando um comando customizado'),()=>{
        cy.fillMandatoryFieldsAndSubmit()

        cy.get('.success').should('be.visible')
    })

    
  })


  


