import React from 'react'
import Band from '../components/Band'
import img from '../images/between-the-buried-and-me.jpg'

const BTBAM = () => {
  return (
    <div>
      <Band
        image={img}
        name="Between the Buried and Me"
        information="The latest album, Automata, from BTBAM is a 2 part album (Automata I and Automata II) Automata is a concept album which revolves around the idea of being able to view the dreams of others. "
      />
    </div>
  )
}

export default BTBAM
