package com.utilities;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Cucumber_Hooks {

	@Before
	public void setUp() {
		System.out.println("This will run before the scenario");
	}
	
	@After
	public void tearDown() {
		System.out.println("This will run after the scenario");
	}
}
