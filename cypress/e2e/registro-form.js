export class RegistroForm {
  elements = {
    titleInput: () => cy.get('#title'),
    titleFeedback: () => cy.get('#titleFeedback'),
    urlInput: () => cy.get('#imageUrl'),
    urlFeedback: () => cy.get('#urlFeedback'),
    submitBtn: () => cy.get('#btnSubmit')
  }

  typeTitle(text) {
    if (text != '') {
    this.elements.titleInput().type(text)
    }
  }

  typeUrl(text) {
    if (text != '') {
      this.elements.urlInput().type(text)
    }
  }

  clickSubmit() {
    this.elements.submitBtn().click()
  }

  pressEnter() {
    cy.focused().type('{enter}')
  }
}