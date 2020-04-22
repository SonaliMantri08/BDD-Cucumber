package stepDefinition;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeDriverService;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinationWithExamplesKeyword {

	public static WebDriver driver;
	public static WebDriverWait wait;

	@Given("^User comes to the landing page$")
	public void user_comes_to_the_landing_page() throws Throwable {
		
		/*The statement below will remove the severe error warning issue in console logs
		 * System.setProperty(ChromeDriverService.CHROME_DRIVER_SILENT_OUTPUT_PROPERTY, "true");
		 * */
		System.setProperty(ChromeDriverService.CHROME_DRIVER_SILENT_OUTPUT_PROPERTY, "true");
		driver = new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
		driver.manage().window().maximize();
		driver.get("https://au.indeed.com/");
		System.out.println("User is on landing page");
	}

	@Given("^User click Sign in link$")
	public void user_click_Sign_in_link() throws Throwable {
		driver.findElement(By.className("gnav-LoggedOutAccountLink-text")).click();
		System.out.println("User clicked on sign in link");
	}

	@Then("^User is directed to sign in page$")
	public void user_is_directed_to_sign_in_page() throws Throwable {
		String page_title = driver.getTitle();
		if (page_title.equalsIgnoreCase("Sign In | Indeed Accounts")) {
			System.out.println("User navigated to sign in page");
		}
	}

	@When("^User enters (.+) and (.+)$")
	public void user_enters_and(String email, String password) throws Throwable {
		driver.findElement(By.id("login-email-input")).sendKeys(email);
		System.out.println("Email id is entered: " + email);

		driver.findElement(By.id("login-password-input")).sendKeys(password);
		System.out.println("Password is entered: " + password);
	}

	@When("^User unselect the Stay signed in checkbox$")
	public void user_unselect_the_Stay_signed_in_checkbox() throws Throwable {
		driver.findElement(By.cssSelector("input[id='login-rememberme-checkbox']")).click();
		System.out.println("Checkbox unselected");
	}

	@When("^User click the Sign In button$")
	public void user_click_the_Sign_In_button() throws Throwable {
		driver.findElement(By.id("login-submit-button")).click();
		System.out.println("User clicked on sign in link");
	}

	@Then("^User is directed to home page$")
	public void user_is_directed_to_home_page() throws Throwable {
		wait = new WebDriverWait(driver, 5);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("div[aria-label='Toggle menu']")));
		String title = driver.getTitle();
		Assert.assertEquals("Job Search | Indeed", title);
		System.out.println("Successful login");
		driver.quit();
	}

}
