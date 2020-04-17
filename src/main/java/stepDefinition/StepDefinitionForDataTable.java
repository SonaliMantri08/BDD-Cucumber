package stepDefinition;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinitionForDataTable {

	public static WebDriver driver;
	public static WebDriverWait wait;

	@Given("^User comes on the landing page$")
	public void user_comes_on_the_landing_page() {
		driver = new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
		driver.manage().window().maximize();
		driver.get("https://au.indeed.com/");
		System.out.println("User is on landing page");
	}

	@Given("^User clicks the Sign in link$")
	public void user_clicks_the_Sign_in_link() {
		driver.findElement(By.className("gnav-LoggedOutAccountLink-text")).click();
		System.out.println("User clicked on sign in link");
	}

	@Then("^User is navigated to the sign in page$")
	public void user_is_navigated_to_the_sign_in_page() {
		String page_title = driver.getTitle();
		if (page_title.equalsIgnoreCase("Sign In | Indeed Accounts")) {
			System.out.println("User navigated to sign in page");
		}
	}

	@When("^User enter email and password$")
	public void user_enter_email_and_password(DataTable arg1) {
		List<List<String>> data = arg1.raw();
		driver.findElement(By.id("login-email-input")).sendKeys(data.get(0).get(0));
		System.out.println("Email id is entered: " + data.get(0).get(0));
		driver.findElement(By.id("login-password-input")).sendKeys(data.get(0).get(1));
		System.out.println("Email id is entered: " + data.get(0).get(1));
	}

	@When("^User unselect checkbox Stay signed in$")
	public void user_unselect_checkbox_Stay_signed_in() {
		driver.findElement(By.cssSelector("input[id='login-rememberme-checkbox']")).click();
		System.out.println("Checkbox unselected");
	}

	@When("^User clicks Sign In button$")
	public void user_clicks_Sign_In_button() {
		driver.findElement(By.id("login-submit-button")).click();
		System.out.println("User clicked on sign in link");
	}

	@Then("^User is navigated to the home page$")
	public void user_is_navigated_to_the_home_page() {
		wait = new WebDriverWait(driver, 5);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("div[aria-label='Toggle menu']")));
		String title = driver.getTitle();
		Assert.assertEquals("Job Search | Indeed", title);
		System.out.println("Successful login");
		driver.quit();
	}

}
