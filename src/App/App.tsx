import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { Layout } from "../Components/Layout";
import { HomePage } from "../Pages/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
