import React from 'react'
import Artmarketplace from './Home/Artmarketplace'
import Collectibles from './Home/Collectibles'
import Downloads from './Home/Downloads'
import LastAds from './Home/LastAds'
import Slider from './Home/Slider'
import Footer from './Home/Footer'

function Home() {
  return (
    <div>
      <Slider/>
      <Collectibles/>
      <Artmarketplace/>
      <Downloads/>
      <LastAds/>
      <Footer/>
    </div>
  )
}

export default Home