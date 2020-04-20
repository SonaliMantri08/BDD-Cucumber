$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/java/features/signInUsingMaps.feature");
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
  "name": "User is on the website\u0027s landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User clicked the link Sign in",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User moves to sign in page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User types valid credentials and click Sign in",
  "rows": [
    {
      "cells": [
        "email_id",
        "password"
      ],
      "line": 9
    },
    {
      "cells": [
        "kom_mariee@mailinator.com",
        "kom_mariee"
      ],
      "line": 10
    },
    {
      "cells": [
        "john_doe1@mailinator.com",
        "john_doe"
      ],
      "line": 11
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "browser is closed",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInStepDefinitionUsingMaps.user_is_on_the_website_s_landing_page()"
});
formatter.result({
  "duration": 11767126400,
  "status": "passed"
});
formatter.match({
  "location": "SignInStepDefinitionUsingMaps.user_clicked_the_link_Sign_in()"
});
formatter.result({
  "duration": 2820930200,
  "status": "passed"
});
formatter.match({
  "location": "SignInStepDefinitionUsingMaps.user_moves_to_sign_in_page()"
});
formatter.result({
  "duration": 9709900,
  "status": "passed"
});
formatter.match({
  "location": "SignInStepDefinitionUsingMaps.user_types_valid_credentials_and_click_sign_in(DataTable)"
});
formatter.result({
  "duration": 9152027100,
  "status": "passed"
});
formatter.match({
  "location": "SignInStepDefinitionUsingMaps.browser_is_closed()"
});
formatter.result({
  "duration": 733322700,
  "status": "passed"
});
});