$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/java/features/signIn.feature");
formatter.feature({
  "line": 1,
  "name": "Validating user login for Indeed website",
  "description": "",
  "id": "validating-user-login-for-indeed-website",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Validating user login with valid credentials",
  "description": "",
  "id": "validating-user-login-for-indeed-website;validating-user-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User opens the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User clicks Sign in link",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User navigates to sign in page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User enter email \"john_doe1@mailinator.com\" and password \"john_doe\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User unselect Stay signed in checkbox",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User click on Sign In button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User navigates to home page",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInStepDefination.user_opens_the_landing_page()"
});
formatter.result({
  "duration": 12536548000,
  "status": "passed"
});
formatter.match({
  "location": "SignInStepDefination.user_clicks_Sign_in_link()"
});
formatter.result({
  "duration": 3090981600,
  "status": "passed"
});
formatter.match({
  "location": "SignInStepDefination.user_navigates_to_sign_in_page()"
});
formatter.result({
  "duration": 5884400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "john_doe1@mailinator.com",
      "offset": 18
    },
    {
      "val": "john_doe",
      "offset": 58
    }
  ],
  "location": "SignInStepDefination.user_enter_email_and_password(String,String)"
});
formatter.result({
  "duration": 472910500,
  "status": "passed"
});
formatter.match({
  "location": "SignInStepDefination.user_unselect_Stay_signed_in_checkbox()"
});
formatter.result({
  "duration": 96479600,
  "status": "passed"
});
formatter.match({
  "location": "SignInStepDefination.user_click_on_Sign_In_button()"
});
formatter.result({
  "duration": 53836400,
  "status": "passed"
});
formatter.match({
  "location": "SignInStepDefination.user_navigates_to_home_page()"
});
formatter.result({
  "duration": 2406632900,
  "status": "passed"
});
});