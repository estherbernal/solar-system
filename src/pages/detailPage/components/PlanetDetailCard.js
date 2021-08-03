import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'

// Components
import PlanetCardFront from './PlanetCardFront'
import PlanetCardBack from './PlanetCardBack'

const PlanetDetailCard = ({ planet, history }) => {
  const goToPreviousPage = () => {
    history.goBack()
  }

  const [toggleState, setToggle] = useState({})

  useEffect(() => {
    setToggle({
      isToggled: null,
    })
  }, [])

  const toggleCard = () => {
    const newIsToggled = !toggleState.isToggled
    setToggle({
      isToggled: newIsToggled,
    })
  }

  return (
    <div className='planet-info'>
      <h2>{planet.name}</h2>
      <div className='planet-info-wrapper'>
        <PlanetCardFront planet={planet} isToggled={toggleState.isToggled} />
        <PlanetCardBack planet={planet} isToggled={toggleState.isToggled} />
      </div>
      <div className='buttons-wrapper'>
        <button className='button' onClick={toggleCard}>
          +
        </button>
        <button className='button' onClick={goToPreviousPage}>
          Back
        </button>
      </div>
    </div>
  )
}

export default withRouter(PlanetDetailCard)
