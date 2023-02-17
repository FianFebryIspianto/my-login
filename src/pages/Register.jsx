import { Link } from "react-router-dom";
import { useState } from "react";
export default function Register() {
  const [inputRegister, setInputRegister] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setInputRegister({
      ...inputRegister,
      [name]: value,
    });
  };
  const handleSumbit = (e) => {
    e.preventDefault();
    const requiredFields = ["firstName", "lastName", "email", "password"];

    for (const field of requiredFields) {
      if (!inputRegister[field]) {
        console.log(
          `${field.charAt(0).toUpperCase() + field.slice(1)} is required`
        );
        return;
      }
    }

    if (inputRegister.password.length < 8) {
      console.log("Password must be 8 characters long");
      return;
    }

    if (!inputRegister.email.includes("@")) {
      console.log("Email must be valid");
      return;
    }
    console.log(inputRegister);
    console.log("Register Success");
  };
  return (
    <section>
      <div className="form-box">
        <div className="form-value">
          <form action="" onSubmit={handleSumbit}>
            <h3>Create Your Account</h3>
            <div className="input-box">
              <label className="input-label" htmlFor="">
                First Name
              </label>
              <input
                className="real-input"
                type="text"
                name="firstName"
                required="required"
                placeholder="joko"
                onChange={handleChange}
              />
            </div>
            <div className="input-box">
              <label className="input-label" htmlFor="">
                Last Name
              </label>
              <input
                className="real-input"
                type="text"
                name="lastName"
                required="required"
                placeholder="sidiq"
                onChange={handleChange}
              />
            </div>
            <div className="input-box">
              <label className="input-label" htmlFor="">
                Email Address
              </label>
              <input
                className="real-input"
                type="email"
                name="email"
                required="required"
                placeholder="email@example.org"
                onChange={handleChange}
              />
            </div>
            <div className="input-box">
              <label htmlFor="">Password</label>
              <input
                className="real-input"
                type="password"
                name="password"
                required="required"
                placeholder="********"
                onChange={handleChange}
              />
            </div>
            <button
              className="button-submit"
              type="submit"
              onSubmit={handleSumbit}
            >
              Register
            </button>
          </form>
        </div>
      </div>
      <div className="foot-box">
        <h4>
          Already Have an account?{" "}
          <Link to="/" className="span">
            Login
          </Link>
        </h4>
      </div>
    </section>
  );
}
