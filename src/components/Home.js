import React from 'react'
import CardMan from './inc/CardMan'
import CarouselMan from './inc/CarouselMan'
import Comprehensiv from './inc/Comprehensiv'
import Essential from './inc/Essential'
import Programes from './inc/Programes'
import Trusted from './inc/Trusted'

function Home() {
  return (
    <div>
        <CarouselMan/>
        <Essential/>
        <CardMan/>
        <Comprehensiv/>
        <Trusted/>
        <Programes/>
    </div>
  )
}

export default Home