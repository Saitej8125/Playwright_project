Feature: Reading Test Data from the feature file

    @regression
    Scenario: verify testdata from feature file
        Given I launch the browser
        Then I launch the testautomation practice application
        Then I verify the testdata from the feature file "<Name>", "<Email>", "<Phone>", "<Address>", "<Wikipedia>"
        #And I close the browser

        Examples:
            | Name              | Email                 | Phone      | Address    | Wikipedia    |
            | Sai Charan        | Saicharan@gmail.com   | 9988998899 | Hyderabad  | Testing      |
            | Sai teja          | Saiteja@gmail.com     | 9090909090 | China      | working      |
            | Sai teja pasthula | saiteja9999@gmail.com | 7330719596 | bhimavaram | good morning |

    @regression
    Scenario Outline: verify testdata from json file
        Given I launch the browser
        Then I launch the testautomation practice application
        Then I verify the testdata from the feature file "<Name>", "<Email>", "<Phone>", "<Address>", "<Wikipedia>"
        And I close the browser

        Examples:
            | Name        | Email                | Phone      | Address    | Wikipedia  |
            | roopa       | roopa@gmail.com      | 9988990099 | Hyderabad  | Testing    |
            | prasanna    | prasanna@gmail.com   | 9090909990 | China      | good night |
            | bhu lakshmi | bhulakshmi@gmail.com | 7330009596 | bhimavaram | working    |



