Feature: Cucumber tags 

@Positive @Smoke @Regression @EndToEnd 
Scenario: Login with correct username and password 
	Given This is a positive login test 
	
@Negative @Smoke @Regression @EndToEnd 
Scenario: Login with incorrect username and password 
	Given This is an negative login test 
	
@Negative 
Scenario: Login with no username and correct password 
	Given This is a missing username login test 
	
@Negative 
Scenario: Login with correct username and no password 
	Given This is a missing password login test 
	
@Negative 
Scenario: Login with no username and no password 
	Given This is a missing username and missing password login test 
	
@Smoke @EndToEnd 
Scenario: User is able to login with correct Google credentials 
	Given This is a login test case with correct Google credentials 
	
@Regression @EndToEnd 
Scenario: User is able to login with correct Facebook credentials 
	Given This is a login test case with correct Facebook credentials 
	
@EndToEnd 
Scenario: User is able to logout 
	Given This is a log out test case