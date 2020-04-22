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
    },
    {
      "cells": [
        "john_doe1@mailinator.com",
        "john_doe"
      ],
      "line": 16,
      "id": "validating-user-login-for-indeed-website;validating-user-login-with-valid-credentials;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 356500,
  "status": "passed"
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
  "duration": 7330258100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinationWithExamplesKeyword.user_click_Sign_in_link()"
});
formatter.result({
  "duration": 2453053700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinationWithExamplesKeyword.user_is_directed_to_sign_in_page()"
});
formatter.result({
  "duration": 73082500,
  "status": "passed"
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
  "duration": 1038302400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinationWithExamplesKeyword.user_unselect_the_Stay_signed_in_checkbox()"
});
formatter.result({
  "duration": 83980900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinationWithExamplesKeyword.user_click_the_Sign_In_button()"
});
formatter.result({
  "duration": 65984500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinationWithExamplesKeyword.user_is_directed_to_home_page()"
});
formatter.result({
  "duration": 2114823700,
  "status": "passed"
});
formatter.after({
  "duration": 162400,
  "status": "passed"
});
formatter.before({
  "duration": 196500,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Validating user login with valid credentials",
  "description": "",
  "id": "validating-user-login-for-indeed-website;validating-user-login-with-valid-credentials;;3",
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
  "name": "User enters john_doe1@mailinator.com and john_doe",
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
  "duration": 6188983700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinationWithExamplesKeyword.user_click_Sign_in_link()"
});
formatter.result({
  "duration": 2398054700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinationWithExamplesKeyword.user_is_directed_to_sign_in_page()"
});
formatter.result({
  "duration": 13860800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "john_doe1@mailinator.com",
      "offset": 12
    },
    {
      "val": "john_doe",
      "offset": 41
    }
  ],
  "location": "StepDefinationWithExamplesKeyword.user_enters_and(String,String)"
});
formatter.result({
  "duration": 558380900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinationWithExamplesKeyword.user_unselect_the_Stay_signed_in_checkbox()"
});
formatter.result({
  "duration": 67829300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinationWithExamplesKeyword.user_click_the_Sign_In_button()"
});
formatter.result({
  "duration": 56735200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinationWithExamplesKeyword.user_is_directed_to_home_page()"
});
formatter.result({
  "duration": 2488401400,
  "status": "passed"
});
formatter.after({
  "duration": 76200,
  "status": "passed"
});
});