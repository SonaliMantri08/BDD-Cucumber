Feature: Validating user login for Indeed website

Scenario: Validating user login with valid credentials

Given User opens the landing page
And User clicks Sign in link
Then User navigates to sign in page 
When User enter email "john_doe1@mailinator.com" and password "john_doe"
When User unselect Stay signed in checkbox
When User click on Sign In button
Then User navigates to home page

