import {useEffect, useState} from 'react';

interface LoginViewState  {
    email: string
    password: string
}

function LoginView() {
    let initialState: LoginViewState = {
        email : "",
        password : ""
    }

    const [state , setState] = useState(initialState)

    const handleChange = (e: any) => {
        const {id , value} = e.target
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }

    const handleSubmitClick = (e: any) => {
        e.preventDefault();
        sendDetailsToServer()    
    }

    const sendDetailsToServer = () => {
        console.log("email", state.email)
        console.log("password", state.password)
        fetch("http://localhost:8080/api/auth/authenticate", {
            method: 'POST',
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            },
            
           // credentials: 'include',
            body: JSON.stringify({
                email: state.email,
                password: state.password,
            })
          })
          .then(res => {
            // Handle response 
            console.log('Response: ', res);
          })
          .catch(err => {
            // Handle error 
            console.log('Error message: ', err);
          });
    }

    
    return (
        <>
            <div className="container">
                <h1 className="h4">Authenticate</h1>
                <div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input required onChange={handleChange} value={state.email} type="email" id="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email"/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input required onChange={handleChange} value={state.password} type="password" id="password" className="form-control" placeholder="Password"/>
                </div>
                <button onClick={handleSubmitClick} className="btn btn-primary">Submit</button>
                </div>
            </div>
        </>
    );
}

export default LoginView;