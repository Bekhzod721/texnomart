import "./App.css";
import Nav from "./components/nav/Nav";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import SwiperModule from "./components/main-slider/Swiper";
import UncontrolledExample from "./components/main-slider/Swiper";
import MainSwiper from "./components/main-swipers/MainSwiper";
import ThirdSwiper from "./components/ThirdSwiper/ThirdSwiper";
import FixPrice from "./components/fix-price/FixPrice";
import NewProducts from "./components/new-products/NewProducts";
import XitSale from "./components/xit-sale/XitSale";
import Collections from "./components/collections/Collections";
import Application from "./components/application/Application";
import CreditPayment from "./components/credit-payment/CreditPayment";
import SeenResently from "./components/seen-resently/SeenResently";
import Footer from "./components/footer/Footer";
import { Route} from "react-router-dom";
import ProductAbout from "./components/pdp";
import { TopContent } from "./components/TopContent/TopContent";
import Login from "./components/login/Login";
function App() {
  return (
    <div>
      <TopContent />
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/product=:id">
        <ProductAbout />
      </Route>
      <Route exact path="/">
        <UncontrolledExample />
        <MainSwiper />
        <ThirdSwiper />
        <FixPrice />
        <NewProducts />
        <XitSale />
        <Collections />
        <Application />
        <CreditPayment />
        <SeenResently />
      </Route>
      <Footer />
    </div>
  );
}

export default App;
