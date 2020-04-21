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

	@Given("^this is the step one$")
	public void this_is_the_step_one() {
		System.out.println("this is the step one");
	}

	@When("^this is the step two$")
	public void this_is_the_step_two() {
		System.out.println("this is the step two");
	}

	@When("^this is the step two (.+)$")
	public void this_is_the_step_two(String name) {
		System.out.println("this is the step two: " + name);
	}

	@Then("^this is the step three$")
	public void this_is_the_step_three() {
		System.out.println("this is the step three");
	}

	@Then("^this is the step three (.+)$")
	public void this_is_the_step_three(String surname) {
		System.out.println("this is the step three: " + surname);
	}

	@Before
	public void setUp() {
		System.out.println("This will run before scenario");
	}

	@After
	public void tearDown() {
		System.out.println("This will run after scenario");
	}
}
