import "./App.css";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import BackToTop from "react-back-to-top-button";
import TopButton from "./components/TopArrow";


function App() {
  return (
    <div>
    <Hero/>
    <NavBar />
    <BackToTop children={<TopButton />} />
    <Main />
    <Footer />
    </div>
  );
}

export default App;