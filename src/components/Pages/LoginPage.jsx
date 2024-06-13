import { useState } from "react";
import '../../styles/login.css';

export const LoginPage = () => {
  const [formData, setFormData] = useState({ username: '', domain: '', password: '' });

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div className="login-page">
      <div className="login-card-container">
        <form onSubmit={handleSubmit} className="login-form">
          <span className="login-label">Login</span>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
              placeholder="Type your login username"
              className="input-placeholder"
            />
          </div>
          <div>
            <label htmlFor="domain">Domain:</label>
            <input
              type="text"
              id="domain"
              name="domain"
              value={formData.domain}
              onChange={(e) => setFormData({ ...formData, domain: e.target.value })}
              placeholder="Type your login domain"
              className="input-placeholder"
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              placeholder="Type your login password"
              className="input-placeholder"
            />
          </div>
            <span className="forgot-password" style={{textAlign:"left"}}>Forgot Password?</span>
            <div style={{alignItems:"center", display:"flex", flexDirection:"row", marginTop:"20px", marginBottom:"15px"}}>
                <div className="toggle-switch" >
                    <span className="slider"></span>
                </div>
                <span className="single-sign-on">Single Sign on</span>
            </div>
           
          
          <span className="facing-issue" style={{textAlign:"center"}}>Facing issues with login?</span>
          <button className="submit-button" type="submit">Sign in
            <svg style={{marginLeft:"5px"}} width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.8333 9.99999C18.8333 5.39999 15.1 1.66666 10.5 1.66666C5.9 1.66666 2.16667 5.39999 2.16667 9.99999C2.16667 14.6 5.9 18.3333 10.5 18.3333C15.1 18.3333 18.8333 14.6 18.8333 9.99999ZM3.83333 9.99999C3.83333 6.31666 6.81667 3.33332 10.5 3.33332C14.1833 3.33332 17.1667 6.31666 17.1667 9.99999C17.1667 13.6833 14.1833 16.6667 10.5 16.6667C6.81667 16.6667 3.83333 13.6833 3.83333 9.99999ZM13.8333 9.99999L10.5 13.3333L9.325 12.1583L10.6417 10.8333H7.16667V9.16666H10.6417L9.31667 7.84166L10.5 6.66666L13.8333 9.99999Z" fill="#E8E7EB"/>
            </svg>
            </button>
        </form>
       
      </div>
    </div>
  );
};

export default LoginPage

