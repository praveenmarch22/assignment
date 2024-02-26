import "./App.css";
import FirstContainer from "./components/FirstContainer";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MiddleContainer from "./components/MiddleContainer";
import SecondContainer from "./components/SecondContainer";

function App() {
  return (
    <div className="App">
      <Header />
      <FirstContainer />
      <MiddleContainer />
      <SecondContainer />
      <Footer />
    </div>
  );
}

export default App;
