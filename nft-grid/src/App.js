import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import CollectionPage from "./pages/CollectionPage/CollectionPage";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/collection/:collectionId" element={<CollectionPage />}></Route>
        <Route path="/" element={<MainPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
