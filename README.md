Project Overview:
This project is a product-based e-commerce web application, built using React and Redux for state management. The app allows users to browse through a catalog of products, add them to a cart, mark items as favorites, and view detailed information about individual products.

Features:
1. Product Catalog:
    Displays a list of products categorized into phones, tablets, and accessories.
    Each product includes basic details such as name, price, image, and availability.
    Users can sort products by various criteria such as price, year, and new arrivals.
  
2. Product Pages:
    Users can click on individual products to view a detailed page with further information, including specifications, images, and other related details.
    A slider is used to showcase images of the product.
    Users can see detailed information like product description, technical specifications, and more.

3. Search Functionality:
  The app includes a search bar that allows users to filter products based on keywords.
  The search is debounced to avoid unnecessary requests and improve performance.

4. Cart & Favorites:
  Users can add products to their shopping cart and select quantities.
  Items can be added to or removed from the favorites list.
  The app maintains cart and favorites data locally using localStorage.

5. Responsive Layout:
  The application is responsive, with different layouts for desktop, tablet, and mobile views. The grid system and card components adjust based on screen size.

6. State Management:
  Redux is used to manage global state, including products, cart items, favorites, and the selected product.
  The createAsyncThunk is used for handling asynchronous operations like fetching products from the API.

7. Routing:
  The app uses React Router to manage navigation between pages.
  Routes include product categories (phones, tablets, accessories), a product details page, and user pages like the cart and favorites page.

8. Error Handling:
  The application provides error handling to display messages when data cannot be fetched or a product is not found.


Technologies Used:
1. Frontend:
  React for building the user interface.
  Redux Toolkit for state management.
  React Router for routing and navigation.
  Tailwind CSS for styling.

2. Backend:
  The application fetches product data from a JSON API (simulated with api/*.json files).


File Structure:
  api: Contains functions to fetch product data from the server.
  features: Contains Redux slice files for managing products, cart, favorites, etc.
  components: Reusable UI components like Card, ImageSlider, ProductDetails, and more.
  pages: Contains different page components such as HomePage, PhonesPage, ProductPage, etc.
  utils: Contains utility functions such as getSearchWith.


Detailed Workflow:
1. Data Fetching:
    The app fetches data from an API for products, and then processes it to display different sections like brand new products, hot prices, and specific categories (phones, tablets, accessories).

2. User Interaction:
    Users can interact with the products by adding them to the cart or marking them as favorites.
    The cart items are stored with their respective quantities, and users can update the quantity or remove items from the cart.

3. Product Details:
    Each product has its own detail page showing images, description, and other information. It also provides an option to go back to the previous page or browse similar items.

4. Cart & Favorites State:
    The state for the cart and favorites is handled via Redux, and it is synced with localStorage to persist data across sessions.

5. Responsive Design:
    Tailwind CSS is used to create a flexible, responsive layout that adjusts to different screen sizes.


Link to preview: https://oskushnir.github.io/react-phone-catalog

Link to maket: https://www.figma.com/design/xMK2Dy0mfBbJJSNctmOuLW/Phone-catalog-(V2)-Rounded-Style-1?node-id=0-1&node-type=canvas&t=YrkjFCZLQRbBHFxl-0
