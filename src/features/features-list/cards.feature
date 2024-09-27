Feature: Working with cards on the Trello

@login_on_the_site
   Scenario: Creating a new card on a list
   Given I am on the Trello board with existed list
   When I add a new card
   Then a new card should be added to the list

@login_on_the_site
   Scenario: Filter cards
   Given I am on the Trello board with existed list
   When I apply a filter for specific criteria
   Then only cards matching the criteria should be displayed