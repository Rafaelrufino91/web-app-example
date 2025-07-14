
class RegistroForm {
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
}

const registroform = new RegistroForm()

const input = {
  title: '',
  url: ''
}

const color = {
  erro: 'rgb(220, 53, 69)',
  sucess: ''
}

describe('Registro de Imagens', () => {
  
  describe('Enviar uma imagem com entradas inválidas', () => {
    after(() => {
      cy.clearAllLocalStorage()
    })
   
    it('Dado que estou na página de registro de imagens', () => {
      cy.visit('/')
    })
    it('Quando eu digitar "" no campo de título', () => {
      registroform.typeTitle(input.title)
    })
    it('Então eu digitar "" no campo de URL', () => {
      registroform.typeUrl(input.url)
    })
    it('Então eu clico no botão de envio', () => {
      registroform.clickSubmit()
    })
    it('Então devo ver a mensagem "Please type a title for the image." acima do campo de título', () => {
      registroform.elements.titleFeedback().should('contains.text', 'Please type a title for the image.')
    })
    it('E devo ver a mensagem "Please type a valid URL" acima do campo de URL da imagem', () => {
      registroform.elements.urlFeedback().should('contains.text', 'Please type a valid URL')
    })
    it('E devo ver um ícone de exclamação nos campos de título e URL', () => {
      registroform.elements.titleInput().should('have.css', 'borderRightColor', color.erro) 
      })
    })
  
  }) 
