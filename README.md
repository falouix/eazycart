EasyCart
EasyCart is a simple e-commerce web application built using native HTML, CSS, and JavaScript (jQuery). The application allows users to view products, add them to their cart, and access login and registration components.

Table of Contents
Project Overview
Features
Setup and Installation
Usage
Directory Structure
Contributing
License
Project Overview
EasyCart is designed to demonstrate basic e-commerce functionalities using a static site setup. It includes product listings, a shopping cart, and user authentication components.

Features
Product Listings: View a list of available products with images, descriptions, and prices.
Shopping Cart: Add products to the cart and view the number of items in the cart.
User Authentication: Navigate to login and registration (inscrit) components.
Setup and Installation
Prerequisites
To run this project locally, you'll need a web browser and a simple HTTP server. For development purposes, you can use a local server to avoid CORS issues with local file access.

Local Server Setup (Optional)
Using Python
If you have Python installed, you can use the built-in HTTP server:

Navigate to your project directory:

bash
Copy code
cd /path/to/your/project
Start the server:

For Python 3:

bash
Copy code
python -m http.server
For Python 2:

bash
Copy code
python -m SimpleHTTPServer
Open your browser and navigate to http://localhost:8000.

Viewing the Project
If you prefer not to use a server, you can still view the project by opening the index.html file in a web browser, though some functionalities (like loading external HTML files) might not work due to browser security restrictions.

Usage
Home Page: Displays a list of products with an option to add them to the cart.
Cart: View the number of items in the cart from the navigation bar.
Login and Registration: Click the "Login" or "Inscrit" buttons to view the respective components.
Directory Structure
bash
Copy code
/project
    /assets
        /css
            styles.css
        /images
            product1.jpg
            product2.jpg
        /js
            main.js
    /components
        login.html
        inscrit.html
    index.html
assets/: Contains CSS, images, and JavaScript files.
components/: Contains the HTML files for login and registration components.
index.html: The main entry point of the application.
Contributing
Contributions are welcome! Please fork the repository and create a pull request for any improvements or bug fixes. For major changes, please open an issue first to discuss what you would like to change.

License
This project is licensed under the MIT License. See the LICENSE file for details.
