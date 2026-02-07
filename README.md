# Simple Storefront

A clean, minimalist e-commerce application built with React and plain CSS.

## Features

- **Product Listing**: Browse products from a static JSON file
- **Shopping Cart**: Add, remove, and update product quantities
- **Responsive Design**: Works seamlessly on mobile and desktop
- **No UI Libraries**: Built with plain CSS Modules only

## Tech Stack

- React 18.3 (Functional Components)
- React Router DOM (Navigation)
- React Context API (State Management)
- CSS Modules (Styling)
- TypeScript
- Vite (Build Tool)

## Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── CartItem.tsx
│   ├── Header.tsx
│   └── ProductCard.tsx
├── pages/           # Page components
│   ├── Cart.tsx
│   ├── ProductListing.tsx
│   └── NotFound.tsx
├── context/         # React Context for state management
│   └── CartContext.tsx
├── data/            # Static data
│   └── products.json
└── styles/          # CSS Modules
    ├── global.css
    ├── Cart.module.css
    ├── CartItem.module.css
    ├── Header.module.css
    ├── ProductCard.module.css
    ├── ProductListing.module.css
    └── NotFound.module.css
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The application will be available at `http://localhost:8080`

## Pages

1. **Product Listing** (`/`) - Displays all available products
2. **Cart** (`/cart`) - Shows items in cart with quantity controls and total price

## State Management

The application uses React Context API to manage global cart state with the following features:

- Add items to cart
- Remove items from cart
- Increase/decrease item quantity
- Calculate total items and price
- Clear entire cart

## License

MIT

- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
