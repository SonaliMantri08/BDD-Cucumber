package stepDefinition;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinition_BackgroundKeywordUsage {

	@Given("^I navigate to the login page$")
	public void i_navigate_to_the_login_page() {
		System.out.println("I am at the LogIn Page");
	}

	@When("^I submit username and password$")
	public void i_submit_username_and_password() {
		System.out.println("I Submit my Username and Password");
	}

	@Then("^I should be logged in$")
	public void i_should_be_logged_in() {
		System.out.println("I am logged on to the website");

	}

	@Given("^User navigate to what search bar$")
	public void user_navigate_to_what_search_bar() {
		System.out.println("User navigate to WHAT search bar");
	}

	@When("^User type \"([^\"]*)\" in what search bar$")
	public void user_type_in_what_search_bar(String arg1) {
		System.out.println("User type " + arg1 + " in the WHAT search bar");
	}

	@When("^User click Find Jobs button$")
	public void user_click_Find_Jobs_button() {
		System.out.println("User click Find Jobs button");

	}

	@Then("^User should display with \"([^\"]*)\" jobs$")
	public void user_should_display_with_jobs(String arg1) {
		System.out.println("User should be displayed jobs with " + arg1 + " title");
	}

	@Given("^User navigate to where search bar$")
	public void user_navigate_to_where_search_bar() {
		System.out.println("User navigate to WHERE search bar");
	}

	@When("^User type \"([^\"]*)\" in where search bar$")
	public void user_type_in_where_search_bar(String arg1) {
		System.out.println("User type " + arg1 + " in the WHAT search bar");
	}

	@Then("^User should be displayed with jobs in \"([^\"]*)\" location$")
	public void user_should_be_displayed_with_jobs_in_location(String arg1) {
		System.out.println("User should be displayed jobs in " + arg1 + " location");
	}
}
