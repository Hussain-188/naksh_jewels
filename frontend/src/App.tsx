import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import ProductListing from './pages/ProductListing';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import './styles/global.css';

const App = () => (
  <CartProvider>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ProductListing />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </CartProvider>
);

export default App;
