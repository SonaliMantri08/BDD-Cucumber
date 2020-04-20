$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/java/features/tagging.feature");
formatter.feature({
  "line": 1,
  "name": "Cucumber tags",
  "description": "",
  "id": "cucumber-tags",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Login with correct username and password",
  "description": "",
  "id": "cucumber-tags;login-with-correct-username-and-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Positive"
    },
    {
      "line": 3,
      "name": "@Smoke"
    },
    {
      "line": 3,
      "name": "@Regression"
    },
    {
      "line": 3,
      "name": "@EndToEnd"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "This is a positive login test",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition_Tagging_Example.this_is_a_positive_login_test()"
});
formatter.result({
  "duration": 88379600,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Login with incorrect username and password",
  "description": "",
  "id": "cucumber-tags;login-with-incorrect-username-and-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@Negative"
    },
    {
      "line": 7,
      "name": "@Smoke"
    },
    {
      "line": 7,
      "name": "@Regression"
    },
    {
      "line": 7,
      "name": "@EndToEnd"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "This is an negative login test",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition_Tagging_Example.this_is_an_negative_login_test()"
});
formatter.result({
  "duration": 82999,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "User is able to login with correct Google credentials",
  "description": "",
  "id": "cucumber-tags;user-is-able-to-login-with-correct-google-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@Smoke"
    },
    {
      "line": 23,
      "name": "@EndToEnd"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "This is a login test case with correct Google credentials",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition_Tagging_Example.this_is_a_login_test_case_with_correct_Google_credentials()"
});
formatter.result({
  "duration": 79400,
  "status": "passed"
});
});