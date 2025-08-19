export class RegistroForm {
  elements = {
    titleInput: () => cy.get('#title'),
    titleFeedback: () => cy.get('#titleFeedback'),
    urlInput: () => cy.get('#imageUrl'),
    urlFeedback: () => cy.get('#urlFeedback'),
    submitBtn: () => cy.get('#btnSubmit')
  }

  typeField(field, text) {
    this.elements[field]().type(text)
  }

  clickSubmit() {
    this.elements.submitBtn().click()
  }

  pressEnter() {
    cy.focused().type('{enter}')
  }
}