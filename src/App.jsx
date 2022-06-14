import { Route, Redirect } from "react-router-dom";

import MainFooter from "@temp/MainFooter";
import MainHeader from "@temp/MainHeader";
import SignNewsletter from "@temp/SignNewsletter";
import CarrouselFood from "@temp/Carrousel";

import Contact from "@pages/Contact";
import BlogPage from "@pages/BlogPage";
import MessageErrorFood from "@temp/MessageErrorFood";
import Home from "@pages/Home";

import "../public/styles/Global.css";

function App() {
  return (
    <>
      <MainHeader />

      <Route exact path={"/"}>
        <Redirect to={"/home"} />
      </Route>

      <Route path="/contact">
        <Contact />
        <SignNewsletter />
        <CarrouselFood />
      </Route>

      <Route path="/blogListPage">
        <BlogPage />
        <SignNewsletter />
      </Route>

      <Route path="/home">
        <Home />
      </Route>

      <Route path="/recipes">
        <MessageErrorFood />
      </Route>
      <Route path="/aboutUs">
        <MessageErrorFood />
      </Route>

      <MainFooter />
    </>
  );
}

export default App;
