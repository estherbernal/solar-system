import React, { Component } from 'react'
import Lottie from 'react-lottie'

// Animation
import animationData from '../files/loading.json'

export default class Loading extends Component {
  state = {
    messages: [
      'Sending meteorite to Earth',
      'Creating life on Mars',
      'Lighting the stars',
      "Hiding invaders' spaceships",
    ],
  }

  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    }
    const { messages } = this.state
    return (
      <div className='loading'>
        <Lottie options={defaultOptions} height={150} width={150} />
        <p className='loading-message fade-in'>
          {messages[Math.round(Math.random() * messages.length - 1)]}
        </p>
      </div>
    )
  }
}
