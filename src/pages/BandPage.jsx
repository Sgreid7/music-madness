import React from 'react'
import Band from '../components/Band'
import bands from '../data/bands.json'

const BandPage = (props) => {
  // get the band
  const band = props.match.params.band
  // load in the band data
  const bandData = bands[band]
  // create jsx
  return (
    <>
      <Band
        name={bandData.name}
        image={bandData.image}
        information={bandData.information}
      />
    </>
  )
}

export default BandPage
