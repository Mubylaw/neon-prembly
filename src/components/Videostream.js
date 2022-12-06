import React, { useEffect, useRef } from 'react'

function VideoStream() {
  let videoRef = useRef(null)
  let photoRef = useRef(null)

  const getUserCamera = () => {
    navigator.mediaDevices
      .getUserMedia({
        video: true,
      })
      .then((stream) => {
        let video = videoRef.current

        video.srcObject = stream

        video.play()
      })
      .catch((error) => {
        console.error(error)
      })
  }

  useEffect(() => {
    getUserCamera()
  }, [videoRef])

  return (
    <div className="container">
      <div className="subtitle">
        Centralise your face and click on the button
      </div>
      <video className="container" ref={videoRef}></video>
    </div>
  )
}

export default VideoStream
