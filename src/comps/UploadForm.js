import React, { useState } from "react"
import ProgressBar from "./ProgressBar"

const UploadForm = () => {
  const [file, setFile] = useState(null)
  const [error, setError] = useState(null)
  const input = ["image/png", "image/jpeg"]

  const changeHandler = (e) => {
    let selected = e.target.files[0]
    console.log(selected)

    if (selected && input.includes(selected.type)) {
      setFile(selected)
      setError(" ")
    } else {
      setError("Please select an image file (jpeg or png)")
      setFile(null)
    }
  }

  return (
    <div className="input-form">
      <form>
        <label>
          <input type="file" onChange={changeHandler} />
          <span>+</span>
        </label>
        <div className="output">
          {error && <div className="error"> {error}</div>}
          {file && <div> {file.name}</div>}
          {file && (
            <div>
              {" "}
              <ProgressBar file={file} setFile={setFile} />
            </div>
          )}
        </div>
      </form>
    </div>
  )
}

export default UploadForm
