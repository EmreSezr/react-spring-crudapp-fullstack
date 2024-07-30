import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddUser from "./users/AddUser";
import EditUser from "./users/EditUser";
import ViewUser from "./users/ViewUser";
import { Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          {/* Ana sayfaya gelen talepleri /users rotasına yönlendir */}
          <Route path="/" element={<Navigate to="/users" />} />
          <Route exact path="/users" element={<Home />} />
          <Route exact path="/addUser" element={<AddUser />} />
          <Route exact path="/editUser/:id" element={<EditUser />} />
          <Route exact path="/viewUser/:id" element={<ViewUser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
