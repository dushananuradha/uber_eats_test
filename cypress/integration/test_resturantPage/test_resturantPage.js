/// <reference types="Cypress"/>

import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"
import RestaurantListPage from "../pageObjects/RestaurantListPage"


Given('I open Uber Eats restaurants list page',()=>{
    RestaurantListPage.getRestaurantListPage()
})

Then('I should see entered delivery address at the top of the web page',()=>{
    RestaurantListPage.confirmRestaurantListPage()
})

Given ('I should see the name of city, which the entered delivery address is located', ()=>{
    RestaurantListPage.viewDeliveryAddress()
})

When ('I click on the displaying name of city',()=>{
    RestaurantListPage.clickToModifyDeliveryAddress()
})

Then ('I should see a pop-up window, with the heading of "Delivery details"', ()=> {
    RestaurantListPage.viewModifyDeliveryAddress()
})


Given ('I should see \'sign in\' label in Uber Eats restaurants list page', ()=>{
    RestaurantListPage.viewSignIn()
})

When ('I click on \'sign in\' link', ()=>{
    RestaurantListPage.clickSignIn()
})

Then ('I should be directed to a new web page containing the text of \'Sign in with your email address or mobile number.\'', ()=>{
    RestaurantListPage.directToSignInPage()
})
