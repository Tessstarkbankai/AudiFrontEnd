import React from 'react'
import Card from '../Components/Card'
import poster2 from '../Assets/poster2.jpeg'
import poster1 from '../Assets/poster1.jpeg'
import poster3 from '../Assets/poster3.jpeg'
import poster4 from '../Assets/poster4.jpeg'
import poster5 from '../Assets/poster5.jpeg'
import poster6 from '../Assets/poster6.jpeg'
import { Link } from 'react-router-dom'


function Cards() {
  return (
    <div className=' flex justify-around flex-wrap'>
      <Link to='/EventDetails'><Card image={poster1} details={"Wanda Visoion"} date={"30/02/20"}/></Link>
      <Card image={poster2} details={"Multiverse of Madness"} date={"30/02/20"}/>
      <Card image={poster3} details={"Avengers infinty war"} date={"30/02/20"}/>
      <Card image={poster4} details={"Wanda Visoion"} date={"30/02/20"}/>
      <Card image={poster5} details={"Wanda Visoion"} date={"30/02/20"}/>
      <Card image={poster6} details={"Wanda Visoion"} date={"30/02/20"}/>

    </div>
  )
}

export default Cards