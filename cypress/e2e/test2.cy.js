describe('Test produkt ze skończoną pulą', () => {
    it('Powinien wprowadzić dane do pola email oraz potrzebnych innych pól do rejestracji', () => {
      cy.visit('https://testy-zadanie.zapisani.dev/')
      cy.get('.text-end > .btn-primary').click()
      cy.get('input[name="email_main"]').type('test@test.pl', {force:true})
      cy.get('input[name="basic_field_ee0b49fb"]').type('1', {force:true})
      cy.get('[name="basic_field_855dd2b7"]').type('1', {force:true})
      cy.get(':nth-child(2) > .react-page-cell-inner > [style="display: flex; flex-direction: column; height: 100%;"] > #alignment-decorator > .d-flex > .m-2 > .p-4 > :nth-child(6) > .col').click()
      cy.wait(2000)
      cy.get(':nth-child(2) > .react-page-cell-inner > [style="display: flex; flex-direction: column; height: 100%;"] > #alignment-decorator > .d-flex > .m-2 > .p-4 > :nth-child(5) > .text-center > .align-items-center > .w-100 > .btn-group > .btn').click()
      cy.get('.my-auto > .shadow').click()
      cy.wait(3000)
      cy.get('input[name="firstName"]').type('test', {force:true})
      cy.get('input[name="lastName"]').type('testowy', {force:true})
      cy.get('.btn-outline-secondary > h5').click()
      cy.get('.my-auto > .shadow').click()
      cy.wait(3000)
      cy.get('.text-center > .btn').click()
      cy.visit('https://testy-zadanie.zapisani.dev/')
      cy.get(':nth-child(2) > .react-page-cell-inner > [style="display: flex; flex-direction: column; height: 100%;"] > #alignment-decorator > .d-flex > .m-2 > .p-4 > :nth-child(6) > .col').click()
    });
});