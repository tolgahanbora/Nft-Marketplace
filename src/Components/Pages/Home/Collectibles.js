import React from 'react'
import './HomeStyle/collectibleStyle.css'
function Collectibles() {
  return (
    <div class="container">
    <div class="row">
    <div class="col-md-12">
        <h2 class="text-start" id='collectibleh2'>Collectibles</h2>
    <a href='#'><img src="https://cdn.shopify.com/s/files/1/0037/8008/3782/products/IMG_3679-279592_1024x1024@2x.jpg?v=1614892479.png" class="rounded mx-auto d-block float-start collect" alt="godzilla-kong" id='first'/></a>
    <a href='#'><img src="https://m.media-amazon.com/images/M/MV5BYThkYTFiYTUtNTY0NS00Y2Y0LTk3ZmItMzZjMjZjZWE3NDRiXkEyXkFqcGdeQXVyMjQ3MjU3NTU@._V1_FMjpg_UX1000_.png" class="rounded mx-auto d-block float-start collect"  alt="pacisif-rim"  id='second'/></a>
    <a href='#'><img src="https://1.bp.blogspot.com/-a4ZBe6o4KXY/X4ynGLqOxyI/AAAAAAAADnw/SoT3fOKB9PgPpylma5igP0HDnKBuwsAowCLcBGAsYHQ/w1200-h630-p-k-no-nu/7.png" class="rounded mx-auto d-block float-start  collect" alt="death-stand" id='thirdImage'/></a>
    <a href='#'><img src="https://upload.wikimedia.org/wikipedia/tr/7/7c/Doom_Eternal_kapak.png" class="rounded mx-auto d-block  float-start collect" alt="doom" id='fourthimage'/></a>
    <a href='#'><img src="https://img.redbull.com/images/c_crop,x_239,y_0,h_576,w_461/c_fill,w_400,h_540/q_auto:low,f_auto/redbullcom/2017/10/02/0dcfc95e-9f71-450f-aace-02641ef9e3a3/lol-kupasi.png" class="rounded mx-auto d-block float-start collect" alt="lol-cupa" id='lastimage'/></a>

    </div>
    </div>
    </div>
  )
}

export default Collectibles