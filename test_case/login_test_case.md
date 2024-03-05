### Test Case Description: Login & Logout Feature

#### Test Case 1: Login with Valid Credentials

- **Description:** This test case verifies that a user can successfully log in using valid credentials.
- **Preconditions:** 
  - The user navigates to the login page of the application.
- **Test Steps:**
  1. Enter 'standard_user' into the username field.
  2. Enter 'secret_sauce' into the password field.
  3. Click on the login button.
- **Expected Result:**
  - The user should be redirected to the inventory page (`/inventory.html`).

#### Test Case 2: Login with Invalid Credentials

- **Description:** This test case verifies that a user cannot log in with invalid credentials.
- **Preconditions:** 
  - The user navigates to the login page of the application.
- **Test Steps:**
  1. Enter 'standard_user' into the username field.
  2. Enter an invalid password into the password field.
  3. Click on the login button.
- **Expected Result:**
  - An error message should be displayed indicating that the username and password do not match any user in the service.

#### Test Case 3: Login with Locked Credentials

- **Description:** This test case verifies that a user cannot log in with locked credentials.
- **Preconditions:** 
  - The user navigates to the login page of the application.
- **Test Steps:**
  1. Enter 'locked_out_user' into the username field.
  2. Enter 'secret_sauce' into the password field.
  3. Click on the login button.
- **Expected Result:**
  - An error message should be displayed indicating that the user has been locked out.

#### Test Case 4: Login with Valid Credentials and Logout

- **Description:** This test case verifies that a user can successfully log in with valid credentials and then logout.
- **Preconditions:** 
  - The user navigates to the login page of the application.
- **Test Steps:**
  1. Enter 'standard_user' into the username field.
  2. Enter 'secret_sauce' into the password field.
  3. Click on the login button.
  4. Click on the menu button.
  5. Click on the logout link.
- **Expected Result:**
  - After logout, the user should be redirected to the login page (`/`).
