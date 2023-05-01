import { BrowserRouter, Routes, Route } from "react-router-dom";
// styles
import "./App.css";
// icons
import activity from "./assets/activity_icon.svg";
import home from "./assets/temple.svg";
import dash from "./assets/dashboard_icon.svg";
import add from "./assets/add_icon.svg";

// pages
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/login/Login";
import NotFound from "./pages/notFound/NotFound";
import Register from "./pages/register/Register";
import Create from "./pages/create/Create";
import Project from "./pages/project/Project";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
      <div className="container">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create" element={<Create />} />
          <Route path="/project/:id" element={<Project />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
