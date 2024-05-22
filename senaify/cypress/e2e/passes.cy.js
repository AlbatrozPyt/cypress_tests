describe('template spec', () => {
  let musicItem;

  before('passes', () => {
    cy.visit('/')
  })

  //  Scenario: Visualizar playlists e executar uma música

  it('eu vejo o header "Good morning"', () => {
    cy.get("[aria-label='title-head']").should('have.length.greaterThan', 0)
  })

  it('eu vejo uma lista de playlists', () => {
    cy.get("[aria-label='playlist-item']").should('have.length.greaterThan', 0)
  })

  it('eu clico na primeira playlist', () => {
    cy.get("[aria-label='playlist-item']").should('have.length.greaterThan', 0).eq(0).click()
    cy.wait(1000)
  })

  it('eu vejo uma lista de músicas', () => {
    cy.get("[aria-label='music-item']").should('have.length.greaterThan', 0)
  })

  it('eu clico na primeira música', () => {
    cy.get("[aria-label='music-item']").should('have.length.greaterThan', 0).eq(0).click()
    cy.wait(1000)
    cy.scrollTo('top')
  })

  it('a música começa a tocar', () => {
    cy.get("[aria-label='music-item']").should('have.length.greaterThan', 0).eq(0)
    cy.wait(3000)
  })

  //  Scenario: Navegar entre playlists e executar outra música

  it('eu volto para a listagem de playlists', () => {
    cy.visit('/')
  })

  it('eu clico na segunda playlist', () => {
    cy.wait(1000)
    cy.get("[aria-label='playlist-item']").should('have.length.greaterThan', 0).eq(1).click()
  })

  it('eu vejo uma lista de músicas', () => {
    cy.get("[aria-label='music-item']").should('have.length.greaterThan', 0)
  })

  it('eu clico na primeira música', () => {
    cy.wait(1000)
    cy.get("[aria-label='music-item']").should('have.length.greaterThan', 0).eq(0).click()
    cy.scrollTo('top')
  })

  it('a música começa a tocar', () => {
    cy.get("[aria-label='music-item']").should('have.length.greaterThan', 0).eq(0)
    cy.wait(3000)
  })

  //  Scenario: Procurar e favoritar uma música
  it('que eu estou na tela de Pesquisa', () => {
    cy.get("[href='/Search']").click()
    cy.scrollTo('top')
    cy.wait(2000)
  })

  it('eu procuro por uma música "Nome da Música"', () => {
    cy.get("[data-testid='campo-busca']").type("Toxicity")
    cy.wait(2000)
  })

  it('eu vejo uma lista de resultados de músicas', () => {
    cy.get("[aria-label='music-item']").should('have.length.greaterThan', 0)
    cy.wait(2000)
  })

  it('eu clico na primeira música dos resultados', () => {
    musicItem = cy.get("[aria-label='music-item']").contains('Toxicity')
    musicItem.click()
    cy.scrollTo('top')
    cy.wait(1000)
  })

  it('a música começa a tocar', () => {
    cy.wait(2000)
  })

  it('eu clico para favoritar a música', () => {
    cy.wait(1000)
    cy.get('[style="margin-top: 15px; padding-bottom: 150px;"] > :nth-child(1) > .r-flexDirection-18u37iz > [data-testid="icon-button"] > .css-text-146c3p1').eq(0).click()

  })

  it('a música é adicionada à lista de favoritos', () => {
    cy.wait(1000)
  })

  // Scenario: Verificar música favoritada na tela de Favoritos
  it('que eu estou na tela de Favoritos', () => {
    cy.get("[href='/Favorites']").click()
    cy.scrollTo('top')
    cy.wait(2000)
  })

  it('eu vejo uma lista de músicas favoritas', () => {
    cy.get("[aria-label= 'music-item']").should('have.length.greaterThan', 0)
  })

  it('eu vejo a música favoritada na lista', () => {
    cy.get("[aria-label= 'music-item']").should('have.length.greaterThan', 0).contains('Skrillex')
  })

  it ('eu clico na música favoritada', () => {
    cy.get("[aria-label= 'music-item']").should('have.length.greaterThan', 0).contains('Skrillex').click()
    cy.scrollTo('top')
    cy.wait(1000)
  })

  it('a música começa a tocar', () => {
    cy.wait(1000)
  })
})