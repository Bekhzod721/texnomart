import { useState } from "react";
import "./login.css";
import { auth, provider } from "../../components/firebase/config";
import { Link, useHistory } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const loginUser = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        if (response) {
          history.push("/explorenow");
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const loginWithGoogle = () => {
    auth
      .signInWithPopup(provider)
      .then((response) => console.log(response))
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="container">
      <div className="login">
        <Link className="home__link" to="/">
          HOME
        </Link>
        <form className="login__form" onSubmit={loginUser}>
          <input
            className="login__input"
            placeholder="Email"
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="login__input"
            placeholder="Password"
            type="password"
            required
            minLength={8}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="loginnn__btn" type="submit">
            Login
          </button>
        </form>
        <button className="login__withGoogle" onClick={loginWithGoogle}>
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
