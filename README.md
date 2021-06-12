# Node MongoDB REST API

## Auth Routes

- `signup`: create new user
    - set user property emailVerified to false
    - sends email to confirm Account
- `confirmAccount`: confirms account with token
- `login`: login user
    - sends back JWT token