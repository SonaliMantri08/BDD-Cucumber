Feature: Validating user login for Indeed website

Scenario Outline: Validating user login with valid credentials

Given User comes to the landing page
And User click Sign in link
Then User is directed to sign in page 
When User enters <email> and <password>
When User unselect the Stay signed in checkbox
When User click the Sign In button
Then User is directed to home page

Examples:
| email | password |
| kom_mariee@mailinator.com | kom_mariee |
| john_doe1@mailinator.com | john_doe |
