package stepDefinition;

import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeDriverService;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class SignInStepDefinitionUsingMaps {

	public static WebDriver driver;
	public static WebDriverWait wait;

	@Given("^User is on the website's landing page$")
	public void user_is_on_the_website_s_landing_page() {
		driver = new ChromeDriver();
		System.setProperty(ChromeDriverService.CHROME_DRIVER_SILENT_OUTPUT_PROPERTY, "true");
		driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
		driver.manage().window().maximize();
		driver.get("https://au.indeed.com/");
		System.out.println("User is on landing page");
	}

	@Given("^User clicked the link Sign in$")
	public void user_clicked_the_link_Sign_in() {
		driver.findElement(By.className("gnav-LoggedOutAccountLink-text")).click();
		System.out.println("User clicked on sign in link");
	}

	@When("^User moves to sign in page$")
	public void user_moves_to_sign_in_page() {
		String page_title = driver.getTitle();
		if (page_title.equalsIgnoreCase("Sign In | Indeed Accounts")) {
			System.out.println("User navigated to sign in page");
		}
	}

	@Then("^User types valid credentials and click Sign in$")
	public void user_types_valid_credentials_and_click_sign_in(DataTable usercredentials) throws Throwable {

		for (Map<String, String> data : usercredentials.asMaps(String.class, String.class)) {
			driver.findElement(By.id("login-email-input")).sendKeys(data.get("email_id"));
			driver.findElement(By.id("login-password-input")).sendKeys(data.get("password"));
			// driver.quit();

			driver.findElement(By.cssSelector("input[id='login-rememberme-checkbox']")).click();
			System.out.println("Checkbox unselected");

			driver.findElement(By.id("login-submit-button")).click();
			System.out.println("User clicked on sign in link");

			wait = new WebDriverWait(driver, 5);
			wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("div[aria-label='Toggle menu']")));
			String title = driver.getTitle();
			Assert.assertEquals("Job Search | Indeed", title);
			System.out.println("Successful login");

			driver.findElement(By.cssSelector("div[aria-label='Toggle menu']")).click();
			System.out.println("Successful click");

			driver.findElement(By.cssSelector("a[class='gnav-AccountMenu-signOut']")).click();
			System.out.println("Successful signout click");

			driver.findElement(By.cssSelector("span[class='gnav-LoggedOutAccountLink-text']")).click();
			System.out.println("User clicked on sign in link");
		}

	}

	@Then("^browser is closed$")
	public void browser_is_closed() {
		driver.quit();
	}
}
