import React from "react"
// import { auth } from "../../firebase/config"

const AdminSignIn = () => {
  return (
    <div className="SignIn-wrapper">
      <p>If you are not Vikalp or shashwat please fuck off</p>
      <form className="SignIn-form" id="SignIn">
        <label htmlFor="email">E-mail</label>
        <input type="email" placeholder="email" id="email" required />
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="password" id="password" required />
        <input type="submit" />
      </form>
    </div>
  )
}

export default AdminSignIn
