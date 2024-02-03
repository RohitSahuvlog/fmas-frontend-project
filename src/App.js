import { Provider } from "react-redux";
import "./App.css";
import EMFContainer from "./components/EMFContainer";
import Navbar from "./components/Navbar";
import appStore from "./components/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div>
      <Provider store={appStore}>
        <BrowserRouter>
          {/* <Navbar /> */}
          <Routes>
            <Route path="/" element={<Dashboard />} />
            {/* <Route path="/emf" element={<EMFContainer />} /> */}
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
