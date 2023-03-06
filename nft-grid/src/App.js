import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
