const getStore = () => cy.window().its('app.$store');

it('renders components as expected', () => {
  cy.visit('http://localhost:9002/iframe.html?id=example-button--primary');
  cy.matchImageSnapshot();
});
