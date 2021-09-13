Feature: Uber Eats Home Page

    As a user, I want to open Uber Eats home page ans to insert a delivery address for my ordered food items.


    Scenario: Opening Ubereats home page
        Given I open Uber Eats home page
        Then I should see "Uber Eats" logo at the top of home page

    Scenario: Inserting a delivery address in input box of loaded home page
        Given I open Uber Eats home page
        When I type "bamba" in the input box
        Then I select "Bambalapitiya, Colombo, Sri Lanka" from dynamic drop-down list
