import React from 'react'
import { useParams } from 'react-router-dom'

// Mocked data
import { planetsData } from '../constants/planetsData'

// Components
import PlanetDetailCard from './PlanetDetailCard'

const PlanetDetail = () => {
  const { name } = useParams()

  const planet = planetsData[name]
  return (
    <section id={`planet-${name}`}>
      <article className='planet-detail'>
        <div className='planet-image'>
          <img src={`../../../../images/${name}.png`} alt={name} />
        </div>
        <PlanetDetailCard planet={planet} />
      </article>
    </section>
  )
}

export default PlanetDetail
