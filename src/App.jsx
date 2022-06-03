import { Route } from "react-router-dom";

import MainFooter from "./components/MainFooter";
import MainHeader from "./components/MainHeader";
import SignNewsletter from "./components/SignNewsletter";
import CarrouselFood from "./components/Carrousel";

import Contact from "./pages/Contact";
import BlogPage from "./pages/BlogPage";

import "../public/styles/Global.css";

function App() {
  return (
    <>
      <MainHeader />

      <Route path="/contact">
        <Contact />
        <SignNewsletter />
        <CarrouselFood />
      </Route>

      <Route path="/blogListPage">
        <BlogPage />
        <SignNewsletter />
      </Route>

      <Route path="/">
        <CarrouselFood />
        <SignNewsletter />
      </Route>

      <Route path="/recipes"></Route>
      <Route path="/aboutUs"></Route>

      <MainFooter />
    </>
  );
}

export default App;
