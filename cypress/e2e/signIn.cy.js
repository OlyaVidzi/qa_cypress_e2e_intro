/// <reference types="cypress" />

const email = 'test_email@gmail.com';
const password = 'test2025';
const username = 'test_username';

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('https://conduit.mate.academy/');

    cy.get('h1').should('contain.text', 'conduit');
    cy.get('.nav-item').contains('Sign in').click();

    cy.get('h1').should('contain.text', 'Sign in');
    cy.get('[placeholder=Email]').type(email);
    cy.get('[placeholder=Password]').type(password);
    cy.get('button').contains('Sign in').click();

    cy.get('.nav-link').contains(username).should('be.visible');
  });
});
