import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// styles
import "./App.css";
// hooks
import { useAuthContext } from "./hooks/useAuthContext";

// pages
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/login/Login";
import NotFound from "./pages/notFound/NotFound";
import Register from "./pages/register/Register";
import Create from "./pages/create/Create";
import Project from "./pages/project/Project";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import OnlineUsers from "./components/sidebar/OnlineUsers";

//known issues
// -nav and sidebar are not interacting well

function App() {
  const { user, authIsReady } = useAuthContext();
  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          {user && <Sidebar />}
          <div className="container">
            <Navbar />
            <div className="display">
              <Routes>
                <Route
                  exact
                  path="/"
                  element={user ? <Dashboard /> : <Navigate to="/login" />}
                />
                <Route
                  path="/create"
                  element={user ? <Create /> : <Navigate to="/login" />}
                />
                <Route
                  path="/projects/:id"
                  element={user ? <Project /> : <Navigate to="/login" />}
                />
                <Route
                  path="/login"
                  element={!user ? <Login /> : <Navigate to="/" />}
                />
                <Route
                  path="/register"
                  element={!user ? <Register /> : <Navigate to="/" />}
                />
                <Route path="*" element={<NotFound />} />
              </Routes>
              {user && <OnlineUsers />}
            </div>
          </div>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
