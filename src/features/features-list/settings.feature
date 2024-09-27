Feature: Changing settings on the Trello

    Scenario: Modifying workspace settings
    Given I am on the workspace settings page
    When I update workspace details
    Then the workspace settings should be updated successfully

    @login_on_the_site
    Scenario: Editing the user profile settings
    Given I am on the profile settings page
    And I update my profile information
    Then my profile should reflect the updates