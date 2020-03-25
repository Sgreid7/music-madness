import React from 'react'
import Band from '../components/Band'
import img from '../images/periphery.jpg'

const Periphery = () => {
  return (
    <div>
      <Band
        image={img}
        name="Periphery"
        information="Periphery IV: Hail Stan is Periphery's sixth studio album, and their first album on their own label, 3DOT Recordings. This album also features live orchestrations and choir from a Grammy nominated music composer, Randy Slaugh."
      />
    </div>
  )
}

export default Periphery
