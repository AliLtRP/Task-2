import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Dashboard, Home } from "./pages/Home";
import { Layout } from "./pages/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Layout>
  );
}

export default App;
