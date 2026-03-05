import { RegistroForm } from "./registro-form"

const registroForm = new RegistroForm()

const colors= {
  error: 'rgb(220, 53, 69)',
  success: 'rgb(25, 135, 84)'
}

const invalidInput = {
  title: '',
  url: 'teste'
}
const validInput = {
  title: 'Alien BR',
  url: 'https://cdn.mos.cms.futurecdn.net/eM9EvWyDxXcnQTTyH8c8p5-1200-80.jpg',
}

describe('Registro de Imagens', () => {
    beforeEach(() => {
      cy.visit('/')
      cy.clearAllLocalStorage()
    })
    describe('Envio com entradas inválidas', () => {
      
      it('Deve exibir mensagem de erro com campo title em branco', () => {
        registroForm.typeTitle(invalidInput.title)
        registroForm.typeUrl(validInput.url)
        registroForm.clickSubmit()
        registroForm.elements.titleFeedback().should('contains.text', 'Please type a title for the image.')
      })
      
      it('Deve exibir mensagem de erro ao enviar uma URL inválida', () => {
        registroForm.typeTitle(validInput.title)
        registroForm.typeUrl(invalidInput.url)
        registroForm.clickSubmit()
        registroForm.elements.urlFeedback().should('contains.text', 'Please type a valid URL')
      })

      it('Deve exibir mensagens de erro ao enviar com campos vazios', () => {
        registroForm.elements.titleInput().should('have.value', '')
        registroForm.elements.urlInput().should('have.value', '')
        registroForm.clickSubmit()
        registroForm.elements.titleFeedback().should('contains.text', 'Please type a title for the image.')
        registroForm.elements.titleInput().should('have.css', 'border-right-color', colors.error) 
        registroForm.elements.urlFeedback().should('contains.text', 'Please type a valid URL')
        registroForm.elements.urlFeedback().should('have.css', 'border-right-color', colors.error) 
      })
})

  describe('Envio com entradas válidas', () => {
    
    it('Inserir os dados, validar os valores e enviar com enter', () => {
      registroForm.typeTitle(validInput.title)
      registroForm.elements.titleInput().should('have.value', validInput.title)
      registroForm.typeUrl(validInput.url)
      registroForm.elements.urlInput().should('have.value', validInput.url)
      registroForm.elements.submitBtn().type('{enter}')
      registroForm.elements.imagemcard()
      .last()
      .should('have.attr', 'src', validInput.url)
    })

})
})