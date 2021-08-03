import React from 'react'

const PlanetCardFront = ({ planet, isToggled }) => {
  const { description } = planet

  return (
    <div
      className={
        isToggled ? 'planet-description hide-card' : 'planet-description'
      }
    >
      <p>{description}</p>
    </div>
  )
}

export default PlanetCardFront
