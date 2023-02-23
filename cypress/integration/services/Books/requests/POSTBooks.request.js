/// <reference types="cypress" />

const payloadAddBook = require('../payLoads/add-book.json')

function addBook() {
    return cy.request({
        method: 'POST',
        url:'Books',
        failOnStatusCode: false,
        body: payloadAddBook
    })
}

export {addBook};