import Navbar from "./components/homepage/Navbar";
import Hero from "./components/homepage/Hero";
import About from "./components/homepage/About";
import Domain from "./components/homepage/Domain";
import Footer from "./components/homepage/Footer";
import SignIn from "./components/SignIn/SignIn"
import SignUp from "./components/SignUp/SignUp"

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Domain />
      <Footer />
      <SignUp />
      <SignIn />
    </>
  );
};

export default App;
