/// <reference types="Cypress"/>

import HomePage from "../uber_eats_tests/HomePage"
import RestaurantListPage from "../uber_eats_tests/RestaurantListPage";

describe('UberEats_Test_Suite', ()=> {

    it.skip("navigation_homepage", ()=> {
        //TC_01
        HomePage.loadHomePage();
    })

    it.skip("change_delivery_address", ()=> {
        //TC_02
        HomePage.searchDeliveryAddress();
    })

    it.skip("sorting restaurant", ()=>{
        //TC_03
        RestaurantListPage.getListPage();
        RestaurantListPage.getSortOptions();
    })

    it("set price ranges for food items", ()=> {
        RestaurantListPage.setPriceRange();
    })

    it.skip("set dietary options for the food items", ()=> {
        RestaurantListPage.setDietaryOptions();
    })

    it.skip("set maximum delivery fee for ordered food items", ()=> {
       //TC_05
        RestaurantListPage.setMaxDeliveryFee();
    })

})