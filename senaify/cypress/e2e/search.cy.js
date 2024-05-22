describe('template spec', () => {
  let musicItem;
  let like;

  before(() => {
    cy.visit('/')
  })

  it('Redirecionar para a tela de busca', () => {
    cy.get("[href='/Search']").click()
    cy.scrollTo('top')
    cy.wait(2000)
  });

  it("Procurando uma musica", () => {
    cy.get("[data-testid='campo-busca']").type("Silvera")

    cy.get("[aria-label='music-item']").should('have.length.greaterThan', 0)

    cy.wait(2000)

    musicItem = cy.get("[aria-label='music-item']").contains('Gojira')
    musicItem.click()

    cy.scrollTo('top')

  })

  it("Clicar em curtir musica", () => {
    cy.get(musicItem).get("[data-testid='icon-button']").first().click()

  })
})