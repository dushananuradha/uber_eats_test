/// <reference types="Cypress"/>

class RestaurantListPage{

    static getRestaurantListPage(){
        cy.visit('https://www.ubereats.com/lk/feed?pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkNvbG9tYm8lMjAwNCUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMkNoSUoxM01FSzl0YjRqb1J0R3ZYT3FCWjNTVSUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJnb29nbGVfcGxhY2VzJTIyJTJDJTIybGF0aXR1ZGUlMjIlM0E2Ljg4NjQ3MyUyQyUyMmxvbmdpdHVkZSUyMiUzQTc5Ljg1NjI4MjYlN0Q%3D')
    }

    static confirmRestaurantListPage(){
        cy.get('#wrapper > header > div > div > a.cc.cd.ce.cf.cg.b3.ch.ci.cj.ck.cl.ag.as.c1.c5.cm.cn.b6 > div.cq.an.al')
            .contains('Colombo 04')
            .log('Successfully landed')
    }

    static viewDeliveryAddress() {
        cy.get('#wrapper > header > div > div > a.cc.cd.ce.cf.cg.b3.ch.ci.cj.ck.cl.ag.as.c1.c5.cm.cn.b6 > div.cq.an.al')
            .contains('Colombo 04')
    }

    static clickToModifyDeliveryAddress(){
        cy.get('#wrapper > header > div > div > a.cc.cd.ce.cf.cg.b3.ch.ci.cj.ck.cl.ag.as.c1.c5.cm.cn.b6 > div.cq.an.al')
        .click({force:true})
    }

    static viewModifyDeliveryAddress(){
        cy.get('.lt > .fn')
        .contains('Delivery details')
    }

    static viewSignIn(){
        cy.get('#wrapper > header > div > div > div.dj.ag.dk.c1 > a')
        .contains('Sign in')
    }

    static clickSignIn(){
        cy.get('#wrapper > header > div > div > div.dj.ag.dk.c1 > a')
        .click({force: true})
    }

    static directToSignInPage(){
        cy.get('#input-label')
        .should('contain.text', 'Sign in with your email address or mobile number.')
    }
    /* static getSortOptions(){
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

    static searchTitles(){
        cy.get('#main-content > div > div.b6.ag.dy.dz.e0.e1 > div.b6.cb.c8.f0.e3.e4.e5.e6 > div > div.fx.j1.fz.g0.g1.g2 > div:nth-child(1) > div > section > div.e5.ag.e8.c1.af > div:nth-child(1) > div')
        .focus()
    }  */
}

// #main-content > div > div.b6.ag.dy.dz.e0.e1 > div.b6.cb.c8.f0.e3.e4.e5.e6 > div > div.fx.j1.fz.g0.g1.g2 > div:nth-child(1) > div > section > div.e5.ag.e8.c1.af > div:nth-child(1) > div

export default RestaurantListPage;