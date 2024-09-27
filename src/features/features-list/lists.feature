Feature: Working with lists on the Trello

@login_on_the_site
   Scenario: Creating a new list
   Given I am on the Trello board
   When I add a new list
   Then a new list should be added to the board

@login_on_the_site
   Scenario: Creating a new list1
   Given I am on the Trello board1
   When I add a new list1
   Then a new list should be added to the board1