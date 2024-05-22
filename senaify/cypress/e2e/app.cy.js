describe('template spec', () => {
  it('passes', () => {
    cy.visit(`/`)
    cy.wait(2000)
  })

  it('Verficar se existe uma lista com as playlists', () => {
    cy.contains('Pagodeira').click()
    cy.wait(2000)
  })

  it("Clicar em uma opção de playlist", () => {
    cy.contains('Vamo de Pagodin').click()
  })

  // it("Clicar em uma opção de playlist", () => {
  //   cy.get("[aria-label = 'music-item']").first().click()
  // })
})

