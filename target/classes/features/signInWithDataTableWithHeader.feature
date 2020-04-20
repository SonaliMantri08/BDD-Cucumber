Feature: Validating user login for Indeed website

Scenario: Validating user login with valid credentials

Given User is on the website landing page
And User clicked Sign in link
Then User is redirected to sign in page 
When User types in email and password
| email | password |
| kom_mariee@mailinator.com | kom_mariee |
When User unselect the checkbox for Stay signed in 
When User click at the Sign In button
Then User is redirected to home page



