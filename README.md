# Product Listing and Details Page

This project is a Next.js application that includes a product listing page and a product details page with features such as server-side rendering (SSR), search, sort, and dynamic product data fetching using an external API.

---

## Features

- **Server-Side Rendering (SSR)**: Ensures better SEO and performance.
- **Product Listing**: Displays a grid of products fetched dynamically.
- **Product Details**: Provides detailed information for each product.
- **Search**: Filter products by name.
- **Sort**: Sort products by price (low to high or high to low).
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop screens.

---

## Prerequisites

Before running the project locally, make sure you have the following installed:

- **Node.js**: [Download Here](https://nodejs.org/)
- **npm** or **yarn**: Comes with Node.js

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/rakesh-kumar-18/shopiq-ecommerce.git
```

### 2. Navigate to the Project Directory

```bash
cd shopiq-ecommerce
```

### 3. Install Dependencies

Install the required packages by running:

```bash
npm install
# or
yarn install
```

### 4. Start the Development Server

Run the development server with the following command:

```bash
npm run dev
# or
yarn dev
```

### 5. Open the Application in Your Browser

After starting the server, open your browser and navigate to:

```
http://localhost:3000
```

---

## API Usage

This project uses the [DummyJSON API](https://dummyjson.com/products) for fetching product data.

- **Product Listing Endpoint**: `https://dummyjson.com/products`
- **Product Details Endpoint**: `https://dummyjson.com/products/{id}`