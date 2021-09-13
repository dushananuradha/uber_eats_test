/// <reference types="Cypress"/>

import HomePage from "../pageObjects/HomePage"
import RestaurantListPage from "../pageObjects/RestaurantListPage";

describe('UberEats_Test_Suite', ()=> {

    it("navigation_UberEats_homepage", ()=> {
        //refer TC_01
        HomePage.loadHomePage();
    })

    it("access_and_change_delivery_address", ()=> {
        //refer TC_02 and TC_03
        HomePage.searchDeliveryAddress();
    })

    it.skip("verify_restaurant_data", ()=> {
        //refer TC_04
        HomePage.verifyRestaturants();
    })

     it.skip("sorting restaurant", ()=>{
        RestaurantListPage.getListPage();
        RestaurantListPage.getSortOptions();
    })

    it.skip("set price ranges for food items", ()=> {
        RestaurantListPage.setPriceRange();
    })

    it.skip("set dietary options for the food items", ()=> {
        RestaurantListPage.setDietaryOptions();
    })

    it("focus at titles", ()=> {
       //TC_05
        RestaurantListPage.searchTitles();
    }) 


})