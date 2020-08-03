import React, { useCallback, useContext } from "react"
import { auth } from "../../firebase/config"
import { Redirect } from "react-router-dom"
import { AuthContext } from "../context/AuthProvider"

const AdminSignIn = ({ history }) => {
  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault()
      const SignIn = document.querySelector("#SignIn")
      const pass = SignIn["password"].value
      const email = SignIn["email"].value
      try {
        await auth.signInWithEmailAndPassword(email, pass)
        history.push("/admin")
      } catch (error) {
        console.log(error)
      }
    },
    [history]
  )

  const { currentUser } = useContext(AuthContext)
  if (currentUser) {
    return <Redirect to="/admin" />
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
