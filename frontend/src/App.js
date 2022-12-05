import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";

const App = () => {
  return (
    <main className="py-3">
        <Header />
        <Container>
          <Routes>
            <Route path='/' element={<HomeScreen />} exact />
            <Route path='/product/:id' element={<ProductScreen />} exact />
            <Route path='/cart/'>
              <Route path='' element={<CartScreen />} exact />
              <Route path=':id' element={<CartScreen />} exact />
            </Route>
          </Routes>
        </Container>
        <Footer />
      </main>
  );
};

export default App;
