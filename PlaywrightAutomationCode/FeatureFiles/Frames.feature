Feature: Frames and upload files


@regression
    Scenario: verify playwright frames
        Given I launch the browser
        Then I verify playwright frames
       # And I close the browser