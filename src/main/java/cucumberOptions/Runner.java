package cucumberOptions;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="src/main/java/features/signInUsingMaps.feature",
		glue= {"stepDefinition"},
		plugin= {"pretty","html:test-output"},
		monochrome=true,
		dryRun=false
		)

public class Runner {
//features="src/main/java/features/signIn.feature" 
	//signInWithExamplesKeyword.feature
	//features="src/main/java/features/signInWithDataTable.feature"
	//features="src/main/java/features/signInWithDataTableWithHeader.feature"
}
