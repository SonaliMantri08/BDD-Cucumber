Feature: Test Hooks 

Scenario: This is 1st scenario is to test hooks functionality 
	Given this is the first step 
	When this is the second step 
	Then this is the third step 
	
Scenario Outline:
This is 2nd scenario is to test hooks functionality with examples keyword 
	Given this is the step one 
	When this is the step two <name> 
	Then this is the step three <surname> 
	
	Examples: 
		| name | surname |
		| John | Doe |
		| Kom | Mary |
		| Sam | Moon |
		| Orio | Galaxy |
 