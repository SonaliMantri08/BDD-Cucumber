$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/java/features/hooks.feature");
formatter.feature({
  "line": 1,
  "name": "Test Hooks",
  "description": "",
  "id": "test-hooks",
  "keyword": "Feature"
});
formatter.before({
  "duration": 297700,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "This is 1st scenario is to test hooks functionality",
  "description": "",
  "id": "test-hooks;this-is-1st-scenario-is-to-test-hooks-functionality",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "this is the first step",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "this is the second step",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "this is the third step",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition_Hooks.this_is_the_first_step()"
});
formatter.result({
  "duration": 90885100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition_Hooks.this_is_the_second_step()"
});
formatter.result({
  "duration": 61800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition_Hooks.this_is_the_third_step()"
});
formatter.result({
  "duration": 56800,
  "status": "passed"
});
formatter.after({
  "duration": 53700,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "",
  "description": "This is 2nd scenario is to test hooks functionality with examples keyword",
  "id": "test-hooks;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "this is the step one",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "this is the step two \u003cname\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "this is the step three \u003csurname\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "test-hooks;;",
  "rows": [
    {
      "cells": [
        "name",
        "surname"
      ],
      "line": 15,
      "id": "test-hooks;;;1"
    },
    {
      "cells": [
        "John",
        "Doe"
      ],
      "line": 16,
      "id": "test-hooks;;;2"
    },
    {
      "cells": [
        "Kom",
        "Mary"
      ],
      "line": 17,
      "id": "test-hooks;;;3"
    },
    {
      "cells": [
        "Sam",
        "Moon"
      ],
      "line": 18,
      "id": "test-hooks;;;4"
    },
    {
      "cells": [
        "Orio",
        "Galaxy"
      ],
      "line": 19,
      "id": "test-hooks;;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 47400,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "",
  "description": "This is 2nd scenario is to test hooks functionality with examples keyword",
  "id": "test-hooks;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "this is the step one",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "this is the step two John",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "this is the step three Doe",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition_Hooks.this_is_the_step_one()"
});
formatter.result({
  "duration": 39700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "John",
      "offset": 21
    }
  ],
  "location": "StepDefinition_Hooks.this_is_the_step_two(String)"
});
formatter.result({
  "duration": 2128500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Doe",
      "offset": 23
    }
  ],
  "location": "StepDefinition_Hooks.this_is_the_step_three(String)"
});
formatter.result({
  "duration": 75600,
  "status": "passed"
});
formatter.after({
  "duration": 32300,
  "status": "passed"
});
formatter.before({
  "duration": 44400,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "",
  "description": "This is 2nd scenario is to test hooks functionality with examples keyword",
  "id": "test-hooks;;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "this is the step one",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "this is the step two Kom",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "this is the step three Mary",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition_Hooks.this_is_the_step_one()"
});
formatter.result({
  "duration": 69900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kom",
      "offset": 21
    }
  ],
  "location": "StepDefinition_Hooks.this_is_the_step_two(String)"
});
formatter.result({
  "duration": 87300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mary",
      "offset": 23
    }
  ],
  "location": "StepDefinition_Hooks.this_is_the_step_three(String)"
});
formatter.result({
  "duration": 95200,
  "status": "passed"
});
formatter.after({
  "duration": 60200,
  "status": "passed"
});
formatter.before({
  "duration": 58500,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "",
  "description": "This is 2nd scenario is to test hooks functionality with examples keyword",
  "id": "test-hooks;;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "this is the step one",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "this is the step two Sam",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "this is the step three Moon",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition_Hooks.this_is_the_step_one()"
});
formatter.result({
  "duration": 68600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sam",
      "offset": 21
    }
  ],
  "location": "StepDefinition_Hooks.this_is_the_step_two(String)"
});
formatter.result({
  "duration": 67700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Moon",
      "offset": 23
    }
  ],
  "location": "StepDefinition_Hooks.this_is_the_step_three(String)"
});
formatter.result({
  "duration": 101400,
  "status": "passed"
});
formatter.after({
  "duration": 36700,
  "status": "passed"
});
formatter.before({
  "duration": 47600,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "",
  "description": "This is 2nd scenario is to test hooks functionality with examples keyword",
  "id": "test-hooks;;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "this is the step one",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "this is the step two Orio",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "this is the step three Galaxy",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition_Hooks.this_is_the_step_one()"
});
formatter.result({
  "duration": 31400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Orio",
      "offset": 21
    }
  ],
  "location": "StepDefinition_Hooks.this_is_the_step_two(String)"
});
formatter.result({
  "duration": 65000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Galaxy",
      "offset": 23
    }
  ],
  "location": "StepDefinition_Hooks.this_is_the_step_three(String)"
});
formatter.result({
  "duration": 53900,
  "status": "passed"
});
formatter.after({
  "duration": 25000,
  "status": "passed"
});
});