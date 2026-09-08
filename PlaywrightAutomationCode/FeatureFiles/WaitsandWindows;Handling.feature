Feature: Waits and Windows Handling

    @regression
    Scenario: verify playwright frames
        Given I launch the browser
        Then I verify Playwright waits
        And I close the browser

    @method
    Scenario: verify playwright windows handling
        Given verify playwright windows handling