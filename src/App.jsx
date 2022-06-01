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

// Temp
import MainButton from "./components/MainButton";
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
      <MainButton Color="dark" Content="Submit" />
      <MainButton Color="dark" Content="Search" />
      <MainButton Color="dark" Content="Newsletter" />

      <MainButton Color="light" Content="Large Test" Size={"large tiny"} />

      <div style={{ display: "flex", gap:"5px" }}>
        <MainButton Color="dark" Size="tiny" Content="1" />
        <MainButton Color="light" Size="tiny" Content="2" />
        <MainButton Color="light" Size="tiny" Content="3" />
        <MainButton Color="light" Size="tiny" Content="4" />
        <MainButton Color="light" Size="tiny" Content="5" />
      </div>

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
