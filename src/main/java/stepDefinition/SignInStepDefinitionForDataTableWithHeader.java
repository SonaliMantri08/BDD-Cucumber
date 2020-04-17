package stepDefinition;

import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.DataTable;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class SignInStepDefinitionForDataTableWithHeader {
	
	public static WebDriver driver;
	public static WebDriverWait wait;
	
	@Given("^User is on the website landing page$")
	public void user_is_on_the_website_landing_page() {
		driver = new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
		driver.manage().window().maximize();
		driver.get("https://au.indeed.com/");
		System.out.println("User is on landing page");
	}
	

	@Given("^User clicked Sign in link$")
	public void user_clicked_Sign_in_link()  {
		driver.findElement(By.className("gnav-LoggedOutAccountLink-text")).click();
		System.out.println("User clicked on sign in link");
	}

	@Then("^User is redirected to sign in page$")
	public void user_is_redirected_to_sign_in_page() {
		String page_title = driver.getTitle();
		if (page_title.equalsIgnoreCase("Sign In | Indeed Accounts")) {
			System.out.println("User navigated to sign in page");
		}
	}

	@When("^User types in email and password$")
	public void user_types_in_email_and_password(DataTable credentials){
		
		List<Map<String, String>> data=credentials.asMaps(String.class, String.class);
		driver.findElement(By.id("login-email-input")).sendKeys(data.get(0).get("email"));
		System.out.println("Email id is entered: " + data.get(0).get("email"));
		
		driver.findElement(By.id("login-password-input")).sendKeys(data.get(0).get("password"));
		System.out.println("Email id is entered: " + data.get(0).get("password"));
		
	}

	@When("^User unselect the checkbox for Stay signed in$")
	public void user_unselect_the_checkbox_for_Stay_signed_in() {
		driver.findElement(By.cssSelector("input[id='login-rememberme-checkbox']")).click();
		System.out.println("Checkbox unselected");
	}

	@When("^User click at the Sign In button$")
	public void user_click_at_the_Sign_In_button() {
		driver.findElement(By.id("login-submit-button")).click();
		System.out.println("User clicked on sign in link");
	}

	@Then("^User is redirected to home page$")
	public void user_is_redirected_to_home_page() {
		wait = new WebDriverWait(driver, 5);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("div[aria-label='Toggle menu']")));
		String title = driver.getTitle();
		Assert.assertEquals("Job Search | Indeed", title);
		System.out.println("Successful login");
		driver.quit();
	}
}
