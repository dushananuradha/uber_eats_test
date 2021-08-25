/// <reference types="Cypress"/>

class HomePage {
    static loadHomePage(){
        cy.visit(Cypress.env('url'))
    }

    static searchDeliveryAddress(){
        cy.xpath('//input[@id="location-typeahead-home-input"]').click({force:true}).type('bamba')
        cy.xpath('//*[@id="location-typeahead-home-item-0"]/div[3]/div[2]').then(($text2) =>{
            if($text2.text() === "Colombo, Sri Lanka"){
                cy.wrap($text2).click({force: true})
            }
        })
    }

    static verifyRestaturants(){
        const value = 'main-content"]/div/div[3]/div[2]/div/div[2]/div[1]/div/section/div[2]/div[1]/li[1]'
        assert.exists(value, 'No Data')
        
    }
}




export default HomePage;