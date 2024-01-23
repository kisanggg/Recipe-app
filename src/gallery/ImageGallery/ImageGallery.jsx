import React from 'react'
import ImageUpload from '../../component/imageUpload/ImageUpload'
import './imageGallery.css'
const imageLinks = [
  'https://lh3.googleusercontent.com/bAdLD9j1sn95tJBqnYGGXoyfcDk52dws6gOCPJncmEJRGeODr1ageY8fsVLnX4nlP1zvZ8sHkC8_7pNxMhrvQZpv8uxSTHxJxVt3rg=s1024',
  'https://lh3.googleusercontent.com/5uWTVBLqAKQ8AS0fiLZwP_oNAUb3v3NEG9YC6H7c4J8Ykb6vu87Wl08am6ZIy5sABvWbOTGkRk8__pyf0PTn-I3xecm3ouYkcA_E=s1024',
  'https://lh3.googleusercontent.com/2Glig-YXcE8GLTBTXP1DNnICG7ItFaiYiSbDKLQ371p3skv8Py1wKtouFMyv-s6s3k3wK98TZkE9q1oNkUbQBfuFhEaokVVqAcwL=s1024',
  'https://lh3.googleusercontent.com/Cb2WZWP0CFcxYnJ6fRHs6qk1Nn8Y_jG2cgjxiQEUpSK8XIW_C3RDdB2IK9KZJ-X0RRdmeyLIF0-wtmneIMspl1Ezq-SiZNdDQ6Albg=s1024',
  'https://lh3.googleusercontent.com/yVbPtP5axRZ06MR2b5l0wy6prBKmigRmdfSmT8fE1rUflXZMAqc7AepFnu47klox3kLpF_k4Uc-OCjLgZfXzHAGISmf724Ok1_1K=s1024',
  'https://lh3.googleusercontent.com/6H4QGVVcqsZ1-aj56rwGcBtOl1e4viOPpEDbUJe8Mdb5ngiqHv3fecgq-4xarKnIxyj9W6NDxy0FfG1UV523NpA-3RuijATe8ZmbLQ=s1024',
  'https://lh3.googleusercontent.com/Hf4_Wn-ZwyzHQ7_2xf0EjBboCi_DA4jdtEI0gigxwH_Xsb01hBw55nWpLgVRAb2sRfvI13fHaPFmBBlF-cKL3AU58Gx29WHRFwV1IA=s1024',
  'https://lh3.googleusercontent.com/ybZubrzrXXGzoKr412HhmpD7ONOPSTmSTmFkBOd7RW7m1ta7z9EkEmudYxkwS6qGGXNuUIdO6S5UIjGwVg69OL0iZA21w8YoGMsp=s1024',
  'https://lh3.googleusercontent.com/HOc2bMFLc-4TRMC05S2o7kHvwSfVGoRlOWguw5r2UmQYEtFfDtBl_QDvJvD5ziltR3z3s2FIIHg0UCkeXJIpivR5Wg=s1024',
]
function ImageGallery() {
  const [images, setImages] = React.useState(imageLinks)
  return (
    <div className={'imageWrapperContainer'}>
      <>
        <div className={`display-flex`}>
          <h3>Grid Gallery</h3>
        </div>
        <div className="imagesWrapperGrid">
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={''} />
            </div>
          ))}
        </div>
      </>
      
      <ImageUpload
        handleImageUpload={(image) => {
          images.push(image)
          setImages([...images])
          console.log("hi")
        }}
      />
      <>
        <div className={`display-flex`}>
          <h3>Flex Gallery</h3>
        </div>
        <div className="imagesWrapperFlex">
          {images.map((image, index) => (
            <div key={index}>
              <img style={{ width: 250 }} src={image} alt={''} />
            </div>
          ))}
        </div>
      </>
    </div>
  )
}

export default ImageGallery