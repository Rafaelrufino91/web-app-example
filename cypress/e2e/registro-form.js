export class RegistroForm {
  elements = {
    titleInput: () => cy.get('#title'),
    titleFeedback: () => cy.get('#titleFeedback'),
    urlInput: () => cy.get('#imageUrl'),
    urlFeedback: () => cy.get('#urlFeedback'),
    submitBtn: () => cy.get('#btnSubmit'),
    imagemcard: () => cy.get('.card-img-top.card-img')
  }

  typeTitle(text) {
    const field = this.elements.titleInput()
    field.clear()

    if (text)
      field.type(text)
  }
  
  typeUrl(text) {
    const field = this.elements.urlInput()
    field.clear()

    if (text)
      field.type(text)
  }

  clickSubmit() {
    this.elements.submitBtn().click()
  }


}