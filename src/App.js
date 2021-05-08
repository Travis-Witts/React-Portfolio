import "./App.css";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import BackToTop from "./components/BackToTop"
import Main from "./components/Main"


function App() {
  return (
    <div>
    <Hero/>
    <NavBar />
    <BackToTop />
    <Main />
    </div>
  );
}

export default App;