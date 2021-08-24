/// <reference types="Cypress"/>

import HomePage from "../uber_eats_tests/HomePage"

describe('HomePage_Test_Suite', ()=> {

    it("navigation_homepage", ()=> {
        HomePage.loadHomePage();
    })
})