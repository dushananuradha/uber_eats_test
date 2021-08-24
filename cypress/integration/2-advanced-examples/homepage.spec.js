/// <reference types="Cypress"/>

import HomePage from "../uber_eats_tests/HomePage"

describe('HomePage_Test_Suite', ()=> {

    it("navigation_homepage", ()=> {
        //TC_01
        HomePage.loadHomePage();
    })

    it("change_delivery_address", ()=> {
        //TC_02
        HomePage.searchDeliveryAddress();
    })
})