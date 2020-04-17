$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/java/features/signInWithExamplesKeyword.feature");
formatter.feature({
  "line": 1,
  "name": "Validating user login for Indeed website",
  "description": "",
  "id": "validating-user-login-for-indeed-website",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Validating user login with valid credentials",
  "description": "",
  "id": "validating-user-login-for-indeed-website;validating-user-login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User comes to the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User click Sign in link",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User is directed to sign in page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User enters \u003cemail\u003e and \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User unselect the Stay signed in checkbox",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User click the Sign In button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User is directed to home page",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "validating-user-login-for-indeed-website;validating-user-login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 14,
      "id": "validating-user-login-for-indeed-website;validating-user-login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "kom_mariee@mailinator.com",
        "kom_mariee"
      ],
      "line": 15,
      "id": "validating-user-login-for-indeed-website;validating-user-login-with-valid-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
  "name": "Validating user login with valid credentials",
  "description": "",
  "id": "validating-user-login-for-indeed-website;validating-user-login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User comes to the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User click Sign in link",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User is directed to sign in page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User enters kom_mariee@mailinator.com and kom_mariee",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User unselect the Stay signed in checkbox",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User click the Sign In button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User is directed to home page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinationWithExamplesKeyword.user_comes_to_the_landing_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinationWithExamplesKeyword.user_click_Sign_in_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinationWithExamplesKeyword.user_is_directed_to_sign_in_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "kom_mariee@mailinator.com",
      "offset": 12
    },
    {
      "val": "kom_mariee",
      "offset": 42
    }
  ],
  "location": "StepDefinationWithExamplesKeyword.user_enters_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinationWithExamplesKeyword.user_unselect_the_Stay_signed_in_checkbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinationWithExamplesKeyword.user_click_the_Sign_In_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinationWithExamplesKeyword.user_is_directed_to_home_page()"
});
formatter.result({
  "status": "skipped"
});
});