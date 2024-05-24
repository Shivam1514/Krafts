import { useState } from "react";
import "../styles/account.css";
import PagesHeader from "../components/PagesHeader.jsx";
import Footer from "../components/Footer.jsx";
import BottomBar from "../components/BottomBar.jsx";
import axios from "axios";

function Account() {
  const [animationKey, setAnimationKey] = useState(0);
  const [custName, setcustName] = useState("");
  const [custPassword, setCustPassword] = useState("");
  const [email, setEmail] = useState("");
  const [custNameValid, setcustNameValid] = useState(true);
  const [custPasswordValid, setcustPasswordValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isLogin, setIsLogin] = useState(true); // New state to toggle between login and register

  function triggerAnimation() {
    setAnimationKey((prevKey) => prevKey + 1);
  }

  function validateForm() {
    console.log("Validating form...");
    let isValid = true;

    if (!custName.trim() && !isLogin) { // Only validate custName if registering
      setcustNameValid(false);
      isValid = false;
    } else {
      setcustNameValid(true);
    }

    if (!custPassword.trim()) {
      setcustPasswordValid(false);
      isValid = false;
    } else {
      setcustPasswordValid(true);
    }

    if (!email.trim() || !email.includes("@")) {
      setEmailValid(false);
      isValid = false;
    } else {
      setEmailValid(true);
    }

    if (!isValid) {
      triggerAnimation();
    }

    return isValid;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (validateForm()) {
      try {
        if (isLogin) {
          // Handle login
          const response = await axios.post("http://localhost:5000/api/auth/login", { email, password: custPassword });
          console.log(response.data);
        } else {
          // Handle registration
          const response = await axios.post("http://localhost:5000/api/auth/register", { name: custName, email, password: custPassword });
          console.log(response.data);
        }
        setFormSubmitted(true);
      } catch (error) {
        console.error(error.response.data);
        setFormSubmitted(false);
      }
    } else {
      setFormSubmitted(false);
    }
  }

  return (
    <div className="account-container">
      <PagesHeader />

      <form onSubmit={handleSubmit} className="contact-form">
        {!isLogin && (
          <input
            id="custname"
            key={`custName-${animationKey}`}
            type="text"
            name="custname"
            className={custNameValid ? "" : "contact-error-input"}
            value={custName}
            onChange={(e) => setcustName(e.target.value)}
            autoComplete="name"
            placeholder="Your Name"
          />
        )}

        <input
          id="email"
          key={`email-${animationKey}`}
          type="email"
          name="email"
          className={emailValid ? "" : "contact-error-input"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          placeholder="Email"
        />

        <input
          id="custpassword"
          key={`custPassword-${animationKey}`}
          type="password"
          name="custpassword"
          className={custPasswordValid ? "" : "contact-error-input"}
          value={custPassword}
          onChange={(e) => setCustPassword(e.target.value)}
          placeholder="Password"
        />

        <input type="submit" value={isLogin ? "Login" : "Register"} />
        {formSubmitted && (
          <span className={`thanks ${formSubmitted ? "visible" : ""}`}>
            {isLogin ? `Welcome back, ${custName}` : "Registration successful"}
          </span>
        )}
      </form>

      <button className="LoginForm" onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Don't have an account? Register" : "Already have an account? Login"}
      </button>

      <Footer />
      <BottomBar />
    </div>
  );
}

export default Account;
