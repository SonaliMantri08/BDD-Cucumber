Feature: Validating user login feature for Indeed website

Scenario: Validating user login feature with valid credentials

Given User comes on the landing page
And User clicks the Sign in link
Then User is navigated to the sign in page 
When User types credentials email and password
| kom_mariee@mailinator.com | kom_mariee |
When User unselect checkbox Stay signed in 
When User clicks Sign In button
Then User is navigated to website home page
