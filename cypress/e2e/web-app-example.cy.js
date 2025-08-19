import { RegistroForm } from "./registro-form"

const registroForm = new RegistroForm()


const color = {
  erro: 'rgb(220, 53, 69)',
  success: 'rgb(25, 135, 84)'
}

const invalidInput = {
  title: 'teste',
  url: 'teste'
}

describe('Registro de Imagens', () => {
    beforeEach(() => {
      cy.visit('/')
      cy.clearAllLocalStorage()
    })
    describe('Envio com entradas inválidas', () => {

      it('Deve exibir mensagem de erro ao enviar uma URL inválida', () => {
        registroForm.typeField('titleInput', invalidInput.title)
        registroForm.typeField('urlInput', invalidInput.url)
        registroForm.clickSubmit()
        registroForm.elements.urlFeedback().should('contains.text', 'Please type a valid URL')
      })

      it('Deve exibir mensagens de erro ao enviar com campos vazios', () => {
        registroForm.elements.titleInput().should('have.value', '')
        registroForm.elements.urlInput().should('have.value', '')
        registroForm.clickSubmit()
        registroForm.elements.titleFeedback().should('contains.text', 'Please type a title for the image.')
        registroForm.elements.titleInput().should('have.css', 'borderRightColor', color.erro) 
        registroForm.elements.urlFeedback().should('contains.text', 'Please type a valid URL')
        registroForm.elements.urlFeedback().should('have.css', 'borderRightColor', color.erro) 
      })
})

  describe('Envio com entradas válidas', () => {
    const validInput = {
      title: 'Alien BR',
      url: 'https://cdn.mos.cms.futurecdn.net/eM9EvWyDxXcnQTTyH8c8p5-1200-80.jpg',
    }
    
    it('Inserir os dados, validar os valores e enviar com enter', () => {
      registroForm.typeField('titleInput', validInput.title)
      registroForm.elements.titleInput().should('have.value', 'Alien BR')
      registroForm.typeField('urlInput', validInput.url)
      registroForm.elements.urlInput().should('have.value', 'https://cdn.mos.cms.futurecdn.net/eM9EvWyDxXcnQTTyH8c8p5-1200-80.jpg')
      registroForm.pressEnter()
    })
})
})