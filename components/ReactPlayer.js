import React from "react"
import ReactPlayer from "react-player"

function ReelVideo() {
  return (
    <ReactPlayer
    className='react-player'
    url='https://vimeo.com/701093918'
    width='100%'
    height='100%'
    controls
    />
  )
}

export default ReelVideo