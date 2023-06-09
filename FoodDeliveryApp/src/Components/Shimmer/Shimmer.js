import React from 'react'
import './Shimmer.css'
import '../../Constants/shimmer-square.gif'
import shimmer from '../../Constants/shimmer.gif'

function Shimmer() {
  return (
    <div className='shimmer-container'>
      <img src= {shimmer} alt='shimmer loading' />
    </div>
    
  )
}

export default Shimmer
