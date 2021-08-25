/// <reference types="Cypress"/>

import HomePage from "../uber_eats_tests/HomePage"
import RestaurantListPage from "../uber_eats_tests/RestaurantListPage";

describe('UberEats_Test_Suite', ()=> {

    it("navigation_homepage", ()=> {
        //TC_01
        HomePage.loadHomePage();
    })

    it("change_delivery_address", ()=> {
        //TC_02
        HomePage.searchDeliveryAddress();
    })

    it("verify restaurant data", ()=> {
        HomePage.verifyRestaturants();
    })

    /* it.skip("sorting restaurant", ()=>{
        //TC_03
        RestaurantListPage.getListPage();
        RestaurantListPage.getSortOptions();
    })

    it.skip("set price ranges for food items", ()=> {
        RestaurantListPage.setPriceRange();
    })

    it.skip("set dietary options for the food items", ()=> {
        RestaurantListPage.setDietaryOptions();
    })

    it.skip("set maximum delivery fee for ordered food items", ()=> {
       //TC_05
        RestaurantListPage.setMaxDeliveryFee();
    }) */


})