import React from 'react'
import './imageUpload.css'
import { PlusIcon } from '../../utils/iconUtils'


const ImageUpload = (props) => {
  const [showCamera, setShowCamera] = React.useState(false)
  const handleImageUpload = (event) => {
    const file = event.target.files[0]
    const reader = new FileReader()
    reader.onload = () => {
      if (reader.readyState === 2) {
        props.handleImageUpload(reader.result)
      }
    }
    if (file) {
      reader.readAsDataURL(file)
    }
  }
  const handleImageClick = () => {
    let elem = document.getElementById(`file-upload`)
    if (elem) {
      elem.click()
    }
  }
  return (
    <center>
      <div>
        <input
          id={'file-upload'}
          hidden
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
        />
        <div
          className="image-uploader-wrapper"
          onClick={() => handleImageClick()}
        >
         {PlusIcon()}
          <span> Upload an image</span>
        </div>
      </div>
    
     
    </center>
  )
}

export default ImageUpload