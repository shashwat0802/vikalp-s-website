import React, { useState } from "react"
// import Title from "../Title"
import UploadForm from "../UploadForm"
import ImageGrid from "../ImageGrid"
import Modal from "../Modal"
import TitleAdmin from "../TitleAdmin"

const AdminPage = () => {
  const [selectedImg, setSelectedImg] = useState(null)

  return (
    <div className="admin-page">
      <TitleAdmin />
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  )
}

export default AdminPage
