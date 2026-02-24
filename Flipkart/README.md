# Flipkart - React Mini Project

A modern e-commerce application built with React, featuring product browsing, filtering by categories, and product details view. This project uses React Router for navigation and React Bootstrap for styling.

## Features

- **Product Browsing**: Display a list of products fetched from an external API
- **Search Functionality**: Search for products by name
- **Category Filtering**: Filter products by categories (Furniture, Groceries, Fashion, Vehicle)
- **Product Details**: View detailed information about individual products
- **Responsive Navigation**: Fixed navbar with search bar and category links
- **Product Cards**: Clean product display with images and basic information
- **Navigation**: Seamless routing between product list and product details pages

## Tech Stack

- **Frontend Framework**: React 19.2.0
- **Build Tool**: Vite 7.3.1
- **Routing**: React Router DOM 7.13.1
- **UI Framework**: React Bootstrap 2.10.10
- **Styling**: Bootstrap 5.3.8
- **API**: DummyJSON (https://dummyjson.com/)
- **Linting**: ESLint 9.39.1

## Project Structure

```
Flipkart/
├── src/
│   ├── Components/
│   │   ├── Navbar.jsx          # Navigation bar with search and category filters
│   │   └── Productcard.jsx     # Product card component
│   ├── Pages/
│   │   ├── ProductList.jsx     # Main product listing page
│   │   └── ProductDetails.jsx  # Individual product details page
│   ├── Services/
│   │   └── Api.js              # API service for fetching products
│   ├── App.jsx                 # Main app component with routing
│   ├── main.jsx                # Application entry point
│   ├── App.css                 # Application styles
│   └── index.css               # Global styles
├── public/                     # Static assets
├── package.json
├── vite.config.js
├── eslint.config.js
└── index.html
```

## Installation

1. **Clone or navigate to the project directory**:
   ```bash
   cd Flipkart
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

## Running the Project

### Development Server
Start the development server with hot module replacement:
```bash
npm run dev
```
The application will be available at `http://localhost:5173`

### Build for Production
Create an optimized production build:
```bash
npm run build
```

### Preview Production Build
Preview the production build locally:
```bash
npm run preview
```

### Lint Code
Check for code quality issues:
```bash
npm run lint
```

## Component Overview

### Navbar.jsx
- Fixed navigation bar at the top
- Displays Flipkart branding
- Navigation links for categories (Furniture, Groceries, Fashion, Vehicle)
- Search bar with submit functionality
- Props: `onSearch`, `onCategoryChange`

### Productcard.jsx
- Reusable component for displaying individual products
- Shows product image, name, price, and description
- Clickable to navigate to product details

### ProductList.jsx
- Main page displaying products in a grid layout
- Fetches products from the API on mount
- Filters products based on selected category
- Filters products based on search query
- Props: `search`, `category`

### ProductDetails.jsx
- Displays detailed information about a selected product
- Fetches product data by ID from the API
- Shows full product specifications and pricing

### API Service (Api.js)
- `fetchProducts()`: Fetches all products from DummyJSON API
- `fetchProductById(id)`: Fetches a specific product by ID

## How to Use

1. **Browse Products**: The home page displays all available products
2. **Search**: Use the search bar to find products by name
3. **Filter by Category**: Click on category links (Furniture, Groceries, Fashion, Vehicle) to filter products
4. **View Details**: Click on any product to view its full details
5. **Return to List**: Click the Flipkart link in the navbar to return to the product list

## Key Functionality

- **State Management**: Uses React hooks (useState) for managing search and category filters
- **Routing**: React Router manages navigation between ProductList and ProductDetails pages
- **Data Fetching**: Products are fetched from the DummyJSON API with error handling
- **Responsive Design**: Bootstrap ensures the app works well on different screen sizes

## Future Enhancements

- Add shopping cart functionality
- Implement user authentication
- Add product ratings and reviews
- Implement pagination or infinite scrolling
- Add filters for price range
- Implement wishlist feature
- Add checkout process

## License

This project is provided as-is for learning and development purposes.
