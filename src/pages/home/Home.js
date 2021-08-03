import React from 'react'
import Flickity from 'react-flickity-component'
import { Breakpoint } from 'react-socks'

// Components
import PlanetCard from './components/PlanetCard'

const flickityOptions = { initialIndex: 0 }

const PLANETS = [
  { name: 'Mercury' },
  { name: 'Venus' },
  { name: 'Earth' },
  { name: 'Mars' },
  { name: 'Jupiter' },
  { name: 'Saturn' },
  { name: 'Uranus' },
  { name: 'Neptune' },
]

const Home = () => {
  return (
    <section className='planets-list gallery'>
      <div className='sun fade-in'></div>
      <Breakpoint medium down>
        <Flickity
          className={'carousel fade-in'}
          elementType={'div'}
          options={flickityOptions}
          disableImagesLoaded={false}
          reloadOnUpdate
          static
        >
          {PLANETS.map((planet) => (
            <PlanetCard key={planet.name} planet={planet} />
          ))}
        </Flickity>
      </Breakpoint>

      <Breakpoint large up>
        {PLANETS.map((planet) => (
          <PlanetCard key={planet.name} planet={planet} />
        ))}
      </Breakpoint>
    </section>
  )
}

export default Home
