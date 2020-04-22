package stepDefinition;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinition_Hooks {
	
	@Given("^this is the first step$")
	public void this_is_the_first_step() {
		System.out.println("this is the first step");
	}

	@When("^this is the second step$")
	public void this_is_the_second_step() {
		System.out.println("this is the second step");
	}

	@Then("^this is the third step$")
	public void this_is_the_third_step() {
		System.out.println("this is the third step");
	}



/*	@Before
	public void setUp() {
		System.out.println("This will run before scenario");
	}

	@After
	public void tearDown() {
		System.out.println("This will run after scenario");
	}*/
	
	// Code for background.feature
	@Before(order=1)
    public void beforeScenario(){
        System.out.println("Start the browser and Clear the cookies");
    } 
 @Before(order=0)
    public void beforeScenarioStart(){
        System.out.println("-----------------Start of Scenario-----------------");
    } 
 
 
 @After(order=0)
    public void afterScenarioFinish(){
        System.out.println("-----------------End of Scenario-----------------");
    } 
 @After(order=1)
    public void afterScenario(){
        System.out.println("Log out the user and close the browser");
    } 
 
	
}
