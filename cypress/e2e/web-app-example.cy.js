import { RegistroForm } from "./registro-form"

const registroform = new RegistroForm()

const input = {
  title: '',
  url: ''
}

const color = {
  erro: 'rgb(220, 53, 69)',
  sucess: 'rgb(25, 135, 84)'
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

describe('Enviar uma imagem com entradas válidas usando a tecla enter', () => {
  const input = {
    title: 'Alien BR',
    url: 'https://cdn.mos.cms.futurecdn.net/eM9EvWyDxXcnQTTyH8c8p5-1200-80.jpg',
  }
  after(() => {
      cy.clearAllLocalStorage()
    })
  
  it('Dado que estou na página de registro de imagem', () => {
    cy.visit('/')
  })
  it('Quando eu digito "Alien BR" no campo de título', () => {
    registroform.typeTitle(input.title)
  })
  it('Então eu devo ver um ícone de verificação no campo de título', () => {
    registroform.elements.titleInput().should('have.value', 'Alien BR')
  })
  it('Quando eu digito "https://cdn.mos.cms.futurecdn.net/eM9EvWyDxXcnQTTyH8c8p5-1200-80.jpg" no campo de URL', () => {
    registroform.typeUrl(input.url)
  })
  it('Então eu devo ver um ícone de verificação no campo de URL da imagem', () => {
    registroform.elements.urlInput().should('have.value', 'https://cdn.mos.cms.futurecdn.net/eM9EvWyDxXcnQTTyH8c8p5-1200-80.jpg')
  })
  it('Então eu posso pressionar enter para enviar o formulário', () => {
    registroform.pressEnter()
    cy.wait(100)
  })
  it('E a lista de imagens registradas deve ser atualizada com o novo item', () => {
    cy.get('#card-list .card-img')
    .last()
    .should('have.attr', 'src', input.url)
  })  
})

