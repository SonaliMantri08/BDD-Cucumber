package stepDefinition;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;

public class StepDefinition_Tagging_Example {
	@Given("^This is a positive login test$")
	public void this_is_a_positive_login_test() {
		System.out.println("This is a positive login test");
	}

	@Given("^This is an negative login test$")
	public void this_is_an_negative_login_test() {
		System.out.println("This is an negative login test");
	}

	@Given("^This is a missing username login test$")
	public void this_is_a_missing_username_login_test() {
		System.out.println("This is a missing username login test");
	}

	@Given("^This is a missing password login test$")
	public void this_is_a_missing_password_login_test() {
		System.out.println("This is a missing password login test");
	}

	@Given("^This is a missing username and missing password login test$")
	public void this_is_a_missing_username_and_missing_password_login_test() {
		System.out.println("This is a missing username and missing password login test");
	}

	@Given("^This is a login test case with correct Google credentials$")
	public void this_is_a_login_test_case_with_correct_Google_credentials() {
		System.out.println("This is a login test case with correct Google credentials");
	}

	@Given("^This is a login test case with correct Facebook credentials$")
	public void this_is_a_login_test_case_with_correct_Facebook_credentials() {
		System.out.println("This is a login test case with correct Facebook credentials");
	}

	@Given("^This is a log out test case$")
	public void this_is_a_log_out_test_case() {
		System.out.println("This is a log out test case");
	}
}
