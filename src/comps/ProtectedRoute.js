import React, { useContext } from "react"
import { Redirect, Route } from "react-router-dom"
import { AuthContext } from "../comps/context/AuthProvider"

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useContext(AuthContext)
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!!currentUser) {
          return <Component {...props} />
        } else {
          return <Redirect to={"/signIn"} />
        }
      }}
    />
  )
}

export default ProtectedRoute
