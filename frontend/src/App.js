import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ToastContainer } from 'react-toastify';
import ProductDetail from "./components/product/ProductDetail";
import ProductSearch from "./components/product/Productsearch";
import Login from "./components/user/Login";
import Register from "./components/user/Register";
import store from "./store";
import axios from "axios";
import { loadUser } from "./actions/userActions";
import { useEffect } from "react";
 async function App() {
  // const [stripeApiKey, setStripeApiKey] = useState("")
  // useEffect(() => {
    // store.dispatch(loadUser)
    // async function getStripeApiKey(){
    //   const {data} = await axios.get('/api/v1/stripeapi')
    //   setStripeApiKey(data.stripeApiKey)
    // }
    // getStripeApiKey()
  // },[])

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
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
          <Footer />
        </HelmetProvider>
      </div>
    </Router>
  );
}

export default App;
