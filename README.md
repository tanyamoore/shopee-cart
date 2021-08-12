# Shopee Cart


<br>
<p align="center">
 <img src="https://i.imgur.com/OESQ8sq.gif"></img>
</p>

<br>

## Requirements
* NodeJS 14.x or higher
* Angular 11.x or higher / Latest AngularJS, VueJS or React
* Github account

## Getting Started
* fork the repository
* create a feature branch `git checkout -b feature/<any-feature-you-want>`
* update this `README` file to include the installation guide
* create a Pull Request to this repository

## Installation
* Create angular app (ng new shopee-cart)
* Create components (ng g c product-list, ng g c product, ng g c cart, ng g c header)
* Create service (ng g s cart)
* Create file width products list
* Create header component with to links, add routing to module, add redirect from main page to product list, create functional for changing tabs, and save result to localStorage
* Create html product list component which will render product component
* Create html for product list in cart component which will render product component
* Create html for product component depending on whether the product is in the cart or not
* Create cart service with methods which can add new product in cart, remove product from cart, get all products in cart, and change products list in localstorage for each method
* Create action for Ngrx store with to actions, increment and decrement, to save counter, which can shows how many products total in cart in header
* Create reducer for Ngrx store which will update state for counter
* In cart service get initial value of counter from store. and put dispatch method, which will call in addproduct - increment and deleteproduct - decrement

## Create Simple Shopping Cart
Please see the Attached `gif` for the Design
* List all the Products
    * Product Name,
    * Description
    * Price of the Product
* On Each Product it should have "Add to Cart" button
* When i click the "Add to Cart" button it should
    * Add to Cart List
    * Increment the quantity of each Product in the Cart List
    * Increment the number of quantity in the header
* List all the Products that you added to the Carts
    * Product Name
    * Description
    * Price of the Product
    * Quantity
* On Each Product in the Cart it should have "Remove from Cart" button
* When I click the "Remove from Cart" button it should
    * Decrement number of quantity of the Product
    * Decrement the total number of quantity in the header
    * When the quantity of each Product become "0" zero it will remove from list


## Notes
* If you have questions and concerns you can create discussion, Go to "Discussion" tab then create New
* Data should only in the client side you can use `localStorage`, `Singleton variable`, or `state management` library
* Don't over Architect it

