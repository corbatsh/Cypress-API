describe('Rest API Challenge', () => {
	it('random joke API Status Test', () => {
		cy.request('https://api.chucknorris.io/jokes/random').as('randomJoke')
		cy.get('@randomJoke').its('status').should('equal', 200)
	})
})
