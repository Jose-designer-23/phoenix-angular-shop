# 👕 Teslo | Shop 🚀

Welcome to the **Teslo Shop** repository, a modern online clothing store designed to offer a fluid and visually appealing user experience across various platforms!

This full-stack project has been developed using **Angular** for the frontend and **NestJS** for the backend, showcasing comprehensive web development skills, from data management to creating an interactive and responsive user interface.

## ✨ Key Features

### 🛒 User Experience & Navigation (Frontend - Angular)

* **Intuitive Navigation:**
    * **Dynamic Navbar:** Includes a "Teslo | Shop" logo that links to the homepage.
    * **Product Categories:** Easily navigate between "Men", "Women", and "Kids" categories.
    * **Light/Dark Mode:** An integrated `toggle` allows switching between day and night themes, completely adapting the page's aesthetics for comfortable viewing.
    * **Visible Shopping Cart:** A cart icon displays a **green badge** with a white number, indicating the total quantity of products in the cart without needing to enter it.
    * **Fluid Authentication:** A "Login" button to sign in or register. Once authenticated, the navbar displays your username and a "Logout" option.

* **Product Display:**
    * **Attractive Product Cards:** Products are presented on cards with a photo, title, truncated description, and a "View Details" button.
    * **Interactive Hover Effects:** Hovering over cards and buttons triggers elegant color transitions adapted to both light and dark modes, enhancing interaction.
    * **Intelligent Pagination:** At the bottom of each product page, dynamic pagination adjusts to the number of products and the selected gender, optimizing catalog Browse.

* **Product Detail Page:**
    * **Image Carousel:** View multiple photos of the product.
    * **Complete Information:** Title, description, price, and available sizes.
    * **Size and Quantity Selection:** An intuitive selector to choose the desired size before adding to the cart.
    * **Add to Cart Notification:** A `badge alert success` (pop-up) confirms when a product has been added.

* **Shopping Cart Management:**
    * **Detailed Table:** Displays products in the cart with photo, title, size, unit price, quantity, product subtotal, and options to remove items.
    * **Cart Summary:** Shows the total number of products and the total price to pay.
    * **Cart Actions:** Buttons to "Empty Cart" and "Proceed to Checkout".
    * **Important Note:** The "Proceed to Checkout" button is disabled in this demo, as the products are from the Tesla brand, and I do not own the image rights for commercial sale.

### ⚙️ Admin Panel (Frontend - Angular & Backend - NestJS)

* **Restricted Access:** The "Admin Panel" button is only visible if the user has an administrator role.
* **Comprehensive Product Management:**
    * **Product Table:** Displays all products in the store with configurable pagination.
    * **Detailed Information:** Each table row includes photo, title, sizes, price, and inventory.
    * **Inventory Indicator:** A **dynamically colored badge** (`green` for plenty of stock, `yellow` for low stock, `red` for very few units) provides a quick overview of inventory levels.
    * **Product Details (Editing):** A "Details" button in each row allows access to a complete product sheet for editing:
        * Title, slug, description, price, units.
        * Category and available sizes (with colored buttons that change to `outline` when deactivated).
        * Uploading product photos from your computer.
        * "Save" button to apply changes.

### 📱 Responsive Design

* The store features a fully responsive design that adapts perfectly to different screen sizes:
    * **Desktop:** Full navbar, 4 products per row.
    * **Tablets (1279px to 648px):** Navbar with a hamburger menu for categories and user options (if logged in). Products are displayed in 3 or 2 column grids, optimizing space. The cart table transforms into individual cards for better viewing.
    * **Mobiles:** Simplified navbar with a hamburger menu. Products are displayed in a single column. The cart maintains its card-per-product format.

### 🛡️ Security & Validations (Frontend/Backend)

* **User Authentication:** Robust login and registration system.
* **Form Validations:** All forms (login, registration, products) implement client-side validation with regular expressions and Angular's `Validators` class, ensuring data integrity.

## 🛠️ Technologies Used

### Frontend:

* [**Angular**](https://angular.io/) (**v19.2.15**) - Framework for the user interface.
* [**Tailwind CSS**](https://tailwindcss.com/) - CSS framework for rapid and responsive design.
* [**DaisyUI**](https://daisyui.com/) - Component plugin for Tailwind CSS.
* [**Ngx-Translate**](https://github.com/ngx-translate/core) - **Internationalization (i18n)** tool used to offer the application in Spanish (with the capacity to add more languages).
* [**Angular Signals**](https://angular.dev/guide/signals) - For reactive state management of the cart and other UI parts.
* [**@tailwindcss/line-clamp**](https://github.com/tailwindlabs/tailwindcss-line-clamp) - Plugin for truncating text.

### Backend:

* [**NestJS**](https://nestjs.com/) - Progressive Node.js framework for building efficient and scalable APIs.
* **Database:** [**PostgreSQL**](https://www.postgresql.org/) - Robust and open-source relational database management system.

---

## 🙏 Acknowledgments

This project has been developed based on the Angular course taught by [Fernando Herrera](https://www.udemy.com/user/fernando-herrera-udemy/) (Udemy). Building upon this excellent foundation, I have significantly expanded the store with an aesthetic design and more advanced functionalities. The original backend, also developed by Fernando Herrera, has been modified and adapted by me to ensure smooth and robust communication between the database, backend, and frontend.

My gratitude to Fernando Herrera for providing the fundamental knowledge for this development.

---

## 🚀 How to Run the Project

To get **Teslo Shop** up and running, you'll need to execute both the frontend (Angular) and the backend (NestJS).

### Prerequisites

* Node.js (v18 or higher)
* npm or Yarn
* [**PostgreSQL**](https://www.postgresql.org/download/) (or Docker if you're using a PostgreSQL container)

### Steps

1.  **Clone the Frontend Repository:**
    ```bash
    git clone [https://github.com/Jose-designer-23/phoenix-angular-shop.git](https://github.com/Jose-designer-23/phoenix-angular-shop.git)
    cd phoenix-angular-shop
    ```

2.  **Configure and Run the Backend:**
    * Clone the backend repository:
        ```bash
        git clone [https://github.com/Jose-designer-23/nest-teslo-shop.git](https://github.com/Jose-designer-23/nest-teslo-shop.git)
        cd nest-teslo-shop
        ```
    * Install dependencies:
        ```bash
        npm install
        ```
    * **Configure your environment variables:** Create a `.env` file in the backend project root with the necessary configuration for the database and JWT (e.g., `DATABASE_URL=postgresql://user:password@host:port/database`, `JWT_SECRET`, etc. Refer to the backend repository's documentation for more specific NestJS and PostgreSQL details).
    * Start the development server:
        ```bash
        npm run start:dev # or your command to start the development server
        ```
    * Once the backend is running (usually on `http://localhost:3000` by default), you can proceed with the frontend.

3.  **Configure and Run the Frontend:**
    * Ensure you are in the frontend's root directory (if you followed step 1, you should already be in `phoenix-angular-shop`).
    * Install dependencies:
        ```bash
        npm install
        ```
    * Start the Angular application:
        ```bash
        npm start # or ng serve
        ```

4.  **Access the Application:**
    Open your browser and navigate to `http://localhost:4200`.

---

## 💻 Development Commands (Angular CLI)

This section provides a quick reference to the most common Angular CLI commands for frontend development.

* **Start the Development Server:**
    ```bash
    ng serve
    ```
    Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

* **Generate Components, Directives, Services, etc.:**
    Use Angular CLI's powerful code generation tool to create new elements.
    ```bash
    ng generate component component-name
    # Example: ng generate service services/my-service
    # For a complete list of available schematics: ng generate --help
    ```

* **Build the Project for Production:**
    ```bash
    ng build
    ```
    This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

* **Run Unit Tests:**
    ```bash
    ng test
    ```

* **Run End-to-End (E2E) Tests:**
    ```bash
    ng e2e
    ```
    (Note that Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs, such as Cypress or Protractor if still used).
    [Leer este README en Español](README.md)
---
