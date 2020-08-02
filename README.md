# Sales Tax Solution

This solution is an MVP for the "Problem Two (Sales Taxes)" exercise.

**NOTE** Please add any bugs, errors, questions, etc. in the solution to the Github 'Issues', and they will be addressed ASAP.

Thank you.

## Notes about solution
  

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.4.

The solution's main dependencies include, but are not limited to:

 - Angular 8
	 - [https://angular.io/docs](https://angular.io/docs)
 - Angular Material
	 - [https://material.angular.io](https://material.angular.io)
 - Ngx-Bootstrap
	 - [https://valor-software.com/ngx-bootstrap](https://valor-software.com/ngx-bootstrap)
 - HTML-to-image
	 - [https://www.npmjs.com/package/html-to-image](https://www.npmjs.com/package/html-to-image)

The solution allows for custom user input to be added in the 'item-options' component. These can be added as 'items' in the 'cart' component.

The items in the 'cart' are reflected in the 'receipt' component.

The tax and sales in the 'receipt' component are calculated based on the conditions of the item as described in the exercise document. Please see 'Questions' section of README for a note on these calculations.

Once a user has input their total 'item' count into the 'cart', they are able to save the receipts information as a PNG.

**NOTE** This solution is an MVP. There is much more needed for production. See ToDo section for brief and current list of what is needed.

### Using the solution:

The solution should be used and operated in the following way according to my understanding of the exercise document:

 1. Allow the user to add their own input using the 'item-options' component
 2. Add the custom inputs as part of the 'cart' component
 3. Remove the custom inputs as part of the 'cart' component
 4. View the changes in the 'receipt' component as a result of additions and subtractions to the 'cart'
 5. Save the receipt as an image (download)

## ToDo

 1. Clarify tax calculations (see 'Questions')
 2. Create unit and e2e tests
 3. Refactor code
 4. Make sure all calculations for all prices are correct (i.e. sales tax when product costs .01 && < 1)
 5. Think of other edge cases (i.e. with calculations, usage, devices & browsers, network connection)
 6. UI updates (color, icons, text, layout, receipt download)
 7. Backend API setup (.Net Core, SQL, Azure)
 8. Add product photo capabilities
 9. Rework enum use
 10. Better category structure (and way to determine amount of tax)

## Clarifications

Clarification is needed on how to appropriately calculate tax on items, specifically in relation to when to round up to the nearest 5th cent. The docs say:

> When calculating prices plus tax, round the total up to the nearest 5 cents. For example, if a taxable item costs $5.60, an exact 10% tax would be $0.56, and the final price after adding the rounded tax of $0.60 should be $6.20.

In the first example of inputs and outputs it says the 'Music CD' price is:

> Music CD: 16.49

The total 'Sales Tax' field is output as:

> Sales Taxes: 1.50

Based on my understanding of the first block quote, the 'Music CD' output should read 16.50. This is because I understand from description that the 'prices plus tax' is what should be rounded up to the nearest 5 cents. In the example, only the total 'Sales Tax' is what is rounded up, and not the individual item's (price + tax) value.

Since the output is the focus of the document, the total sales tax, separate from the item, is what I have rounded up to the nearest 5 cents. Assuming the output is what matters, I have implemented the functionality accordingly.

Changes to this can be made when refactoring the solution to be more elegant and account for any edge cases not covered.

**Question:** Can anyone explain, more in-depth, or in another way I can understand, how and where the sales tax round up is to occur?

## Getting started

Run `npm install` to restore the npm packages used in this project.

After restoring node_modules follow the next steps.

## Development server

Run `ng serve` or `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

If SSL is needed: https://medium.com/@rubenvermeulen/running-angular-cli-over-https-with-a-trusted-certificate-4a0d5f92747a

## Build

Run `ng build` or `npm build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` or `npm build` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` or `npm build` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
