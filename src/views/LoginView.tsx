import {useEffect, useState} from 'react';



function LoginView() {
    useEffect(() => {
    }, []);
    return (
        <>
            <div className="container">
                <h1 className="h4">Authenticate</h1>
                <div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </div>
        </>
    );
}

export default LoginView;