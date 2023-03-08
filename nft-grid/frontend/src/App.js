import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import CollectionPage from "./pages/CollectionPage/CollectionPage";
import { ThemeProvider } from "@mui/material/styles";

import theme from "./theme/theme";

import "./App.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Routes>
          <Route path="/collection/:collectionId" element={<CollectionPage />}></Route>
          <Route path="/Main" element={<MainPage />}></Route>
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
