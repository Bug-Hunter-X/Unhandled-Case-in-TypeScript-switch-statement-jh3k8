# Unhandled Case in TypeScript switch statement

This repository contains a TypeScript function `calculateArea` that demonstrates an uncommon error: an unhandled case in a `switch` statement.  The function calculates the area of a rectangle or triangle. However, if an invalid shape is provided, it throws a generic error. This is not ideal for user-friendly error handling. The solution demonstrates improved error handling.

## Bug

The bug lies in the `default` case of the `switch` statement.  A more robust approach is needed to handle invalid input and provide more specific error messages.