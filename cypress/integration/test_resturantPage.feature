Feature: Uber Eats Restaurants List Page

    As a user, I want to access the filtered restaurants list according to my preferences, and related features available in the web page.

    Scenario: Displaying Uber Eats restaurants list page
        Given I open Uber Eats restaurants list page
        Then I should see entered delivery address at the top of the web page

    Scenario: Clicking on the displaying delivery address
    Given I should see the name of city, which the entered delivery address is located
    When I click on the displaying name of city
    Then I should see a pop-up window, with the heading of "Delivery details"


    Scenario: Signing in to personal Uber Eats account
    Given I should see 'sign in' label in Uber Eats restaurants list page
    When I click on 'sign in' link
    Then I should be directed to a new web page containing the text of 'Sign in with your email address or mobile number.'