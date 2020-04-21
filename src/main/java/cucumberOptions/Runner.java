package cucumberOptions;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="src/main/java/features/hooks.feature",
		glue= {"stepDefinition"},
		plugin= {"pretty","html:test-output"},
		monochrome=true,
		dryRun=false
		//tags= {"@EndToEnd","~@Regression"}
		)

public class Runner {
	//features="src/main/java/features/signIn.feature" 
	//signInWithExamplesKeyword.feature
	//features="src/main/java/features/signInWithDataTable.feature"
	//features="src/main/java/features/signInWithDataTableWithHeader.feature"
	//features="src/main/java/features/signInUsingMaps.feature"
	//features="src/main/java/features/tagging.feature"
	
	/*
	 * tags= {"@Smoke, @EndToEnd"}
	 * OR- Both tags are mentioned in same quotes
	 * 
	 * tags= {"@Smoke", "@EndToEnd"}
	 *AND- Both tags are mentioned in separate quotes
	 *
	 * */
	
	// '~'symbol is used to skip/ignore scenarios.
}
