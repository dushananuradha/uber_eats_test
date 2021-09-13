/// <reference types="Cypress"/>

import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"
import HomePage from "../pageObjects/HomePage"


Given ('I open Uber Eats home page', ()=> {
    HomePage.loadHomePage()
})

Then ('I should see "Uber Eats" logo at the top of home page',()=>{
    HomePage.confirmHomePage()
    })

When ('I type "bamba" in the input box',()=>{
    HomePage.typeDeliveryAddress()
}) 

Then ('I select "Bambalapitiya, Colombo, Sri Lanka" from dynamic drop-down list',()=>{
    HomePage.selectDeliveryAddress()
})