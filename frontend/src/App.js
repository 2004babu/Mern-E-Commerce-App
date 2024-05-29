import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ToastContainer } from 'react-toastify';
import ProductDetail from "./components/product/ProductDetail";
import ProductSearch from "./components/product/Productsearch";
function App() {
  return (
    <Router>
      <div className="App">
        <HelmetProvider>
          <Header />
          <ToastContainer theme="dark"/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search/:keyword" element={<ProductSearch />} />
                <Route path="/products/:id" element={<ProductDetail />} />
            </Routes>
          <Footer />
        </HelmetProvider>
      </div>
    </Router>
  );
}

export default App;
