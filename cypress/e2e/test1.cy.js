describe('Test produkt ze skończoną pulą', () => {
  it('Powinien wprowadzić dane do pola email oraz potrzebnych innych pól do rejestracji', () => {
    cy.visit('https://testy-zadanie.zapisani.dev/')
    cy.get('.text-end > .btn-primary').click()
    cy.get('input[name="email_main"]').type('test@test.pl', {force:true})
    cy.get('input[name="basic_field_ee0b49fb"]').type('1', {force:true})
    cy.get('[name="basic_field_855dd2b7"]').type('1', {force:true})
    cy.get(':nth-child(1) > .react-page-cell-inner > [style="display: flex; flex-direction: column; height: 100%;"] > #alignment-decorator > .d-flex > .m-2 > .p-4 > :nth-child(5) > .text-center > .align-items-center > .w-100 > .btn-group > .btn').click()
   

    const requestPOST = {
      method: 'POST',
      url: 'https://testy-zadanie.zapisani.dev/services/participant/validate'
    }

    it('POST', () => {
      cy.request(requestPOST).then(response => {
          const status = response.status
          assert.equal(400,status)
      })
  })
  cy.get('.my-auto > .shadow').click()
});
});
