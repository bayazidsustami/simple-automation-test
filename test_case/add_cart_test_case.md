### Test Case Description: Add Cart Feature

#### Test Case 1: Add item to cart

- **Description:** Verify that an item can be added to the cart.
- **Preconditions:** User is logged in and on the inventory page.
- **Steps:**
  1. Click on the "Add to Cart" button for the Sauce Labs Backpack.
- **Expected Result:** The shopping cart badge should display '1'.

#### Test Case 2: Add item to cart and remove cart

- **Description:** Verify that an item can be added to the cart and then removed.
- **Preconditions:** User is logged in and on the inventory page.
- **Steps:**
  1. Click on the "Add to Cart" button for the Sauce Labs Backpack.
  2. Click on the "Remove" button for the Sauce Labs Backpack in the cart.
- **Expected Result:** The shopping cart badge should not be displayed.

#### Test Case 3: Add multiple items to cart
- **Description:** Verify that multiple items can be added to the cart.
- **Preconditions:** User is logged in and on the inventory page.
- **Steps:**
  1. Click on the "Add to Cart" button for the Sauce Labs Backpack.
  2. Click on the "Add to Cart" button for the Sauce Labs Bike Light.
  3. Click on the "Add to Cart" button for the Sauce Labs Bolt T-Shirt.
- **Expected Result:** The shopping cart badge should display '3'.

#### Test Case 4: Sort catalogue from name A to Z

- **Description:** Verify that the catalogue can be sorted from name A to Z.
- **Preconditions:** User is logged in and on the inventory page.
- **Steps:**
  1. Select "Name (A to Z)" from the product sort container.
- **Expected Result:** The first item in the sorted list should be the Sauce Labs Backpack.

#### Test Case 5: Sort catalogue from name Z to A
- **Description:** Verify that the catalogue can be sorted from name Z to A.
- **Preconditions:** User is logged in and on the inventory page.
- **Steps:**
  1. Select "Name (Z to A)" from the product sort container.
- **Expected Result:** The first item in the sorted list should be the Test.allTheThings() T-Shirt (Red).

#### Test Case 6: Sort catalogue from Price (low to high)

- **Description:** Verify that the catalogue can be sorted from price low to high.
- **Preconditions:** User is logged in and on the inventory page.
- **Steps:**
  1. Select "Price (low to high)" from the product sort container.
- **Expected Result:** The first item in the sorted list should be the Sauce Labs Onesie.

#### Test Case 7: Sort catalogue from Price (high to low)
- **Description:** Verify that the catalogue can be sorted from price high to low.
- **Preconditions:** User is logged in and on the inventory page.
- **Steps:**
  1. Select "Price (high to low)" from the product sort container.
- **Expected Result:** The first item in the sorted list should be the Sauce Labs Fleece Jacket.

