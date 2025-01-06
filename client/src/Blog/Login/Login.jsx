import React from 'react';
import "./Login.css";
function Login() {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: '100vh', backgroundColor: '#f8f9fa' }}
    >
      <div className="card p-5 formbg rounded-5 border-0" style={{ width: '400px', borderRadius: '10px' }}>
        <h3 className="text-center text-light">Login</h3>
        <h1 className="text-center mb-4 loginhead py-2" style={{ fontSize: '1.5rem' }}>
          Welcome to Oviya Medsafe
        </h1>
        <form>
          <div className="mb-3">
            <label className="form-label text-light">Email Id</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter Email Id"
              required/>
          </div>
          <div className="mb-3">
            <label className="form-label text-light">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter Password"
              required/>
          </div>
          <div className="text-center">
  <input
    type="button"
    className="btn bloglogin mt-2"
    value="Login"
  />
</div>

        </form>
      </div>
    </div>
  );
}

export default Login;
