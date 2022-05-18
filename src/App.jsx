
import CarrouselFood from './components/carrousel'
import "../public/styles/Global.css";
import MainFooter from './components/MainFooter'
import MainHeader from "./components/header";
import ContactForm from "./components/ContactForm";
import SignNewsletter from "./components/SignNewsletter";

function App() {
  return (
    <>
      <MainHeader />
      <ContactForm />
      <SignNewsletter />
      <CarrouselFood/>
      <MainFooter/>
    </>
  );
}

export default App;