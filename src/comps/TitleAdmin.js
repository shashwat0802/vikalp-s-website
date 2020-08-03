import React from "react"
import { Link } from "react-router-dom"
import { auth } from "../firebase/config"
import { useHistory } from "react-router-dom"

const TitleAdmin = () => {
  const history = useHistory()

  const linkStyle = {
    textDecoration: "none",
    color: "rgba(0,0,0,0.5)",
    position: "absolute",
    right: "0",
    padding: "5px",
    margin: "0 15px",
    border: "1px solid #d3d3d3",
    borderRadius: "5px",
  }

  const handleSignOut = () => {
    auth.signOut()
    history.push("/")
  }

  return (
    <div className="title">
      <Link to="/" style={linkStyle} onClick={handleSignOut}>
        logout
      </Link>
      <h1>Vikalp Kumar</h1>
      <h2>Add Pictures</h2>
      <p>Visual Stories</p>
      <p>
        welcome to my uncluttered,uncollected and chaotic world of random
        moments that i capture
      </p>
    </div>
  )
}

export default TitleAdmin
