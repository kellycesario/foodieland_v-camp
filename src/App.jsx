import { Route } from "react-router-dom";

import CarrouselFood from "./components/Carrousel";
import MainFooter from "./components/MainFooter";
import MainHeader from "./components/MainHeader";
import ContactForm from "./components/ContactForm";
import SignNewsletter from "./components/SignNewsletter";
import SearchBlogAndArticle from "./components/SearchBlogAndArticle";

import BlogAndArticle from "./components/BlogAndArticle";

import Contact from "./pages/Contact";
import BlogPage from "./pages/BlogPage";

import "../public/styles/Global.css";

function App() {
  return (
    <>
      <MainHeader />

      <Route path="/contact">
        <Contact />
      </Route>

      <Route path="/blogListPage">
        <BlogAndArticle/>
        <BlogPage />
        <SignNewsletter/>
      </Route>

      <MainFooter />
    </>
  );
}

export default App;
