import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";
import { ProductScreen } from "./screens/ProductScreen";
const App = () => {
  return (
    <main className="py-3">
        <Header />
        <Container>
          <Routes>
            <Route path='/' element={<HomeScreen />} exact />
            <Route path='/product/:id' element={<ProductScreen />} exact />

          </Routes>
        </Container>
        <Footer />
      </main>
  );
};

export default App;
