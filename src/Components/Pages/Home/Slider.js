import React from 'react'
import './HomeStyle/sliderStyle.css'
import world from "./world.png"
function Slider() {
  return (
    <div class="container-fluid p-0" >
      <div class="row-cols-md-6" id='texts'>
        
      <div class="col-md-6" >
        <h6 class="text" id="sliderfirst">
          WELCOME TO OUR WORLD
        </h6>
        <h1 class="text" id='textbig'>
          VIRTUAL WORLD
        </h1>
        <p class="text">World's first immersive digital collectible Metaverse!</p>
        <button type="button" class="btn btn-primary" id='sliderbtn'>Land Sale</button>
      </div>
      </div>
      <div class="row-cols-md-6">
      <div class="col-md-6">
        
      <img src={world} alt='world-icon' id='world' />

        
        </div>
      </div>
      
    </div>
  )
}

export default Slider