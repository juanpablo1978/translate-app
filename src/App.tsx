import TranslateComponent from "./components/Translate/TranslateComponent/TranslateComponent";
import WelcomeScreen from "./page/WelcomeScreen/WelcomeScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



const App = () => {
  return (
      <Router>
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/translate" element={<TranslateComponent />} />
      </Routes>
    </Router>

  );
};

export default App;
