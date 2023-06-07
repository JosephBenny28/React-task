## Product List

Product List is a React application that displays a list of products with various filtering options. Users can search for products by name, filter them by maximum price, and select their availability status.

# Features

1. Search by name: Users can enter a product name in the search field to filter the list based on the matching products.
2. Filter by maximum price: Users can specify a maximum price to filter the products and only display those with a price lower than or equal to the specified value.
3. Filter by availability: Users can select the availability status (available or not available) to filter the products based on their stock status.
4. Responsive layout: The application is designed to be responsive and provide an optimal user experience across different devices and screen sizes.

# Getting Started

To run the Product List application, follow these steps:

1. Install the dependencies:
   npm install

2. Start the development server:
   npm start

3. Open your browser and visit http://localhost:3000 to access the application.

# Project Structure

The project structure is organized as follows:

    src/: Contains the main source code files.
        components/: Contains reusable UI components used in the application.
        Logo/: Contains the images of the product logos.
        Productdata.js: Contains the data array of products used in the application.
        App.js: The main component that renders the Product List application.
        index.js: The entry point of the application.

# Dependencies

The following dependencies are used in the Product List application:

1.  @react-bootstrap: Bootstrap library for UI components.
2.  react-select: Customizable select component for React.
3.  @react-bootstrap-icons: Bootstrap-UI icons library