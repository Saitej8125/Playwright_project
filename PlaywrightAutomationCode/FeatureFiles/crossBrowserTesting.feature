
Feature: cross Browser Testing

    @regression
    Scenario: Verify playwright methods in chrome
        Given I launch the browser in chrome
        Then I verify playwright methods part4
        #And I close the browser

  @regression
    Scenario: Verify playwright methods in firefox
        Given I launch the browser in firefox
        Then I verify playwright methods part4
        #And I close the browser

      @regression
    Scenario: Verify playwright methods in safari       
        Given I launch the browser in safari
        Then I verify playwright methods part4
        #And I close the browser

        @regression
    Scenario: Verify playwright methods in headless broswer
        Given I launch the browser in headless broswer
        Then I verify playwright methods part4
        #And I close the browser