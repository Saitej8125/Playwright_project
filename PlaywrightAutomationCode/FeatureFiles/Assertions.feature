Feature: Assertions functions

    @regression
    Scenario: I verify playwright with hard assertions
        Given I launch the browser
        Then I verify playwright hard assertions
        And I close the browser

    @regression
    Scenario: I verify playwright with soft assertions
        Given I launch the browser
        Then I verify playwright soft assertions
        And I close the browser