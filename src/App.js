import React, { useState } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Title from "./comps/Title"
import UploadForm from "./comps/UploadForm"
import ImageGrid from "./comps/ImageGrid"
import Modal from "./comps/Modal"
import AdminPage from "./comps/pages/AdminPage"
import AdminSignIn from "./comps/pages/AdminSignIn"

function App() {
  const [selectedImg, setSelectedImg] = useState(null)

  return (
    <Router>
      <div className="App">
        <Route
          exact
          path="/"
          render={(props) => (
            <React.Fragment>
              <Title />
              <UploadForm />
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
        <Route exact path="/admin" component={AdminPage} />
      </div>
    </Router>
  )
}

export default App
