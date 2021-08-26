/// <reference types="Cypress"/>

class RestaurantListPage{

    static getListPage(){
        cy.visit('https://www.ubereats.com/lk/feed?pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkNvbG9tYm8lMjAwNCUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMkNoSUoxM01FSzl0YjRqb1J0R3ZYT3FCWjNTVSUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJnb29nbGVfcGxhY2VzJTIyJTJDJTIybGF0aXR1ZGUlMjIlM0E2Ljg4NjQ3MyUyQyUyMmxvbmdpdHVkZSUyMiUzQTc5Ljg1NjI4MjYlN0Q%3D')
    }

    static getSortOptions(){
        cy.xpath('//input[@id="4c7cf7ef-730f-431f-9072-26bc39f7c023"]').click({force: true}).should('have.value', '  Most popular')
    }

    static setPriceRange(){
        
    }

    static setDietaryOptions(){
        cy.xpath('//input[@id="main-content"]/div/div/div[1]/div[2]/div[1]/div[2]/div[2]/div[8]/div/div/button[1]').then(($label2) =>{
            if($label2.text() === "  Vegetarian"){
                cy.wrap($label2).click({force: true})
            }
        })
    }

    static setMaxDeliveryFee(){ 
        cy.xpath('//*[@id="main-content"]/div/div/div[1]/div[2]/div[1]/div[2]/div[2]/div[6]/div/div/div/input', {timeout:10000}).then(()=> {
            invoke('value', '2').trigger('change')
        })
   
    }

    /* static searchRestaurantInfo(){
        cy.get('')
    } */
}

export default RestaurantListPage;