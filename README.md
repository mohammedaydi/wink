![wink](https://github.com/mohammedaydi/wink/blob/main/assets/wink.png)

# About wink
wink is an **e-commerce website** that provides alot of products with suitable prices, in it you can browse many of featured products, view their details, add them to your cart and simply buy them by providing your address and payment details.


# Features
- View all products.
- Filter the products list based on category and name.
- Check product's details.
- Sign in and management of user's data.
- Cart that you can add products to.
- Checkout process.

# Technologies
- Javascript
- CSS
- HTML
- fakestoreapi [https://fakestoreapi.com/docs](https://fakestoreapi.com/docs)

# App Overview

## Approach
This application follows the SPA approach and is designed to work on all devices with highly responsive view, so the project includes a state manager file which is responsible for re-rendering the page upon user's interactions.

## Walkthrough
- As the user enters the website the main page opens, it includes the navbar which through it the user can access the different sections in the page, and the header which demonstartes the app and gives a brief information about it.
  
- Also the user has access to the products' list in the main page, the user can add products to his/her cart and view its contents, by accessing it from the navbar.
  
- In the cart the user can modify the quantity, remove a product and view the price and the total price, note that the shipping is free.

- By accessing the cart the user can complete the checkout process by clicking the checkout button on the bottom of the page, however the user should be logged in to be able to proceed.

- The user can login to the system by clicking on login in the navbar, a new page opens where the user enter the email and password and clicks login.
  
- When the user clicks on checkout, a new page opens containing a short form to collect the shipping data like the address and name, communicaton data, and finally the card' info, the after clicking done the order will be placed.
