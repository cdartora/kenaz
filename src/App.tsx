import { HashRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";

export function App() {
  return (
    <Routes>
      <Route path={"/" + "raiz"} element={<Home />} />
    </Routes>
  );
}

function WrappedApp() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}

export default WrappedApp;
