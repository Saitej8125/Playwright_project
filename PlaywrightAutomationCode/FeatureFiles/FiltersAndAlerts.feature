Feature: Filters and Alerts

    Background: common steps
        Given I launch the browser

    @regression
    Scenario: verify playwright filters
        Then I verify playwright filters
        And I close the browser

    @regression
    Scenario: verify simple alerts
        And I verify simple alerts
        And I close the browser

    @regression
    Scenario: verify Confirmation alerts okay
        And I verify Confirmation alerts okay
        And I close the browser

    @regression
    Scenario: verify Confirmation alerts cancel
        And I verify Confirmation alerts cancel
        And I close the browser

        @regression
    Scenario: verify Prompt alerts ok without text
        And I verify Prompt alerts ok without text
        And I close the browser
        
        
    @regression
    Scenario: verify Prompt alerts ok with text
        And I verify Prompt alerts ok with text
       # And I close the browser

        @regression
    Scenario: verify Prompt alerts cancel
        And I verify Prompt alerts cancel
        #And I close the browser