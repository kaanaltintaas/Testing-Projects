# Amazon Search Project (Playwright)

Used Technologies: Playwright v1.52.0, Typescript

Scenario #1: Selection, Filter and Search Functions will bu utilized to choose a certain brand and product model. The model variant with the highest price must be selected and added to the cart. User must then proceed to checkout, which must redirect him to login screen to request an account.

User Story Breakdown (Test Cases):
    #1 - User accesses Amazon home page without any login procedings
        *Home page must load without issue. Access is asserted through page title.

    #2 - User clicks "Elektronik" button on the upper level of the page
        *Electronics page must load without issue. Access is asserted through page title.

    #2.5 - User clicks "Bilgisayarlar, Bileşenleri ve Aksesuarları" button on the left side-menu on the page. (Note: This action does not bring an option where computer tyes can be selected, so it is only considered an extra step to showcase computer components and accessories page.)
        *Computer components and accessories page must load without issue.

    #3 - User hovers over the  "Bilgisayarlar, Bileşenleri ve Aksesuarları" dropdown button on the upper side and clicks "Dizüstü Bilgisayarlar" option in the associated dropdown menu.
        *Laptop computers screen must load without issue. Access is asserted through page title.

    #4 - User chooses "Dell" brand through the brands list in the left-side menu.
        *Dell brand products must be viewable in the main screen. Access is asserted through a unique label after checking the corresponding checkbox.

    #5 - User accesses the "Sorting Criteria" menu on the upper right side of the page and chooses "Highest to Lowest" through the dropdown menu.
        *Products must be listed starting from the highest in the first product (upper leftmostern one) in a descending order. Changing of the sorting criteria to "Highest to Lowest" must be asserted.

    #6 - User chooses a model out of the listed products and clicks on the link of the product with the highest price for that model line.
        *The product model chosen in the main page must be present in the product title in the product page.

    #7 - User adds one item of the asserted product to their cart.
        *Add to cart operation must be asserted by both observing the product count at the cart link go up and product information to be present in the page "add to cart" button takes the user to.

    #8 - User accesses their cart and proceeds to checkout through the cart page.
        *The added product must be once again asserted in the cart page. When non-logged in user proceeds to checkout, they must be accessing the login page in order to continue their checkout. This login page is asserted as the final step.

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
    WHEN: User checks "Dell" option under the "Brands" title on the left-side menu
    THEN: User views products with Dell brand in the product list

    GIVEN: User is in Laptop Computers page
    AND: Dell brand products are being listed
    WHEN: User clicks "Sıralama Ölçütü" on the page
    AND: User clicks "Fiyat: Yüksekten Düşüğe" on the dropdown menu
    THEN: Products in the page are listed in a manner in which their prices are in descending order, starting from product with the highest price

    GIVEN: User is in Laptop Computers page
    AND: Dell brand products are being listed
    AND: Products in the page are listed from highest to lowest
    WHEN: User clicks the image or link of the product with the highest price of a certain model
    THEN: User is taken to the page of that product

    GIVEN: User is in a product's page
    WHEN: User clicks "Sepete Ekle" button corresponding to the product
    AND: The product is in stocks with at least one item
    THEN: User is taken to a "Sepetinize Eklendi" page

    GIVEN: User added a product to their cart
    WHEN: User clicks "Sepete Git" button
    THEN: User is taken to their cart
    AND: The product they added to their cart is visible in the cart

    GIVEN: User is in their cart page
    AND: The product they added to their cart is visible in the cart
    WHEN: User clicks "Alışverişi Tamamla" button
    AND: User is not logged in
    THEN: User is taken to a login screen