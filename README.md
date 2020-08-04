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

The tax and sales in the 'receipt' component are calculated based on the conditions of the item as described in the exercise document.

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

 1. Create unit and e2e tests
 2. Refactor code
 3. Make sure all calculations for all prices are correct (i.e. sales tax when product costs .01 && < 1)
 4. Think of other edge cases (i.e. with calculations, usage, devices & browsers, network connection)
 5. UI updates (color, icons, text, layout, receipt download)
 6. Backend API setup (.Net Core, SQL, Azure) with _services/* for checkout functionality and users
 7. Add product photo capabilities
 8. Rework enum use
 9. Better category structure (and way to determine amount of tax)
 10. Set up _resolvers/* for cart and receipt
 11. Set up _guards/* for cart and receipt

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
