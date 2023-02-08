import "./styles/App.scss";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route element={<Home />} exact path="/" />
      </Routes>
    </div>
  );
};

export default App;
