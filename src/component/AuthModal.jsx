import { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import '../css/AuthModal.css'

function AuthModal({ onClose }) {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="overlay">
      <div className="modal">

        <button
          style={{ float: "right" }}
          onClick={onClose}
        >
          ✖
        </button>

        <h2>{isLogin ? "Login" : "Create Account"}</h2>

        {isLogin ? <LoginForm /> : <SignupForm />}

        <hr />

        {isLogin ? (
          <p>
            Don't have an account?{" "}
            <button onClick={() => setIsLogin(false)}>
              Sign Up
            </button>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <button onClick={() => setIsLogin(true)}>
              Login
            </button>
          </p>
        )}
      </div>
    </div>
  );
}

export default AuthModal;