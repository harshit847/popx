import { Routes, Route } from "react-router-dom"
import Account from './components/account/account';
import Home from './components/home/home';
import Login from './components/login/login';
import Register from './components/register/register';
import { AuthProvider } from "./components/authController/AuthContext";
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/account" element={<Account />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
