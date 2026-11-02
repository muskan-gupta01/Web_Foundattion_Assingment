# Assignment 43 – Validation Test Matrix

## Project: Contact Form

### Objective
To test the contact form and verify that it accepts valid inputs
and displays appropriate error messages for invalid inputs.

## Validation Test Matrix

| Test ID | Test Scenario | Test Input | Expected Result | Status |
|---------|---------------|------------|-----------------|--------|
| TC01 | Submit empty form | All fields empty | Error message should appear | Pass |
| TC02 | Enter valid name | Muskan Gupta | Name should be accepted | Pass |
| TC03 | Enter valid email | muskan@gmail.com | Email should be accepted | Pass |
| TC04 | Enter invalid email | muskan123 | Browser should reject invalid email | Pass |
| TC05 | Enter valid message | Hello, I need help | Message should be accepted | Pass |
| TC06 | Submit all valid fields | Valid name, email and message | Submission summary should appear | Pass |
| TC07 | Enter only name | Other fields empty | Error message should appear | Pass |
| TC08 | Enter only email | Other fields empty | Error message should appear | Pass |
| TC09 | Enter only message | Other fields empty | Error message should appear | Pass |
| TC10 | Enter spaces in fields | Only spaces | Error message should appear | Pass |

## Testing Summary

- Total Test Cases: 10
- Passed: 10
- Failed: 0

## Conclusion

The contact form was tested using different input combinations.
It accepts valid information and prevents submission when required
fields are empty. The form displays a submission summary after
successful validation.