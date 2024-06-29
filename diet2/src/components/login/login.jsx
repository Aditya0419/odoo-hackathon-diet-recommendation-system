import "./login.css";
import LoginForm from "./loginForm";
import LoginShowcase from "./loginShowcase";
import Navbar from "../Navbar/Navbar.jsx"

export default function Login() {
  return (
    <>
        <Navbar />
      <div className="login-container">
        <LoginShowcase />
        <LoginForm />
      </div>
      
    </>
  );
}
