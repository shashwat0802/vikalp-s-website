import React from "react"
// import { auth } from "../../firebase/config"
// import { useHistory } from "react-router-dom"

const AdminSignIn = () => {
  // const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()
    const SignIn = document.querySelector("#SignIn")
    const pass = SignIn["password"].value
    const email = SignIn["email"].value
    console.log(pass)
    console.log(email)
  }

  return (
    <div className="SignIn-wrapper">
      <p>If you are not Vikalp or shashwat please fuck off</p>
      <form className="SignIn-form" id="SignIn" onSubmit={handleSubmit}>
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
