/* eslint-disable no-undef */
import 'cypress-file-upload';

Cypress.Commands.add('typeLogin', (username, password) => {
  cy.get('[data-cy=username]')
    .type(username);
  cy.get('[data-cy=password]')
    .type(password);
});
