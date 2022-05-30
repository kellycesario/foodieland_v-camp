import { Route } from "react-router-dom";

import CarrouselFood from "./components/Carrousel";
import MainFooter from "./components/MainFooter";
import MainHeader from "./components/Header";
import ContactForm from "./components/ContactForm";
import SignNewsletter from "./components/SignNewsletter";

import "../public/styles/Global.css";

function App() {
  return (
    <>
      <MainHeader />

        <Route path="/">
          <ContactForm />
          <SignNewsletter />
          <CarrouselFood />
        </Route>

        <Route path="/blogListPage">

        </Route>

      <MainFooter />
    </>
  );
}

export default App;
