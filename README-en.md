# 👕 Teslo | Shop 🚀

**Modern online clothing store built with Angular and NestJS, offering a fluid and visually appealing user experience.**

Welcome to the **Teslo | Shop** repository! This Fullstack project has been developed with **Angular** for the frontend and **NestJS** for the backend, showcasing comprehensive skills in web development, from data management to creating an interactive and responsive user interface.

## ✨ Key Features

### 🛒 User Experience and Navigation (Frontend - Angular)

* **Intuitive Navigation:**
    * **Dynamic Navbar:** Includes a "Teslo | Shop" logo that takes you to the homepage.
    * **Product Categories:** Easily navigate between "Men", "Women", and "Kids".
    * **Light/Dark Mode:** An integrated `toggle` allows switching between day and night themes, completely adapting the page's aesthetics for comfortable viewing.
    * **Visible Shopping Cart:** A cart icon displays a **green badge** with a white number, indicating the total quantity of products in the cart without needing to enter it.
    * **Fluid Authentication:** A "Login" button to sign in or register. Once authenticated, the navbar shows your username and a "Logout" option.

* **Product Display:**
    * **Attractive Product Cards:** Products are presented in cards with a photo, title, truncated description, and a "View Details" button.
    * **Interactive Hover Effects:** Hovering over cards and buttons triggers elegant color transitions adapted to both light and dark modes, enhancing interaction.
    * **Smart Pagination:** At the bottom of each product page, dynamic pagination adjusts to the number of products and the selected gender, optimizing catalog navigation.

* **Product Detail Page:**
    * **Image Carousel:** View multiple product photos.
    * **Complete Information:** Title, description, price, and available sizes.
    * **Size and Quantity Selection:** Intuitive selector to choose the desired size before adding to the cart.
    * **Added to Cart Notification:** A `badge alert success` (pop-up) confirms when a product has been added.

* **Shopping Cart Management:**
    * **Detailed Table:** Displays products in the cart with photo, title, size, unit price, quantity, subtotal per product, and options to remove.
    * **Cart Summary:** Shows the total number of products and the total price to pay.
    * **Cart Actions:** Buttons to "Empty cart" and "Proceed to checkout".
    * **Important Note:** The "Proceed to checkout" button is disabled in this demo, as the products feature the Tesla brand, and image rights for commercial sale are not owned.

### ⚙️ Admin Panel (Frontend - Angular & Backend - NestJS)

**Admin Panel Access:**
To access the store's admin panel in a local development environment:

* **Admin User:** Pre-configured administrator user credentials are automatically loaded when running the backend's database **`seed`**.
* **Access Instructions:** Please consult the backend project's `seed` scripts for default username and password, or create a new one by following the backend documentation.

* **Restricted Access:** The "Admin Panel" button is only visible if the user has an administrator role.
* **Comprehensive Product Management:**
    * **Product Table:** Displays all store products with configurable pagination.
    * **Detailed Information:** Each table row includes photo, title, sizes, price, and inventory.
    * **Inventory Indicator:** A **badge with dynamic colors** (green for high stock, yellow for low stock, red for very low stock) provides a quick overview of inventory.
    * **Product Details (Editing):** A "Details" button in each row allows access to a complete product sheet for editing:
        * Title, slug, description, price, units.
        * Category and available sizes (with colored buttons that change to `outline` when deactivated).
        * Uploading product photos from the computer.
        * "Save" button to apply changes.

### 📱 Responsive Design

* The store features a fully responsive design that perfectly adapts to different screen sizes:
    * **Desktop:** Full navbar, 4 products per row.
    * **Tablets (1279px to 648px):** Navbar with a hamburger menu for categories and user options (if logged in). Products are displayed in 3 or 2 column grids, optimizing space. The cart table transforms into individual cards for better viewing.
    * **Mobiles:** Simplified navbar with a hamburger menu. Products are displayed in a single column. The cart maintains its per-product card format.

### 🛡️ Security and Validations (Frontend/Backend)

* **User Authentication:** Robust login and registration system.
* **Form Validation:** All forms (login, registration, products) implement client-side validation with regular expressions and Angular's `Validators` class, ensuring data integrity.

## 🛠️ Technologies Used

### Frontend:

* [**Angular**](https://angular.io/) (**v19.2.15**) - Framework for the user interface.
* [**Tailwind CSS**](https://tailwindcss.com/) - CSS framework for fast and responsive design.
* [**DaisyUI**](https://daisyui.com/) - Tailwind CSS component plugin.
* [**Ngx-Translate**](https://github.com/ngx-translate/core) - **Internationalization (i18n)** tool used to offer the application in Spanish (with the capability to add more languages).
* [**Angular Signals**](https://angular.dev/guide/signals) - For reactive state management of the cart and other UI parts.
* [**@tailwindcss/line-clamp**](https://github.com/tailwindlabs/tailwindcss-line-clamp) - Plugin for truncating text.
* **Swiper** - Library for carousel functionality.
* **RxJS** - For reactive programming and asynchronous data handling.

### Backend:

* [**NestJS**](https://nestjs.com/) - Progressive Node.js framework for building efficient and scalable APIs.
* **Database:** [**PostgreSQL**](https://www.postgresql.org/) - Robust and open-source relational database management system.

---

## 🙏 Acknowledgments

This project has been developed based on the Angular course taught by [Fernando Herrera](https://www.udemy.com/user/fernando-herrera-udemy/) (Udemy). Building upon this excellent foundation, I have significantly expanded the store with an aesthetic design and more advanced functionalities. The original backend, also developed by Fernando Herrera, has been modified and adapted by me to ensure fluid and robust communication between the database, backend, and frontend.

My gratitude to Fernando Herrera for providing the fundamental knowledge for this development.

---

## 🚀 How to Run the Project

To get the **Teslo | Shop** up and running on your local environment, you will need to run both the frontend (Angular) and the backend (NestJS).

### Prerequisites

* Node.js (v18 or higher)
* npm or Yarn
* [**PostgreSQL**](https://www.postgresql.org/download/) (or Docker if you use a PostgreSQL container)

### Steps

1.  **Clone the Frontend repository:**
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
    * **Configure your environment variables:** Create a `.env` file in the root of the backend project with the necessary configuration for the database and JWT (e.g., `DATABASE_URL=postgresql://user:password@host:port/database`, `JWT_SECRET`, etc. Consult the backend repository's documentation for more specific NestJS and PostgreSQL details).
    * Start the development server:
        ```bash
        npm run start:dev # or your command to start the development server
        ```
    * Once the backend is running (usually at `http://localhost:3000` by default), you can proceed with the frontend.

3.  **Configure and Run the Frontend:**
    * Make sure you are in the root directory of the frontend (if you followed step 1, you should already be in `phoenix-angular-shop`).
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
    Use Angular CLI's powerful code generator to create new elements.
    ```bash
    ng generate component component-name
    # Example: ng generate service services/my-service
    # For a complete list of available schematics: ng generate --help
    ```

* **Build the Project for Production:**
    ```bash
    ng build
    ```
    This will compile your project and save the build artifacts in the `dist/` directory. By default, production builds optimize your application for performance and speed.

* **Run Unit Tests:**
    ```bash
    ng test
    ```

* **Run End-to-End (E2E) Tests:**
    ```bash
    ng e2e
    ```
    (Note that Angular CLI does not come with an E2E testing framework by default. You can choose one that suits your needs, such as Cypress or Protractor if still in use).
---
[Leer este README en Español](README.md)
