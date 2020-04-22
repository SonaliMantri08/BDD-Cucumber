Feature: Test Background Feature 
	Description: The purpose of this feature is to test the Background keyword

Background: User is Logged In 
	Given I navigate to the login page 
	When I submit username and password 
	Then I should be logged in 
	
Scenario: Search a job based on title or keyword or company 
	Given User navigate to what search bar 
	When User type "nurse" in what search bar 
	And User click Find Jobs button 
	Then User should display with "nurse" jobs 
	
Scenario: Search a job based on location 
	Given User navigate to where search bar 
	When User type "Sydney" in where search bar 
	And User click Find Jobs button 
	Then User should be displayed with jobs in "Sydney" location 
	
	
