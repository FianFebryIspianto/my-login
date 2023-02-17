import { Link } from "react-router-dom";
import { useState } from "react";
export default function Login() {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setInput({
      ...input,
      [name]: value,
    });
  };
  const handleSumbit = (e) => {
    e.preventDefault();
    const requiredFields = ["email", "password"];

    for (const field of requiredFields) {
      if (!input[field]) {
        console.log(
          `${field.charAt(0).toUpperCase() + field.slice(1)} is required`
        );
        return;
      }
    }
    if (input.password.length < 8) {
      console.log("Password must be 8 characters long");
      return;
    }
    if (!input.email.includes("@")) {
      console.log("Email must be valid");
      return;
    }
    console.log("Login Success");
    console.log("Login Email: ", input.email);
    console.log("Passowrd : ", input.password);
  };
  return (
    <section>
      <div className="form-box">
        <div className="form-value">
          <form onSubmit={handleSumbit}>
            <h3>Login to your Account</h3>
            <div className="input-box">
              <label className="input-label" htmlFor="">
                Email Address
              </label>
              <input
                className="real-input"
                type="email"
                id="email"
                onChange={handleChange}
                value={input.email}
                name="email"
                required="required"
                placeholder="email@example.org"
              />
            </div>
            <div className="input-box">
              <label htmlFor="">Password</label>
              <input
                className="real-input"
                type="password"
                id="password"
                value={input.password}
                onChange={handleChange}
                name="password"
                required="required"
                placeholder="********"
              />
            </div>
            <button
              className="button-submit"
              type="submit"
              onSubmit={handleSumbit}
            >
              Login
            </button>
          </form>
        </div>
      </div>
      <div className="foot-box">
        <h4>
          Don't have an account?{" "}
          <Link to="/register" className="span">
            Register
          </Link>
        </h4>
        <h4>
          Forgotten your password?{" "}
          <Link className="span">Recover Password</Link>
        </h4>
      </div>
    </section>
  );
}
