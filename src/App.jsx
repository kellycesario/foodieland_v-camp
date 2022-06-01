import { Route } from "react-router-dom";

import CarrouselFood from "./components/Carrousel";
import MainFooter from "./components/MainFooter";
import MainHeader from "./components/MainHeader";
import ContactForm from "./components/ContactForm";
import SignNewsletter from "./components/SignNewsletter";

import BlogAndArticle from "./components/BlogAndArticle";

import Contact from "./pages/Contact";
import BlogPage from "./pages/BlogPage";

// Temp
import Button from "./components/Button/Button";
// Temp

import "../public/styles/Global.css";

function App() {
  return (
    <>
      {/* <MainHeader />

      <Route path="/contact">
        <Contact />
      </Route>

      <Route path="/blogListPage">
        <BlogAndArticle/>
        <BlogPage />
        <SignNewsletter/>
      </Route>

      <MainFooter /> */}
      <Button InsideInput='true' Content="Submit" />
      {/* 
    btnSize         = default/large
    btnColor        = default/light
    btnInsideInput  = true/false
    btnMinimal      = true/false
    content         = string
    */}
    </>
  );
}

export default App;
