package stepDefinition;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinition_TaggedHooksDemo {

	/*
	 * Hooks are used to define pre-requisite conditions and post-requisite
	 * conditions using @Before and @After
	 * 
	 * Hooks defined using @Before and @After are global; ie applicable for all
	 * scenarios that share common pre-requisite conditions and post-requisite
	 * conditions
	 * 
	 * Tagged hooks are basically customized hooks where we need to perform
	 * different tasks before and after scenarios i.e. we have different
	 * pre-quisites and post-requisites for different scenarios.
	 * 
	 * Tagged hook(pre-requisite) execute before @Before hook and Tagged
	 * hook(post-requisite) execute after @After hook
	 */

	@Given("^It is step one$")
	public void it_is_step_one() {
		System.out.println("This is the 1st step");
	}

	@When("^this is step two$")
	public void this_is_step_two() {
		System.out.println("This is the 2nd step");
	}

	@Then("^this is step three$")
	public void this_is_step_three() {
		System.out.println("This is the 3rd step");
	}

	/*
	 * This code for hooked tags can be added in a separate file and that file can
	 * be stored in Utilities folder
	 */

	@Before
	public void beforeScenario() {
		System.out.println("This will run before the every Scenario");
	}

	@After
	public void afterScenario() {
		System.out.println("This will run after the every Scenario");
	}

	@Before("@First")
	public void beforeFirst() {
		System.out.println("This will run only before the First Scenario");
	}

	@Before("@Second")
	public void beforeSecond() {
		System.out.println("This will run only before the Second Scenario");
	}

	@Before("@Third")
	public void beforeThird() {
		System.out.println("This will run only before the Third Scenario");
	}

	@After("@First")
	public void afterFirst() {
		System.out.println("This will run only after the First Scenario");
	}

	@After("@Second")
	public void afterSecond() {
		System.out.println("This will run only after the Second Scenario");
	}

	@After("@Third")
	public void afterThird() {
		System.out.println("This will run only after the Third Scenario");
	}
}
