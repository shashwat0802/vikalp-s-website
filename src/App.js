import React, { useState } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Title from "./comps/Title"
import AuthProvider from "./comps/context/AuthProvider"
import ImageGrid from "./comps/ImageGrid"
import Modal from "./comps/Modal"
import AdminPage from "./comps/pages/AdminPage"
import AdminSignIn from "./comps/pages/AdminSignIn"
import ProtectedRoute from "./comps/ProtectedRoute"
// import { auth } from "./firebase/config"

function App() {
  const [selectedImg, setSelectedImg] = useState(null)

  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Route
            exact
            path="/"
            render={(props) => (
              <React.Fragment>
                <Title />
                <ImageGrid setSelectedImg={setSelectedImg} />
                {selectedImg && (
                  <Modal
                    selectedImg={selectedImg}
                    setSelectedImg={setSelectedImg}
                  />
                )}
              </React.Fragment>
            )}
          />

          <Route exact path="/signIn" component={AdminSignIn} />
          <ProtectedRoute exact path="/admin" component={AdminPage} />
        </Router>
      </AuthProvider>
    </div>
  )
}

export default App
