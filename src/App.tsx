import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Dashboard, Home } from "./pages/Home";
import { Layout } from "./pages/Layout";
import { RemoveItem, UpdateItem } from "./pages/dashboard/index";
import AddItem from "./pages/dashboard/components/AddItem";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add/item" element={<AddItem />} />
        <Route path="/update/item" element={<UpdateItem />} />
        <Route path="/remove/item" element={<RemoveItem />} />
      </Routes>
    </Layout>
  );
}

export default App;
