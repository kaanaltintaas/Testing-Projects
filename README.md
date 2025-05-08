# Playwright Projects

Used Technologies: Playwright v1.42.0, Typescript

Scenario #1: Selection, Filter and Search Functions will bu utilized to choose a certain brand within a certain price interval.

User Story Breakdown (Test Cases):
    #1 - User accesses Amazon home page without any login procedings
        *Home page must load without issue. Access is asserted through page title.
    #2 - User clicks "Elektronik" button on the upper level of the page
        *Electronics page must load without issue. Access is asserted through page title.
    #2.5 - User clicks "Bilgisayarlar, Bileşenleri ve Aksesuarları" button on the left side-menu on the page. (Note: This action does not bring an option where computer tyes can be selected, so it is only considered an extra step to showcase computer components and accessories page.)
        *Computer components and accessories page must load without issue.
    #3 - User hovers over the  "Bilgisayarlar, Bileşenleri ve Aksesuarları" dropdown button on the upper side and clicks "Dizüstü Bilgisayarlar" option in the associated dropdown menu.
        *Laptop computers screen must load without issue. Access is asserted through page title.
    #4 - User checks the "Prime" option on the left side-menu on the page
        *Page must display only the products with Prime option. A unique identifier for this page would be to check the status of the checkbox; however, if the website is not accessed with a user account, checked checkbox of Prime option will not be visible on the page. Thus, its assertion is carried out through making sure that "Prime" option checkbox is no longer on the page.

# Cases Listed in GWT Format
    GIVEN: User accesses Internet through a web browser engine (Chromium, Webkit, Firefox, etc.)
    WHEN: User accesses Amazon home page
    THEN: User correctly views the home page

    GIVEN: User is in Amazon home page
    AND: User has not logged in with an Amazon account
    WHEN: User clicks "Elektronik" section
    THEN: User is taken to Electronics page

    GIVEN: User is in Electronics page
    WHEN: User hovers over "Bilgisayarlar, Bileşenleri ve Aksesuarları" section
    AND: User clicks "Dizüstü Bilgisayarlar" button
    THEN: User is taken to Laptop Computers page

    GIVEN: User is in Laptop Computers page
    WHEN: User checks "Prime" option on the left-side menu
    THEN: User views products with Prime option on the menu