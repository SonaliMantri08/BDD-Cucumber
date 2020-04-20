Feature: Validating user login for Indeed website

Scenario: Validating user login with valid credentials

Given User is on the website's landing page
And User clicked the link Sign in
When User moves to sign in page 
Then User types valid credentials and click Sign in
| email_id | password |
| kom_mariee@mailinator.com | kom_mariee |
| john_doe1@mailinator.com | john_doe |
Then browser is closed




