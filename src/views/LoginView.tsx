import { KeyboardEvent, useEffect, useState } from "react";
import { defaultHost } from "../domain/Constants";

interface LoginViewState {
  email: string;
  password: string;
}

function LoginView() {
  let initialState: LoginViewState = {
    email: "",
    password: "",
  };

  const [state, setState] = useState(initialState);

  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmitClick = (e: any) => {
    e.preventDefault();
    sendDetailsToServer();
  };

  const handleKeyPress = (e: KeyboardEvent) => {
    e.preventDefault();
    if (e.key === "Enter") {
      sendDetailsToServer();
    }
  };

  const sendDetailsToServer = () => {
    const host = process.env.REACT_APP_BACKEND_URL ?? defaultHost
    fetch(`${host}/api/auth/authenticate`, {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },

      credentials: "include",
      body: JSON.stringify({
        email: state.email,
        password: state.password,
      }),
    })
      .then((res) => {
        console.log("Response: ", res);
        document.location = "/";
      })
      .catch((err) => {
        console.log("Error message: ", err);
      });
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col p-5">
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>

              <div className="input-group flex-nowrap">
                <span
                  className="input-group-text text-white bg-black"
                  id="addon-wrapping"
                >
                  @
                </span>
                <input
                  required
                  onChange={handleChange}
                  value={state.email}
                  type="email"
                  id="email"
                  className="form-control  text-white bg-black"
                  aria-describedby="emailHelp"
                  placeholder="Please enter your e-mail address"
                />
              </div>
            </div>
            <div className="form-group mt-4">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                required
                onChange={handleChange}
                value={state.password}
                type="password"
                id="password"
                className="form-control text-white bg-black"
                placeholder="Please enter your password"
                onKeyUp={handleKeyPress}
              />
            </div>
            <button
              onClick={handleSubmitClick}
              className="btn btn-success mt-4"
            >
              Authenticate
            </button>
          </div>
          <div className="col p-5">
            <figure className="figure">
              <img
                src="https://res.cloudinary.com/dehs6irlh/image/upload/c_scale,w_256/v1640818163/Github/Warehouse-PNG-Photos_jcaebq.png"
                className="figure-img img-fluid rounded"
                alt="Forklift"
              />
            </figure>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginView;
