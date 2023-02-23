/// <reference types="cypress" />

const payloadChangeBook = require('../payLoads/change-book.json')

function changeBook(id) {
    return cy.request({
        method: 'PUT',
        url: `Books/${id}`,
        headers: {
            'Content-Type': 'application/json',
        },
        failOnStatusCode: false,
        body: payloadChangeBook
    })
}

export {changeBook};